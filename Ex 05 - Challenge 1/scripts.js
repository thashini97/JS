// --------------------------------
// ---------BMI Comparison---------
// --------------------------------

/*
student1 and student2 are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ^ 2
(Mass is kg and Height in meter)

1. Store student1's and student2's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Kasun has a higher BMI than Chamal.
4. Print a string to in alert box containing the variable from step 3.
*/

var mass, height, bmik, bmic, isStudent1;

// student1's BMI
mass = prompt("student1's mass : ");
height = prompt("student1's height : ");
bmik = mass / (height * height);

// student2's BMI
mass = prompt("student2's mass : ");
height = prompt("student2's height : ");
bmic = mass / (height * height);

// Boolean
isStudent1 = (bmik > bmic);

alert(student1);
