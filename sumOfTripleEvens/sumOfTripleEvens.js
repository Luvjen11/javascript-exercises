// Step 1: If the element is an even number
// Step 2: Multiply this number by three
// Step 3: Add the new number to the total

function sumOfTripledEvens(array) {
    return array
    .filter((element) => element % 2 ===0)
    .map((element) => element * 3)
    .reduce((total, element) => total + element, 0);
}