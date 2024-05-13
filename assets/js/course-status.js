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

  const allMutualCourses = [];
  var allCombinations = [];
  
  for(let j = 1; j < Math.pow(2, students.length); j++){
    const combination = [];
  
    for(let k = 0; k < students.length; k++)
      if((j & (1 << k)) !== 0)
        combination.push(students[k]);
    
    if(combination.length > 1)
      allCombinations.push(combination);
  }

  allCombinations.forEach((names, i) => {
    const allNotTakenCourses = [];

    names.forEach((student) => {
      const notTakenCourses = [];
      const core = courseStatus[student].core;
      const elec = courseStatus[student].elective;
    
      Object.keys(core).forEach((course) => {
        if(core[course] === 'notTaken')
          notTakenCourses.push(course);
      });
      Object.keys(elec).forEach((course) => {
        if(elec[course] === 'notTaken')
          notTakenCourses.push(course);
      });
    
      allNotTakenCourses.push(notTakenCourses);
    });
    
    const mutualCourses = allNotTakenCourses.reduce((array, currentCourses) => {
      return array.filter(course => currentCourses.includes(course));
    });
    
    if(mutualCourses.length > 0)
      allMutualCourses.push(mutualCourses);
    else
      allCombinations.splice(i, 1);
  });

  if(allMutualCourses == 0)
    document.querySelector('.mutual-courses p').style.display = 'block';

  for(let i = allMutualCourses.length - 1; i >= 0; i--){
    for(let j = 0; j < i; j++){
      var occurrence = [];

      occurrence = allCombinations[j].filter(num => {
        return allCombinations[i].includes(num);
      });

      if(occurrence.length > 1)
        allMutualCourses[j] = allMutualCourses[j].filter(course => {
          return !allMutualCourses[i].includes(course);
        });
    }
    
    if(allMutualCourses[i].length === 0){
      allMutualCourses.splice(i, 1);
      allCombinations.splice(i, 1);
    }
  }

  ul.innerHTML = '';
  allMutualCourses.forEach((mutualCourses, i) => {
    const names = [];

    for(let j = 0; j < allCombinations[i].length; j++)
      names.push(allCombinations[i][j]);
    var content = 
    '<li>' +
      '<div><span>' + names.join(', ') + '</span></div>' +
      '<hr>' +
      '<table>' +
        '<thead>' +
          '<tr>' +
            '<th>Course Code</th>' +
            '<th>Course Title</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>';

    mutualCourses.forEach((course) => {
      var currType = null;

      if(course in ITCurr.core)
        currType = 'core';
      if(course in ITCurr.elective)
        currType = 'elective';

      content += 
        `<tr class="${currType}">` +
          `<td>${ITCurr[currType][course][2]}</td>` +
          `<td>${ITCurr[currType][course][3]}</td>` +
        '</tr>';
    });

    content += '</tbody></table></li>';
    ul.innerHTML += content;
  });
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