#!/bin/bash
rm -rf dist/
mkdir dist
mkdir dist/stylesheets
mkdir dist/javascripts
mkdir dist/images
echo "dist folder reset"
HTML_FILE_NAME="index.html"
HTML_FILE_NAME_404="404.html"
HTML_FILE_LOCATION="public/"
CSS_FILE_NAME="design.css"
CSS_FILE_LOCATION="public/stylesheets/"
JS_FILE_NAME="interact.js"
JS_FILE_LOCATION="public/javascripts/"
html-minifier --collapse-whitespace $HTML_FILE_LOCATION$HTML_FILE_NAME -o dist/$HTML_FILE_NAME
html-minifier --collapse-whitespace $HTML_FILE_LOCATION$HTML_FILE_NAME_404 -o dist/$HTML_FILE_NAME_404
echo "$HTML_FILE_NAME minified"
cp $CSS_FILE_LOCATION$CSS_FILE_NAME dist/stylesheets/
uglifyjs --compress --mangle -o dist/javascripts/$JS_FILE_NAME -- $JS_FILE_LOCATION$JS_FILE_NAME
echo "$JS_FILE_NAME minified"
node imgcompress.js --in="public/images" --out="dist/images"
echo "images minified"
echo "Minification complete!"
