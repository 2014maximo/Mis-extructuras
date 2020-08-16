var global = 'html';

function validarTab( bloque ) {

    if ( ( this.global === 'html' ) && ( bloque === 'css-2' ) ){
        this.global = 'css';
        let referencia = document.getElementById("css-2");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById("html-1");
        referenciaDos.style.display = 'none';
        let referenciaTabUno = document.getElementById('html-content');
        referenciaTabUno.style.display = 'none';
        let referenciaTabUno = document.getElementById('css-content');
        referenciaTabUno.style.display = 'block';
        let referenciaTres = document.getElementById('css-1');
        referenciaTres.style.display = 'block';
        let referenciaCuatro = document.getElementById('html-2');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'css' ) && ( bloque === 'html-2' ) ){
        this.global = 'html';
        let referencia = document.getElementById("css-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('html-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('html-2');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('css-2');
        referenciaCuatro.style.display = 'block';
        let referenciaTabUno = document.getElementById('css-content');
        referenciaTabUno.style.display = 'none';
        let referenciaTabUno = document.getElementById('html-content');
        referenciaTabUno.style.display = 'block';

    } else if ( ( this.global === 'html' ) && ( ( bloque === 'js-3'))) {
        this.global = 'js';
        let referencia = document.getElementById('js-3');
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('html-1');
        referenciaDos.style.display = 'none';
        let referenciaTres = document.getElementById('html-3');
        referenciaTres.style.display = 'block';
        let referenciaCuatro = document.getElementById('js-1');
        referenciaCuatro.style.display = 'block';
        let referenciaTabUno = document.getElementById('html-content');
        referenciaTabUno.style.display = 'none';
        let referenciaTabUno = document.getElementById('js-content');
        referenciaTabUno.style.display = 'block';

    } else if ( ( this.global === 'css' ) && ( bloque === 'js-3' ) ) {
        this.global = 'js';
        let referencia = document.getElementById('js-3');
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('css-1');
        referenciaDos.style.display = 'none';
        let referenciaTres = document.getElementById('css-3');
        referenciaTres.style.display = 'block';
        let referenciaCuatro = document.getElementById('js-1');
        referenciaCuatro.style.display = 'block';
        let referenciaTabUno = document.getElementById('css-content');
        referenciaTabUno.style.display = 'none';
        let referenciaTabUno = document.getElementById('js-content');
        referenciaTabUno.style.display = 'block';

    } else if( ( this.global === 'js' ) && ( bloque === 'html-2' ) ){
        this.global = 'html';
        let referencia = document.getElementById("js-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('html-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('html-2');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('js-2');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'js' ) && ( bloque === 'css-2' ) ){
        this.global = 'css';
        let referencia = document.getElementById("js-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('css-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('css-2');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('js-2');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'css' ) && ( bloque === 'js-2' ) ){
        this.global = 'js';
        let referencia = document.getElementById("css-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('js-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('js-2');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('css-2');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'js' ) && ( bloque === 'css-3' ) ){
        this.global = 'css';
        let referencia = document.getElementById("js-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('css-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('css-3');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('js-3');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'js' ) && ( bloque === 'html-3' ) ){
        this.global = 'html';
        let referencia = document.getElementById("js-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('html-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('html-3');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('js-3');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'css' ) && ( bloque === 'html-3' ) ){
        this.global = 'html';
        let referencia = document.getElementById("css-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('html-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('html-3');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('css-3');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'html' ) && ( bloque === 'js-2' ) ){
        this.global = 'js';
        let referencia = document.getElementById("html-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('js-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('js-2');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('html-2');
        referenciaCuatro.style.display = 'block';

    } else if( ( this.global === 'html' ) && ( bloque === 'css-3' ) ){
        this.global = 'css';
        let referencia = document.getElementById("html-1");
        referencia.style.display = 'none';
        let referenciaDos = document.getElementById('css-1');
        referenciaDos.style.display = 'block';
        let referenciaTres = document.getElementById('css-3');
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById('html-3');
        referenciaCuatro.style.display = 'block';

    }

    function destinar(varGlobal, referencia, nivel) {
        
        this.global = varGlobal;
        let referencia = document.getElementById(varGlobal+'-1');
        referencia.style.display = 'none';
        
    }
}