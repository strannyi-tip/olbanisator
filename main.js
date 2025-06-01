window.addEventListener("load", ()=>{
    const olbanisator = new Olbanisator();
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let action = document.getElementById("action");

    action.addEventListener("click", ()=>{
        const text = input.value;
        output.value = olbanisator.do(text);
    });
});