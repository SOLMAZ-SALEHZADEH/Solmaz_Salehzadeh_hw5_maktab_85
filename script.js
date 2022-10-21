// question1
let user = {
  name: "Jhone",
  age: 30,
  sayHello: function () {
    return `Hello ${this.name}`;
  },
};

console.log(user.sayHello())