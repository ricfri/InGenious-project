#!/bin/bash
rm -rf public/
mkdir public
mkdir public/stylesheets
mkdir public/javascripts
mkdir public/images
echo "public folder reset"
HTML_FILE_NAME="index.html"
HTML_FILE_NAME_404="404.html"
HTML_FILE_LOCATION="dev/"
CSS_FILE_NAME="design.css"
CSS_FILE_LOCATION="dev/stylesheets/"
JS_FILE_NAME="interact.js"
JS_FILE_LOCATION="dev/javascripts/"
html-minifier --collapse-whitespace $HTML_FILE_LOCATION$HTML_FILE_NAME -o public/$HTML_FILE_NAME
html-minifier --collapse-whitespace $HTML_FILE_LOCATION$HTML_FILE_NAME_404 -o public/$HTML_FILE_NAME_404
echo "$HTML_FILE_NAME minified"
cp $CSS_FILE_LOCATION$CSS_FILE_NAME public/stylesheets/
uglifyjs --compress --mangle -o public/javascripts/$JS_FILE_NAME -- $JS_FILE_LOCATION$JS_FILE_NAME
echo "$JS_FILE_NAME minified"
node imgcompress.js --in="dev/images" --out="public/images"
echo "images minified"
echo "Minification complete!"
