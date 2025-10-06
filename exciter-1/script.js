const thema=(arr)=>{
    arr.forEach(brr=>{
        const b=document.createElement("li");
        b.textContent = brr;
        document
          .getElementsByClassName("ol")[0]
          .appendChild(b);
    })
};

document.getElementById('form').addEventListener("submit",e=>{
    e.preventDefault();
    const arr = [];
    const a = document.getElementById("input").value;
    arr.push(a);
    thema(arr);
    document.getElementById("input").value="";

});
