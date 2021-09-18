document.getElementById("fridger").onclick = handleOption;
document.getElementById("first-aid-chamber").onclick = handleOption;
document.getElementById("bin").onclick = handleOption;
document.getElementById("self-sanitization").onclick = handleOption;
document.getElementById("portable-light").onclick = handleOption;
document.getElementById("hand-gesture").onclick = handleOption;
document.getElementById("voice-control").onclick = handleOption;
document.getElementById("gsm-module").onclick = handleOption;
document.getElementById("metal").onclick = handleOption;
document.getElementById("plastic").onclick = handleOption;
document.getElementById("storage-64").onclick = handleOption;
document.getElementById("storage-128").onclick = handleOption;
document.getElementById("camera-8").onclick = handleOption;
document.getElementById("camera-12").onclick = handleOption;

let options = document
  .getElementById("componentsform")
  .querySelectorAll("input");
for (let i = 0; i < options.length; i++) {
  options[i].onclick = handleOption;
}

function handleOption() {
  let itemPrice = Number(this.value);

  if (this.checked) {
    price = price + itemPrice;
  } else {
    price = price - itemPrice;
  }

  showSelections();
  document.getElementById("price").innerHTML = price;
}

function showSelections() {
  let list = [];

  let checkedOnes = document
    .getElementById("componentsform")
    .querySelectorAll("input:checked");

  for (let i = 0; i < checkedOnes.length; i++) {
    let itemname = checkedOnes[i].getAttribute("data-itemname");
    list.push(itemname);
  }

  document.getElementById("selected").innerHTML = list.join("<br>");
}

showSelections();

console.log("hello");
