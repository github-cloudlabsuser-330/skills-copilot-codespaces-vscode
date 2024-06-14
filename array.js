const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
// As an illustration, pull names out of the data array
const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);
// Map through an array of arrays of objects
// Example: Extract names from the data array
// Desired outcome: ['John', 'Jane', 'Bob']
const ages = data.flatMap(arr => arr.map(obj => obj.age));
console.log(ages);