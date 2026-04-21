 let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let dept = document.getElementById("dept").value;

    let emp = {
        name: name,
        id: id,
        salary: salary,
        dept: dept
    };

    employees.push(emp);
    alert("Employee Added!");

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees(list = employees) {
    let output = "<table border='1'><tr><th>Name</th><th>ID</th><th>Salary</th><th>Dept</th></tr>";

    list.forEach(emp => {
        output += `<tr>
            <td>${emp.name}</td>
            <td>${emp.id}</td>
            <td>${emp.salary}</td>
            <td>${emp.dept}</td>
        </tr>`;
    });

    output += "</table>";
    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    displayEmployees(filtered);
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = "Total Salary = " + total;
}

function averageSalary() {
    if (employees.length === 0) return;

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML = "Average Salary = " + avg;
}

function countDepartment() {
    let deptCount = {};

    employees.forEach(emp => {
        deptCount[emp.dept] = (deptCount[emp.dept] || 0) + 1;
    });

    let result = "";
    for (let dept in deptCount) {
        result += dept + " : " + deptCount[dept] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}