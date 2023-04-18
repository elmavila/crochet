class Pattern {
  constructor(materials, intro, stitches) {
    this.materials = materials;
    this.intro = intro;
    this.stitches = stitches;
  }
}

function getPattern() {
  return new Pattern(
    [
      "Yarn of your choice",
      "Crochet hook that fits your yarn",
      "Scissors",
      "Needle",
    ],
    "Comfortable fingergloves suitable for any hand size",
    ["buble", "buble"]
  );
}

const pattern = getPattern();

const materialsList = document.getElementById("materials");

pattern.materials.forEach((m) => {
  const li = document.createElement("li");
  li.innerText = m;
  materialsList.appendChild(li);
  console.log(m);
  console.log(li);
});
