// function isSameType(value1, value2) {
//   //your js code here
// 	if(typeof(value1)===typeof(value2)) return true;
// 	return false;
// }

// // do not change the code below.
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
// alert(isSameType(value1, value2));


function parseValue(value) {
  // Try to parse number
  if (!isNaN(value) && value.trim() !== "") {
    return Number(value);
  }
  // Convert "true"/"false" to boolean
  if (value.toLowerCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;
  // Otherwise keep as string
  return value;
}

function isSameType(value1, value2) {
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = parseValue(prompt("Enter Start of the Range."));
let value2 = parseValue(prompt("Enter End Of the Range."));
alert(isSameType(value1, value2));
