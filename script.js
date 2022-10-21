// question3
const data = [
  { name: "soli", age: 31 },
  { name: "sofi", age: 15 },
  { name: "rahi", age: 50 },
  { name: "nasim", age: 40 },
  { name: "elly", age: 60 },
  { name: "sahar", age: 10 },
  { name: "zahra", age: 80 },
];

const sortByAge = (data) => {
  return data.sort((a, b) => a.age - b.age);
};
console.log(sortByAge(data));
