const students = Object.keys(studentInfo);
const ul = document.querySelector('[data-mutualStudentCourses]');

function generateMutualCourses(){
  Object.keys(studentInfo).forEach((student, i) => {
    const tab = document.querySelector(`[data-maintabwindow="student-${i + 1}"]`);
    const currs = tab.querySelector(`.curriculum-lists`);
    const coreTr = currs.querySelectorAll('#Core-Courses table tbody tr');
    const elecTr = currs.querySelectorAll('#Electives table tbody tr');
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
      const courseCode = courseInfo.children[0].innerText;
      const coreStatus = courseStatus[student].core;
      const units = courseInfo.children[4].innerText;
      const preReqs = courseInfo.children[5].innerText.split(', ');
      var notTaken = false;

      if(!(courses && courseCode in courses)) return;

      preReqs.forEach((preReq) => {
        if(!(preReq in coreStatus)) return;
        if(coreStatus[preReq] !== 'taken')
          notTaken = true;
      });
      
      if(notTaken)
        courses[courseCode] = 'preReq';
      else if(courseInfo.classList.contains('preReq') && preReqs[0] in coreStatus){
        courses[courseCode] = 'notTaken';
        courseInfo.classList.remove('preReq');
      }

      if(courses[courseCode] === 'taken'){
        if(courseInfo.classList.contains('inLoad'))
          courseInfo.classList.remove('inLoad');
        if(courseInfo.classList.contains('notTaken'))
          courseInfo.classList.remove('notTaken');
        if(curriculumType === 'core')
          coreTakenSum += (Number(units)) ? Number(units) : 0;
        if(curriculumType === 'elective')
          elecTakenSum += (Number(units)) ? Number(units) : 0;
      }
      courseInfo.classList.add(courses[courseCode]);
    }
  });

  const mergedCourses = { core: {}, elective: {} };
  const mutualCourses = {};
  const sortedMutualCourses = {};

  for(const student in courseStatus)
  for(const curriculumType in courseStatus[student])
  for(const course in courseStatus[student][curriculumType])
  if(['notTaken', 'inLoad'].includes(courseStatus[student][curriculumType][course])){
    if(!mergedCourses[curriculumType][course])
      mergedCourses[curriculumType][course] = [student];
    else
      mergedCourses[curriculumType][course].push(student);
  }

  if(['core', 'elective'].every(curr => Object.keys(mergedCourses[curr]).length === 0)){
    document.querySelector('.mutual-courses p').style.display = 'block';
    return 0;
  }

  for(const curriculumType in mergedCourses)
  for(const course in mergedCourses[curriculumType])
  if(mergedCourses[curriculumType][course].length > 1){
    const students = mergedCourses[curriculumType][course].sort().join('-');
    if(!mutualCourses[students])
      mutualCourses[students] = [course];
    else
      mutualCourses[students].push(course);
  }

  var line = 1;
  var count = 0;
  while(count < Object.keys(mutualCourses).length){
    for(const name in mutualCourses)
    if(name.split('').filter(char => char === '-').length === line){
      sortedMutualCourses[name] = mutualCourses[name];
      count++;
    }
    line++;
  }
  
  ul.innerHTML = '';
  for(const names in sortedMutualCourses){
    const splitNames = names.split('-');
    var content =
    `<li>` +
      `<div><span>${splitNames.join(', ')}</span></div>` +
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
      const {core, elective} = programCurriculum.IT
      var currType = '';
      var inLoad = false;

      if(core && courseCode in core)
        currType = 'core';
      if(elective && courseCode in elective)
        currType = 'elective';
      if(splitNames.every(name => courseStatus[name][currType][courseCode] === 'inLoad'))
        inLoad = true;

      content += 
        `<tr class="${currType} ${(inLoad) ? "inLoad" : ""}">` +
          `<td>${courseCode}</td>` +
          `<td>${programCurriculum.IT[currType][courseCode][3]}</td>` +
        '</tr>';
    }

    content += '</tbody></table></li>';
    ul.innerHTML += content;
  }
}

const modal = document.querySelector('.modals');
const editNavBtn = modal.querySelector('ul').children;
var editCore = modal.querySelector('.edit-core');
var editElec = modal.querySelector('.edit-elec');
var savedName = '';

modal.addEventListener('click', e => {
  if(!e.target.closest('article'))
    closeModal();
});
function openEditModal(student, program){
  savedName = student;

  editCore.innerHTML = appendCourses('core');
  editElec.innerHTML = appendCourses('elective');

  editNavBtn[0].classList.add('selected');
  editNavBtn[1].classList.remove('selected');
  editCore.classList.add('show');
  editElec.classList.remove('show');
  modal.classList.toggle('show');
  modal.querySelector('.edit-status-modal').classList.toggle('show');

  function appendCourses(curriculumType){
    const courses = courseStatus[student][curriculumType];
    var content = 
    `<table>` +
      `<thead>` +
        `<tr>` +
          `<th>Course Code</th>` +
          `<th>Course Title</th>` +
          `<th>Taken</th>` +
        `</tr>` +
      `</thead>` +
      `<tbody>`;
    Object.keys(courses).forEach((course) => {
      if(['notTaken', 'inLoad'].includes(courses[course])){
        content +=
        `<tr class="${courses[course]}">` +
          `<td>` +
            `<label for="check-${course}">${course}</label>` +
          `</td>` +
          `<td>` +
            `<label for="check-${course}">${programCurriculum[program][curriculumType][course][3]}</label>` +
          `</td>` +
          `<td>` +
            `<input type="checkbox" id="check-${course}" name="${course}">` +
          `</td>` +
        `</tr>`;
      }
    });
    return content + `</tbody></table>`;
  }
}
function updateCourseStatus(){
  const inputs = {
    core: modal.querySelectorAll('.edit-core input'),
    elective: modal.querySelectorAll('.edit-elec input')
  };
  var hasChecked = false;

  for(const currType in inputs){
    for(const input of inputs[currType]){
      if(input.checked){
        courseStatus[savedName][currType][input.name] = 'taken';
        hasChecked = true;
      }
    }
  }
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
function closeModal(){
  const articles = modal.querySelectorAll('article');
  modal.classList.toggle('show');

  articles.forEach((article) => {
    if(article.classList.contains('show'))
      article.classList.toggle('show')
  })
}