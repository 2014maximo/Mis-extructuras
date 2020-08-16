var global = 'html';

function validarTab( bloque ) {

    if ( ( this.global === 'html' ) && ( bloque === 'css-2' ) ){
        destinar('css', 'html', '2');

    } else if( ( this.global === 'css' ) && ( bloque === 'html-2' ) ){
        destinar('html', 'css', '2');

    } else if ( ( this.global === 'html' ) && ( ( bloque === 'js-3'))) {
        destinar('js', 'html', '3');

    } else if ( ( this.global === 'css' ) && ( bloque === 'js-3' ) ) {
        destinar('js', 'css', '3');

    } else if( ( this.global === 'js' ) && ( bloque === 'html-2' ) ){
        destinar('html', 'js', '2');

    } else if( ( this.global === 'js' ) && ( bloque === 'css-2' ) ){
        destinar('css', 'js', '2');

    } else if( ( this.global === 'css' ) && ( bloque === 'js-2' ) ){
        destinar('js', 'css', '2');

    } else if( ( this.global === 'js' ) && ( bloque === 'css-3' ) ){
        destinar('css', 'js', '3');

    } else if( ( this.global === 'js' ) && ( bloque === 'html-3' ) ){
        destinar('html', 'js', '3');

    } else if( ( this.global === 'css' ) && ( bloque === 'html-3' ) ){
        destinar('html', 'css', '3');

    } else if( ( this.global === 'html' ) && ( bloque === 'js-2' ) ){
        destinar('js', 'html', '2');

    } else if( ( this.global === 'html' ) && ( bloque === 'css-3' ) ){
        destinar( 'css', 'html', '3' );
    }

    function destinar(varGlobal, referencia, nivel) {
        
        this.global = varGlobal;
        // TAB PRINCIPAL
        let referenciaUno = document.getElementById(referencia+'-1');
        referenciaUno.style.display = 'none';
        let referenciaDos= document.getElementById(varGlobal+'-1');
        referenciaDos.style.display = 'block';

        // TAB ASIGNADO
        let referenciaTres = document.getElementById(varGlobal+'-'+nivel);
        referenciaTres.style.display = 'none';
        let referenciaCuatro = document.getElementById(referencia+'-'+nivel);
        referenciaCuatro.style.display = 'block';

        // AREA DE CODIGO
        let tabPrincipal = document.getElementById(referencia+'-content');
        tabPrincipal.style.display = 'none';
        let tabAsignado = document.getElementById(varGlobal+'-content');
        tabAsignado.style.display = 'block';
        tabAsignado.style.backgroundColor = consultarColor(varGlobal);
    }

    function consultarColor( tab ){

        if (tab === 'html'){
            return '#2a2d3e';
        } else if ( tab === 'css' ){
            return ' #002451';
        } else if ( tab === 'js'){
            return '#3a0000';
        }
    }

}