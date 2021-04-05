const { series, parallel, src, dest, watch } = require('gulp');
//Require -> Import the dependences of the package.json
const sass = require('gulp-sass');
//Gulp-sass -> The file can read SASS
const imagemin = require('gulp-imagemin');
//Gulp-imagemin -> To minimizate the images in the proyects
const webp = require('gulp-webp');
//Gulp-webp -> To convert images to .webp
const concat = require('gulp-concat');
//Gulp-concat -> To concat JavaScript files

//UTILITIES CSS:
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//UTILITIES JS:
const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


//Function to compile the SASS file to CSS file
function css() {
    return src('src/scss/app.scss') //return the SASS file app.scss
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        //.pipe( sass({
        //    outputStyle: 'expanded'
        //}) ) //Read the SASS file
        .pipe( postcss( [ autoprefixer(), cssnano() ] ) ) //Make betters things at the code CSS
        .pipe( sourcemaps.write('.') )
        .pipe( dest('./StylesCSS') ) //Compile the SASS file to CSS file
}

//Function to minificate the CSS style
function minCSS() {
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }) )
        .pipe( dest('./StylesCSS') )
}

//Function to minimizate the images
function images() {
    return src('src/img/**/*')
        .pipe( imagemin() )
        .pipe( dest('./minimg') )
}

//Function to compilate JavaScript
function javascript() {
    return src('src/JS/**/*.js')
    .pipe( sourcemaps.init() )
        .pipe( concat('bundle.js') )
        .pipe( terser() )
        .pipe( sourcemaps.write('.') )
        .pipe( rename({ suffix: '.min' }) )
        .pipe( dest('./js') )
}

//Function to conver the images to Webp
function vWebp() {
    return src('src/img/**/*')
        .pipe( webp() )
        .pipe( dest('./minimg') )
}

//Function that compilate all changes in the src folder
function saveAll() {
    watch('src/scss/**/*.scss', css);
}

//Exports -> Be available our code
exports.css = css;
exports.minCSS = minCSS;
exports.images = images;
exports.javascript = javascript;
exports.vWebp = vWebp;
exports.saveAll = saveAll;


