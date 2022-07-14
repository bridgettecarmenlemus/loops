// LAB 1 - Loops
// Create an array of names of your classmates
// Create a for loop that goes through the array and logs each name in the array
// Now create another for loop that goes through the array in REVERSE and logs each name

// EXAMPLE
// Array: const names = ['Jimmy', 'Frank', 'Ben']
// Output should be:
// Jimmy
// Frank
// Ben
// Ben
// Frank
// Jimmy

const names = ['bridgette', 'maria', 'carla', 'gavin', 'vera', 'mason'] 

for (let i=0; i < names.length ; i++) {
    console.log(names[i]);
}

for (let i= names.length - 1; i >= 0 ; i--){
    console.log(names[i]);
}


