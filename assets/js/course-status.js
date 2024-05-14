const students = Object.keys(studentInfo);
const ul = document.querySelector('[data-mutualStudentCourses]');

function generateMutualCourses(){
  Object.keys(studentInfo).forEach((student, i) => {
    const tab = document.querySelector(`[data-maintabwindow="student-${i + 1}"]`);
    const currs = tab.querySelector(`.curriculum-lists`);
    const coreTr = currs.querySelectorAll('#Core-Courses table tbody tr:not(:last-child)');
    const elecTr = currs.querySelectorAll('#Electives table tbody tr:not(:last-child)');
    const stdInfo = studentInfo[student];
    var coreTakenSum = 0;
    var elecTakenSum = 0;
    
    coreTr.forEach((courseInfo) => updateStatus(courseInfo, 'core'));
    elecTr.forEach((courseInfo) => updateStatus(courseInfo, 'elective'));
    
    tab.querySelector('[data-unitsPassed]').innerText = stdInfo.defaultUnitsPassed + coreTakenSum;
    tab.querySelector('[data-unitsCredited]').innerText = coreTakenSum;
    tab.querySelector('[data-unitsLeft]').innerText = stdInfo.unitsRequired - coreTakenSum;
    tab.querySelector('[data-elecUnitsPassed]').innerText = elecTakenSum;
    tab.querySelector('[data-elecUnitsLeft]').innerText = (elecTakenSum > 6) ? 0 : 6 - elecTakenSum;

    function updateStatus(courseInfo, curriculumType){
      const courses = courseStatus[student][curriculumType];
      const courseCode = courseInfo.children[2].innerText;
      const coreStatus = courseStatus[student].core;
      const units = courseInfo.children[6].innerText;
      const preReqs = courseInfo.children[7].innerText.split(', ');
      var notTaken = false;
    
      if(!(courses && courseCode in courses)) return;
        
      preReqs.forEach((preReq) => {
        if(!(preReq in coreStatus)) return;
        if(coreStatus[preReq] !== 'taken')
          notTaken = true;
      });
      
      if(notTaken)
        courses[courseCode] = 'preReq';
      if(!notTaken && courseInfo.classList.contains('preReq') && courses[courseCode] === 'preReq' && preReqs[0] in coreStatus){
        courses[courseCode] = 'notTaken';
        courseInfo.classList.remove('preReq');
      }
      if(courseInfo.classList.contains('notTaken') && courses[courseCode] === 'taken')
        courseInfo.classList.remove('notTaken');

      courseInfo.classList.add(courses[courseCode]);

      if(courses[courseCode] === 'taken'){
        if(curriculumType === 'core')
          coreTakenSum += (Number(units)) ? Number(units) : 0;
        if(curriculumType === 'elec')
          elecTakenSum += (Number(units)) ? Number(units) : 0;
      }
    }
  });

  const mergedCourses = { core: {}, elective: {} };
  const allMutualCourses = {};
  const sortedMutualCourses = {};

  for(const student in courseStatus)
  for(const curriculumType in courseStatus[student])
  for(const course in courseStatus[student][curriculumType])
  if(courseStatus[student][curriculumType][course] === 'notTaken'){
    if(!mergedCourses[curriculumType][course])
      mergedCourses[curriculumType][course] = [student];
    else
      mergedCourses[curriculumType][course].push(student);
  }

  if(Object.keys(mergedCourses.core).length === 0 && Object.keys(mergedCourses.elective).length === 0){
    document.querySelector('.mutual-courses p').style.display = 'block';
    return 0;
  }

  for(const curriculumType in mergedCourses)
  for(const course in mergedCourses[curriculumType]){
    if(mergedCourses[curriculumType][course].length > 1){
      const students = mergedCourses[curriculumType][course].sort().join('-');
      if(!allMutualCourses[students])
        allMutualCourses[students] = [course];
      else
        allMutualCourses[students].push(course);
    }
  }

  var line = 1;
  var count = 0;
  while(count < Object.keys(allMutualCourses).length){
    for(const name in allMutualCourses)
    if(name.split('').filter(char => char === '-').length === line){
      sortedMutualCourses[name] = allMutualCourses[name];
      count++;
    }
    line++;
  }
  
  ul.innerHTML = '';
  for(const names in sortedMutualCourses){
    var content =
    `<li>` +
      `<div><span>${names.split('-').join(', ')}</span></div>` +
      `<hr>` +
      `<table>` +
        `<thead>` +
          `<tr>` +
            `<th>Course Code</th>` +
            `<th>Course Title</th>` +
          `</tr>` +
        `</thead>` +
        `<tbody>`;
    for(const course in sortedMutualCourses[names]){
      const courseCode = sortedMutualCourses[names][course];
      var currType = '';

      if(courseCode in ITCurr.core)
        currType = 'core';
      if(courseCode in ITCurr.elective)
        currType = 'elective';

      content += 
        `<tr class="${currType}">` +
          `<td>${courseCode}</td>` +
          `<td>${ITCurr[currType][courseCode][3]}</td>` +
        '</tr>';
    }

    content += '</tbody></table></li>';
    ul.innerHTML += content;
  }
}

