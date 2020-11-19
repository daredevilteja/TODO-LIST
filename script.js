function add() {
  const mainDiv = document.getElementById("main");
  const inp = document.getElementById("input");
  if (inp.value !== "") {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = inp.value;

    div.appendChild(p);
    mainDiv.appendChild(div);
    document.body.appendChild(mainDiv);
    inp.value = "";
  }
}
