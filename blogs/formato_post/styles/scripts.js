var global = 'html';

function validarTab( bloque ) {
    if ((this.global === 'html') && (bloque === 'css-2')){
        let referencia = document.getElementById("css-2");
        referencia.style.display = 'none';
        this.global = 'css';
        let referenciaDos = document.getElementById("html-1");
        referenciaDos.style.display = 'none';
        let referenciaTres = document.getElementById('css-1');
        referenciaTres.style.display = 'block';
        let referenciaCuatro = document.getElementById('html-2');
        referenciaCuatro.style.display = 'block';
    } else if( (this.global === 'css') && (bloque === 'html-2')){
        let referencia = document.getElementById("css-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('html-1');
        referenciaDos.style.display = 'block';
        this.global = 'html';
        let referenciaTres = document.getElementById('html-2');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('css-2');
        referenciaCuatro.style.display = 'block';
    }
}