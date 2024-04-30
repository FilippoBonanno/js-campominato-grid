// mi seleziono il container dove inserirò le celle
let grid = document.getElementById ("grid");

for (let i = 1; i <= 100; i++) {
    let quadrato = squareCreate(i);

    quadrato.addEventListener("click", function() {
        quadrato.innerText = (i);
        quadrato.classList.toggle("active");
    });
    

    grid.append(quadrato);
    
}

