const form = document.querySelector('.grade-calculator');
const error = form.querySelector('.error');
const tbody = form.querySelector('tbody');

function computeGrade(){
  const rows = tbody.querySelectorAll('tr');
  let totalWeight = 0;
  let containValue = false;
  let err = false;
  let totalRGrade = 0;
  let moduleGrade = 0;
  
  rows.forEach((row, i) => {
    const reqInputs = row.querySelectorAll('.req');
    let hasValue = 0;

    reqInputs.forEach((reqInput) => {
      if(reqInput.value){
        hasValue++;
        containValue = true;
      }
    });
    totalWeight += Number(reqInputs[2].value);

    if(hasValue > 0 && hasValue !== 3 && !err){
      error.innerText = `Please fill up everything in row ${i + 1}.`;
      err = true;
    }
    if(Number(reqInputs[0].value) > Number(reqInputs[1].value) && !err){
      error.innerText = `Score must not be greater than Possible Points (row ${i + 1}).`;
      err = true;
    }
  });

  if(!containValue && !err){
    error.innerText = 'Fill up at least 1 row.';
    err = true;
  }
  if(containValue && totalWeight !== 100 && !err){
    error.innerText = 'The sum of the weight must be 100%.';
    err = true;
  }

  if(!err){
    error.innerText = '';
    
    rows.forEach((row) => {
      const reqInputs = row.querySelectorAll('.req');
      if(reqInputs[0].value)
        totalRGrade += ((Number(reqInputs[0].value) / Number(reqInputs[1].value)) * Number(reqInputs[2].value));
    });
    
    if(totalRGrade >= 96.72 && totalRGrade <= 100) moduleGrade = 1;
    else if(totalRGrade >= 93.38 && totalRGrade <= 96.71) moduleGrade = 1.25;
    else if(totalRGrade >= 90.04 && totalRGrade <= 93.37) moduleGrade = 1.5;
    else if(totalRGrade >= 86.70 && totalRGrade <= 90.03) moduleGrade = 1.75;
    else if(totalRGrade >= 83.36 && totalRGrade <= 86.69) moduleGrade = 2;
    else if(totalRGrade >= 80.02 && totalRGrade <= 83.35) moduleGrade = 2.25;
    else if(totalRGrade >= 76.68 && totalRGrade <= 80.01) moduleGrade = 2.5;
    else if(totalRGrade >= 73.34 && totalRGrade <= 76.67) moduleGrade = 2.75;
    else if(totalRGrade >= 70.00 && totalRGrade <= 73.33) moduleGrade = 3;
    else if(totalRGrade >= 0 && totalRGrade <= 69.99) moduleGrade = 5;
    
    document.getElementById('moduleGrade').value = moduleGrade;
  }
}
function clearGradeInputs(){
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    input.value = null;
  });
}
function addRow(){
  tbody.innerHTML +=
  '<tr>' +
    '<td><input type="text"></td>' +
    '<td><input type="number" class="req" min="1"></td>' +
    '<td><input type="number" class="req" min="1"></td>' +
    '<td><input type="number" class="req" min="1" max="100"></td>' +
  '</tr>';
}
function toggleGradeInfo(){
  modal.classList.toggle('show');
  modal.querySelector('.grade-info-modal').classList.toggle('show');
}