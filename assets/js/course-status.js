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

  const courseMap = new Map();
  Object.entries(courseStatus).forEach(([studentName, {core, elective}]) => {
    Object.entries({...core, ...elective}).forEach(([courseName, status]) => {
      if(!['notTaken', 'inLoad'].includes(status)) return;
      if(!courseMap.has(courseName)){
        courseMap.set(courseName, []);
      }
      courseMap.get(courseName).push(studentName);
    });
  });

  const groupedByStudents = [];
  courseMap.forEach((students, course) => {    
    const group = groupedByStudents.find(g => g.names.toString() === students.toString());
    if(group){
      group.courses.push(course);
    }
    else{
      groupedByStudents.push({ names: students, courses: [course] });
    }
  })
  const mutualCourses = groupedByStudents
  .filter(({names}) => names.length > 1)
  .sort((a, b) => a.names.length - b.names.length);

  ul.innerHTML = '';
  mutualCourses.forEach(({names, courses}) => {
    const {core, elective} = programCurriculum.IT
    var content = `<li><div class="names">`;
    for(let i = 0; i < names.length; i++){
      content += `<span>${names[i]}</span>`;
      if(i + 1 < names.length){
        content += ', ';
      }
    }
    content += `</div>
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Title</th>
        </tr>
      </thead>
      <tbody>`;
    
    for(const course of courses){
      var currType = (core && course in core) ? 'core' : (elective && course in elective)? 'elective' : '';

      content += `
      <tr class="${currType} ${(names.every(name => courseStatus[name][currType][course] === 'inLoad')) ? 'inLoad' : ''}">
        <td>${course}</td>
        <td>${programCurriculum.IT[currType][course][3]}</td>
      </tr>`;
    }
    
    content += '</tbody></table></li>';
    ul.innerHTML += content;
  });
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
    var content = `
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Title</th>
          <th>Taken</th>
        </tr>
      </thead>
      <tbody>`;
    Object.keys(courses).forEach((course) => {
      if(['notTaken', 'inLoad'].includes(courses[course])){
        content += `
        <tr class="${courses[course]}">
          <td>
            <label for="check-${course}">${course}</label>
          </td>
          <td>
            <label for="check-${course}">${programCurriculum[program][curriculumType][course][3]}</label>
          </td>
          <td>
            <input type="checkbox" id="check-${course}" name="${course}">
          </td>
        </tr>`;
      }
    });
    return content + `</tbody></table>`;
  }
}
function updateCourseStatus(){
  const inputs = {
    core: modal.querySelectorAll('.edit-core input'),
    elective: modal.querySelectorAll('.edit-elec input'),
  };
  var hasChecked = false;

  for(const currType in inputs)
  for(const input of inputs[currType])
  if(input.checked){
    courseStatus[savedName][currType][input.name] = 'taken';
    hasChecked = true;
  }

  if(hasChecked){
    generateMutualCourses();
    mainTabs.forEach((tab, i) => {
      mainTabs[i].classList.toggle('selected', tab.dataset.mainnavtab === 'mutual-courses');
    });
    mainWindows.forEach((window) => {
      window.classList.toggle('show', window.dataset.maintabwindow === 'mutual-courses');
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
} //239