const arr = [];
let id = null;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const a = document.getElementById("input").value;
  if (id !== null) {
    arr[id].name = a;
    id = null;
    document.getElementById("button").textContent = "thêm";
  } else {
    arr.push({ name: a, completed: false });
  }
  document.getElementById("input").value = "";
  thema();
});

const thema = () => {
  document.getElementsByClassName("ol")[0].innerHTML = "";
  arr.forEach((brr, crr) => {
    const b = document.createElement("li");
    b.textContent = brr.name;
    document.getElementsByClassName("ol")[0].appendChild(b);

    const c = document.createElement("button");
    c.textContent = "cập nhật";
    b.appendChild(c);

    const d = document.createElement("button");
    d.textContent = "xóa";
    b.appendChild(d);

    const e = document.createElement("button");
    e.textContent = brr.completed ? "Hoàn tác" : "Hoàn thành";
    b.appendChild(e);

    if (brr.completed) {
      b.style.textDecoration = "underline";
      c.style.display = "none";
    }

    c.addEventListener("click", () => {
      document.getElementById("input").value = brr.name;
      id = crr;
      document.getElementById("button").textContent = "cập nhật";
    });

    d.addEventListener("click", () => {
      arr.splice(crr, 1);
      thema();
    });

    e.addEventListener("click", () => {
      brr.completed = !brr.completed;
      thema();
    });
  });
};
