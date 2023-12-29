const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass')); // Le deja a Gulp que busque los binarios de SASS para usarlos
 
function css(done) {


    src('src/scss/app.scss')            // Identifica archivo SASS
        .pipe(sass())                   // Compila el archivo
        .pipe(dest('build/css'));       // Almacena en el disco duro el archivo compilado


    done(); // Callback para anunciar que se ejecuto la funcion
}

function dev(done) {
    watch('src/scss/app.scss', css);    // Le asigna un watch a la funcion de compilar SASS

    done();
}

exports.css = css;
exports.dev = dev;
