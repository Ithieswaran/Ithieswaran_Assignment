function sortArrayDescendingOrder() {
  const userInputArrayStr = prompt("Enter an array of numbers (comma-separated): ");
  if (userInputArrayStr === null || userInputArrayStr === "") {
    return "Invalid input. Please enter an array of numbers.";
  }

  const userInputArray = userInputArrayStr.split(',').map(Number);

  
  userInputArray.sort(function(a, b) {
    return b - a; 
  });

  return userInputArray;
}

const sortedArray = sortArrayDescendingOrder();
console.log("Sorted Array:", sortedArray);
