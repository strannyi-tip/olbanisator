window.addEventListener("load", ()=>{
    const olbanisator = new Olbanisator();
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let action = document.getElementById("action");
    let copy = document.getElementById("copy");
    let label_success = document.getElementById("success_text");

    action.addEventListener("click", ()=>{
        const text = input.value;
        output.value = olbanisator.do(text);
    });
    copy.addEventListener('click', ()=>{
        navigator.clipboard.writeText(output.value);
        label_success.style.display = 'block';
        setTimeout(()=>{
            label_success.style.display = 'none';
        }, 1000);
    });
});