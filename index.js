var jsdox = require('jsdox'),
    through = require('through2'),
    path = require('path'),
    jsdocParser = require('./node_modules/jsdox/node_modules/jsdoc3-parser'),
    fs = require('fs'),

    analyze = jsdox.analyze,
    generateMD = jsdox.generateMD;

function mkdirParentSync(dirPath) {
    try {
        fs.mkdirSync(dirPath);
    } catch(err) {
        if (err) {
            // parent directory not found
            if (err.errno === 34) {
                fs.mkdirSync(path.dirname(dirPath));
                fs.mkdirSync(dirPath);
            } else {
                throw err;
            }
        }
    }
}

module.exports = function (destination, template) {
    return through.obj(function (file, enc, next) {
        jsdocParser(file.history, function (err, result) {
            if (err) {
                console.error('Error generating docs for file', file, err);
            }
            var data = analyze(result, {});
            var output = generateMD(data, template || 'templates');
            var fullpath = path.join(destination, path.basename(file.history)).replace(/\.js$/, '.md');
            var dirpath = path.dirname(fullpath);
            if (!fs.existsSync(dirpath)) {
                mkdirParentSync(dirpath);
            }
            fs.writeFileSync(fullpath, output);
        });

        next();
    });
};