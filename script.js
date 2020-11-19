function add() {
  const mainDiv = document.getElementById("main");
  const inp = document.getElementById("input");
  if (inp.value !== "") {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const edit = document.createElement("input");
    const del = document.createElement("input");

    edit.setAttribute("id", "edit");
    edit.setAttribute("type", "button");
    edit.setAttribute("onclick", "edit()");
    edit.setAttribute("value", "Edit");

    del.setAttribute("id", "del");
    del.setAttribute("type", "button");
    del.setAttribute("onclick", "del()");
    del.setAttribute("value", "Delete");
    p.innerText = inp.value;

    div.appendChild(p);
    div.appendChild(edit);
    div.appendChild(del);
    mainDiv.appendChild(div);
    document.body.appendChild(mainDiv);
    inp.value = "";
  }
}

function del() {
  event.target.();
}
