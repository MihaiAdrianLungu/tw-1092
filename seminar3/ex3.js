const students = [ 
    { name: "Alice", scores: [90, 85, 92] }, 
    { name: "Bob", scores: [75, 80, 85] }, 
    { name:"Charlie", scores: [90, 95, 85] }, 
    { name: "David", scores: [100, 100, 100] } 
];

const mappedStudents = students.map(el => {
    const avgScores = el.scores.reduce((acc, el) => acc + el, 0);

    return {
        name: el.name,
        average: avgScores / el.scores.length
    }
}).filter(el => el.average >= 90);

console.log(mappedStudents);