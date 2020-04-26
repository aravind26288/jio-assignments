var leftKey = 37, upKey = 38, rightKey = 39, downKey = 40;
var selectedEmp = 0;
var NAME_ASC = 'name_asc', NAME_DESC = 'name_desc', 
AGE_ASC = 'age_asc', AGE_DESC = 'age_desc', 
SALARY_ASC = 'salary_asc', SALARY_DESC = 'salary_desc';
var empList = [
    {
        name: "Aravind Adavani",
        age: 32,
        salary: 1400000,
        dob: "31-07-1988",
        address: "Bangalore"
    },
    {
        name: "Aravind A",
        age: 32,
        salary: 1400000,
        dob: "31-07-1988",
        address: "Mysore"
    },
    {
        name: "Manoj A",
        age: 40,
        salary: 1400000,
        dob: "10-12-1988",
        address: "Hubli"
    },
    {
        name: "Krishna A",
        age: 25,
        salary: 1400000,
        dob: "09-10-1988",
        address: "Hubli"
    },
    {
        name: "Krishna A",
        age: 25,
        salary: 45400000,
        dob: "09-10-1988",
        address: "Hubli"
    },
    {
        name: "Krishna A",
        age: 25,
        salary: 1400000,
        dob: "09-10-1988",
        address: "Hubli"
    },
    {
        name: "Krishna A",
        age: 25,
        salary: 1400000,
        dob: "09-10-1988",
        address: "Hubli"
    },
    {
        name: "Puneet A",
        age: 25,
        salary: 5900000,
        dob: "09-10-1988",
        address: "Hubli"
    }
];

displayEmployeeList(empList);
document.addEventListener('keydown', empListNavigation);
document.addEventListener('change', sortEmpList);

/*** 
display employee list 
***/
function displayEmployeeList(employeeList){
    document.getElementById('emp-list').innerHTML = employeeList.map((emp, index) => {
        let empDetails = "";
    
        if (index % 2 == 0){
            empDetails +="<div class='clearfix'></div>"
        }
    
        if(index == 0){
            empDetails += "<div class='emp-item activeEmp'><div class='emp-name'><span class='label'>Employee Name:</span> "+emp.name+"</div>"+
        "<div class='emp-age'><span class='label'>Age:</span> "+emp.age+"</div>"+
        "<div class='emp-salary'><span class='label'>Salary:</span> "+emp.salary+"</div>"+
        "<div class='emp-dob'><span class='label'>Date of Birth:</span> "+emp.dob+"</div>"+
        "<div class='emp-address'><span class='label'>Address:</span> "+emp.address+"</div></div>";    
        }
        else{
        empDetails += "<div class='emp-item'><div class='emp-name'><span class='label'>Employee Name:</span> "+emp.name+"</div>"+
        "<div class='emp-age'><span class='label'>Age:</span> "+emp.age+"</div>"+
        "<div class='emp-salary'><span class='label'>Salary:</span> "+emp.salary+"</div>"+
        "<div class='emp-dob'><span class='label'>Date of Birth:</span> "+emp.dob+"</div>"+
        "<div class='emp-address'><span class='label'>Address:</span> "+emp.address+"</div></div>";
        }
        return empDetails;
    }
    ).join('');
}

/*** 
spatial navigation function 
***/
function empListNavigation(e){
    var empItem = document.getElementsByClassName('emp-item');
    var activeEmpItem = document.getElementsByClassName('activeEmp');
    var activePos = 0;
    if(e.keyCode == leftKey){
        activePos = -1;
    }

    if(e.keyCode == rightKey){
        if(selectedEmp == empItem.length){ 
            activePos = 0;
        }
        else{
            activePos = 1;
        }
    }

    if(e.keyCode == upKey){
        activePos = -1;
    }

    if(e.keyCode == downKey){
        if(selectedEmp == empItem.length){ 
            activePos = 0;
        }
        else{
            activePos = 1;
        }

    }

    selectedEmp = selectedEmp+activePos;
  
    if(selectedEmp < 0){
        selectedEmp = 0;
    }
    else if(selectedEmp == empItem.length){
        
    }
    else{
        activeEmpItem[0].classList.remove('activeEmp');
        empItem[selectedEmp].classList.add('activeEmp');
        empItem[selectedEmp].scrollIntoView();
    }
}

/*** 
sort employee list by ascending or descending order 
***/
function sortEmpList(e){
    if(e.target.value != ""){
        switch(e.target.value){
            case NAME_ASC: empList.sort(compareFn('name'));
            displayEmployeeList(empList);
            break;
            case NAME_DESC: empList.sort(compareFn('name')).reverse();
            displayEmployeeList(empList);
            break;
            case AGE_ASC: empList.sort(compareFn('age')).reverse();
            displayEmployeeList(empList);
            break;
            case AGE_DESC: empList.sort(compareFn('age'));
            displayEmployeeList(empList);
            break;
            case SALARY_ASC: empList.sort(compareFn('salary')).reverse();
            displayEmployeeList(empList);
            break;
            case SALARY_DESC: empList.sort(compareFn('salary'));
            displayEmployeeList(empList);
            break;
        }
    }
}

function compareFn(property){
    return function(a,b){
        if(a[property] > b[property]){
            return 1;
        }
        else if(a[property] < b[property]){
            return -1;
        }
        return 0;
    }
}