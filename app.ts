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
