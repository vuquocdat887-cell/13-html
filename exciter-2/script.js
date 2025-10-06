const arr = [];
let id = null;

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const a = document.getElementById("input").value;
  if (id !== null) {
    arr[id] = a;
    id = null;
    document.getElementById("button").textContent = "thêm";
  } else {
    arr.push(a);
  }
  document.getElementById("input").value = "";
  thema();
});

const thema = () => {
  document.getElementsByClassName("ol")[0].innerHTML = "";
  arr.forEach((brr, crr) => {
    const b = document.createElement("li");
    b.textContent = brr;
    document.getElementsByClassName("ol")[0].appendChild(b);

    const c = document.createElement("button");
    c.textContent = "cập nhật";
    b.appendChild(c);

    const d = document.createElement("button");
    d.textContent = "xóa";
    b.appendChild(d);

    c.addEventListener("click", () => {
      document.getElementById("input").value = brr;
      id = crr;
      document.getElementById("button").textContent = "cập nhật";
    });

    d.addEventListener("click", () => {
      arr.splice(crr, 1);
      thema();
    });
  });
};