const modal = document.querySelector('.modals');
const editNavBtn = modal.querySelector('ul').children;
const editCore = modal.querySelector('.edit-core');
const editElec = modal.querySelector('.edit-elec');
var savedName = '';
function openEditModal(name){
  const editModal = modal.querySelector('.edit-status-modal');
  const coreStatus = courseStatus[name].core;
  const elecStatus = courseStatus[name].elective;
  const coreTable = editCore.querySelector('tbody');
  const elecTable = editElec.querySelector('tbody');
  var coreContent = '';
  var elecContent = '';
  savedName = name;
  
  Object.keys(coreStatus).forEach((course) => appendCourses('core', course))
  
  Object.keys(elecStatus).forEach((course) => appendCourses('elective', course))

  function appendCourses(currType, course){
    var content = '';
    if(courseStatus[name][currType][course] === 'notTaken'){
      content +=
      `<tr>` +
        `<td>${course}</td>` +
        `<td>${ITCurr[currType][course][3]}</td>` +
        `<td><input type="checkbox" name="${course}"></td>` +
      `</tr>`;
    }
    
    if(currType === 'core')
      coreContent += content;
    if(currType === 'elective')
      elecContent += content;
  }
  coreTable.innerHTML = coreContent;
  elecTable.innerHTML = elecContent;

  editNavBtn[0].classList.add('selected');
  editNavBtn[1].classList.remove('selected');
  editCore.classList.add('show');
  editElec.classList.remove('show');
  modal.classList.toggle('show');
  editModal.classList.toggle('show');
}
function updateCourseStatus(){
  const inputs = {
    core: modal.querySelectorAll('.edit-core input'),
    elective: modal.querySelectorAll('.edit-elec input')
  };
  var hasChecked = false;

  Object.keys(inputs).forEach((currType) => {
    inputs[currType].forEach((input) => {
      if(input.checked){
        courseStatus[savedName][currType][input.name] = 'taken';
        hasChecked = true
      }
  
    })
  });
  if(hasChecked){
    generateMutualCourses();
    mainTabs.forEach((tab, i) => {
      if(tab.dataset.mainnavtab === 'mutual-courses')
        mainTabs[i].classList.add('selected')
      else
        mainTabs[i].classList.remove('selected')
    });
    mainWindows.forEach((window) => {
      if(window.dataset.maintabwindow === 'mutual-courses')
        window.classList.add('show')
      else
        window.classList.remove('show')
    });
  }
  closeModal();
}
function toggleEditTab(){
  editNavBtn[0].classList.toggle('selected');
  editNavBtn[1].classList.toggle('selected');
  editCore.classList.toggle('show');
  editElec.classList.toggle('show');
}