// question 4
let up = prompt("top");
let right = prompt("right");
let html = prompt("html");
let className = prompt("choose a classname(blue,green or red)");
console.log(html);
const commentAndPlace = (top = 0, right = 0, html, className) => {
  const comment = document.createElement("p");
  comment.innerText = html;
  comment.style.position = "absolute";
  comment.style.top = `${top.length >0 ?top : 0}px`;
  comment.style.right = `${right.length >0 ?right : 0}px`;
  comment.className = className
  document.body.append(comment);
};
commentAndPlace(up, right, html, className);
