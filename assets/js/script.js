const main = document.querySelector('main');
const navBrg = document.querySelector('.Nav-Burger');
const nav = main.querySelector('nav');
const mainTabs = main.querySelectorAll('[data-mainNavTab]');
const mainWindows = main.querySelectorAll('[data-mainTabWindow]');
const stdCurrs = Array.from(main.querySelector('.student-currs').children);

mainTabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		mainWindows.forEach((window, i) => {
			if(tab.dataset.mainnavtab === window.dataset.maintabwindow){
				mainTabs[i].classList.add('selected');
				window.classList.add('show');
			}
			else{
				mainTabs[i].classList.remove('selected');
				window.classList.remove('show');
			}
		});
	});
});
stdCurrs.forEach((stdCurr) => {
	const navTabs = Array.from(stdCurr.querySelector('.tab-nav ul').children);
	const currList = stdCurr.querySelector('.curriculum-lists').children;
	const coreCourses = stdCurr.querySelectorAll('#Core-Courses span');
	const currTables = stdCurr.querySelector('.curr-tables').children;

  windowTabBtn(navTabs, currList);
  windowTabBtn(coreCourses, currTables);
});

function toggleClasses(arr1, arr2, val){
	for(let i = 0; i < arr1.length; i++)
		arr1[i].classList.remove('selected');
	arr1[val].classList.add('selected');

	for(let i = 0; i < arr2.length; i++)
		arr2[i].classList.remove('show');
	arr2[val].classList.add('show');
}
function windowTabBtn(tabs, windows){
	tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      for(j = 0; j < windows.length; j++){
        if(i == j){
          tabs[j].classList.add('selected');
          windows[j].classList.add('show');
        }
        else{
          tabs[j].classList.remove('selected');
          windows[j].classList.remove('show');
        }
      }
    });
  });
}
function courseTabReset(){
	const navTabs = main.querySelectorAll('.tab-nav');
	const currList = main.querySelectorAll('.curriculum-lists');

	for(let i = 0; i < 3; i++){
		const li = navTabs[i].querySelector('ul').children;
		const article = currList[i].querySelectorAll('article');

		toggleClasses(li, article, 0);
	}
}
function defaultYearReset(){
	stdCurrs.forEach((stdCurr, i) => {
		const defaultYear = studentInfo[Object.keys(studentInfo)[i]].defaultYear - 1;
		const coreCourses = stdCurr.querySelectorAll('#Core-Courses span');
		const currTables = stdCurr.querySelector('.curr-tables').children;
		
		toggleClasses(coreCourses, currTables, defaultYear);
	});
}

window.onload = () =>{
	generateMutualCourses();
	defaultYearReset();
}

main.addEventListener('click', e => {
	if(!navBrg.classList.contains('on')) return;
	if(!e.target.closest('nav')) collapseNav()
})
navBrg.addEventListener('click', () => collapseNav())

function collapseNav(){
	navBrg.classList.toggle('on');
	nav.classList.toggle('show');
}