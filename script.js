// question2
let steps = 0;
let countSteps = {
  increase: function () {
    return ++steps;
  },
  decrease: function () {
    return --steps;
  },
  reset: function () {
    steps = 0;
  },
  read: function () {
    alert(steps);
  },
};

countSteps.increase()
countSteps.increase()
countSteps.increase()
countSteps.read()
countSteps.decrease()
countSteps.read()
countSteps.reset()
countSteps.read()