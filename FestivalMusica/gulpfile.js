const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass')); // Le deja a Gulp que busque los binarios de SASS para usarlos
const plumber = require('gulp-plumber');
 
function css(done) {


    src('src/scss/**/*.scss')           // Identifica archivo SASS
        .pipe(plumber())                // Evita que se detenga el workflow
        .pipe(sass())                   // Compila el archivo
        .pipe(dest('build/css'));       // Almacena en el disco duro el archivo compilado


    done(); // Callback para anunciar que se ejecuto la funcion
}

function dev(done) {
    watch('src/scss/**/*', css);    // Le asigna un watch a la funcion de compilar SASS
                                    // src/scss/**/*.scss indica que se busquen todos los archivos en todas las carpetas de manera recursiva con terminacion scss

    done();
}

exports.css = css;
exports.dev = dev;
