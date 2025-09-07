function isSameType(value1, value2) {
  //your js code here
	let one = parseValue(value1)
	let two = parseValue(value2)
	if(typeof(one)===typeof(two)) return true;
	return false;
}
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

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
