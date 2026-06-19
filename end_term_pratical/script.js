function calculate() {
    let n = prompt("Enter number of subjects:");
    let total = 0;

    for(let i = 1; i <= n; i++) {
        let marks = +prompt("Enter marks of Subject " + i);
        total = total + marks;
    }

    let avg = total / n;
    let grade;

    if(avg >= 80)
        grade = "A";
    else if(avg >= 60)
        grade = "B";
    else if(avg >= 40)
        grade = "C";
    else
        grade = "F";

    document.getElementById("result").innerHTML =
        "Total = " + total +
        "<br>Average = " + avg +
        "<br>Grade = " + grade;
}