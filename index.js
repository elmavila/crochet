let data = [
  "Yarn of your choice",
  "Crochet hook that fits your yarn",
  "Scissors",
  "Needle"
];

let list = document.getElementById("myList");

data.forEach((item) =>{
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
});