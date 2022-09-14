
let result = [];
function rounded(marks) {
  let markstr = marks.toString();
  if (
    markstr[markstr.length - 1] === "8" ||
    markstr[markstr.length - 1] === "3"
  ) {
    marks = marks + 2;
    console.log(marks);
    result.push(marks);
  } else if (
    markstr[markstr.length - 1] === "9" ||
    markstr[markstr.length - 1] === "4"
  ) {
    marks = marks + 1;
    console.log(marks);
    result.push(marks);
  } else {
    marks = marks;
    result.push(marks);
  }
}
for (let i = 0; i < grades.length; i++) {
  if (grades[i] + 2 < 40) result.push(grades[i]);
  else if (grades[i] < 40) {
    if (grades[i] + 2 >= 40) {
      result.push(40);
    }
  } else {
    rounded(grades[i]);
  }
  return (result)
}
