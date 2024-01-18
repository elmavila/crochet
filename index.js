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
    "Comfortable fingergloves suitable for any hand size with a simple pattern for even beginners. You may come across some new stitches, but everything is displayd above."
    ,
    [
      "Slip knot",
      "Chain",
      "Single Crochet",
      "Back Loop Single Crochet",
    ]
  );
}

const pattern = getPattern();

const materialsList = document.getElementById("materials");

pattern.materials.forEach((material) => {
  const li = document.createElement("li");
  li.innerText = material;
  materialsList.appendChild(li);
  console.log(material);
  console.log(li);
});

const introText = document.getElementById("intro");

introText.innerText = pattern.intro;

const stitchesList = document.getElementById("stitches");

