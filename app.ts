console.log("Your code goes hssssfffere...");

enum ROLE {
  "READ_ONLY",
  "ADMIN",
}

const person: {
  name: string;
  age: number;
  sports: string[];
  role: [number, string];
} = {
  name: "Ashit",
  age: 30,
  sports: ["cricket", "hockey"],
  role: [2, "admin"],
};
// person.role.push("someone");
// person.role[1] = 2;

console.log(person);

const student: {
  name: string;
  age: number;
  role: ROLE;
} = {
  name: "Ashit",
  age: 30,
  role: ROLE.ADMIN,
};

if (student.role == ROLE.ADMIN) {
  console.log("User is admin");
}

console.log(student);

function add(n1: number, n2: number) {
  return n1 + n2;
}

console.log(add(1, 8));

// union type

type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 == "number" && typeof input2 == "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + ", " + input2.toString();
  }
  return result;
}

console.log(combine("max", "hina"));
console.log(combine(10, 8));
