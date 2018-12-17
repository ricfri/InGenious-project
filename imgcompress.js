const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

let inDir, outDir;

// set input and output folders
if (argv.in) {
  inDir = argv.in;
} else {
  inDir = '.';
}
if (argv.out) {
  outDir = argv.out;
} else {
  outDir = 'optimized';
}

imagemin([`${inDir}/*.{jpg,png}`], outDir, {
  plugins: [
    imageminMozjpeg({quality: '30'}),
    imageminPngquant({quality: '65-80'}),
  ]
}).then(files => {
  console.log('Image Optimization Reults');
  console.log('==============================');
  logStats(files);
});

function logStats(files) {
  let totalSaved = 0;
  files.forEach(function(obj) {
    let stats = getStats(obj.path);
    console.log(
      Math.round((stats.oldSize - stats.newSize) / stats.oldSize * 100) + '%',
      stats.file
    );
    totalSaved += stats.oldSize - stats.newSize;
  });
  console.log('======================\n', btokb(totalSaved) + ' Saved');
  console.log('', 'Files written to ' + outDir);
}

function getStats(file) {
  let fileName = path.parse(file).base;
  let fileStats = fs.statSync(file);
  let oldFileStats = fs.statSync(path.join(inDir, fileName));
  return {
    file: fileName,
    oldSize: oldFileStats['size'],
    newSize: fileStats['size']
  };
}

function btokb(val) {
  return (val / 1000).toFixed(1) + 'kb';
}
