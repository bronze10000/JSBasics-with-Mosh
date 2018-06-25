const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let totalGrade = 0;
    let finalGrade = 0;
    for(i=0; i < marks.length; i++) {
        totalGrade += marks[i];
    }
    finalGrade = totalGrade/marks.length;

    if (finalGrade < 60) return 'F';
    if (finalGrade < 70) return 'D';
    if (finalGrade < 80) return 'C';
    if (finalGrade < 90) return 'B';
    else return 'A'; 
}