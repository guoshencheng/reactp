import { defaultConfig } from './config.js';
import { dirname } from 'path';
import mkdirp from 'mkdirp';
import ejs from 'ejs';
import fs from 'fs';

const pwd = process.cwd();

export const FileGenerator = function(templateDir, out) {
  if (!defaultConfig[out])  {
    console.error(`use illegal key ${out}`);
    process.exit();
  }
  return function(data) {
    var template = ejs.compile(fs.readFileSync(templateDir, 'utf-8'));
    var fileString = template(data);
    fs.readFile(`${pwd}/reactp.config.json`, 'utf8', function (err, result) {
      var outPath
      if (err) {
        outPath = defaultConfig[out]
        console.warn(`can not find file at directory ${pwd}; use default config`);
      } else {
        var config = JSON.parse(result);
        if (config[out]) {
          outPath = config[out];
          console.log(`use file ${pwd}/reactp.config.json`);
        } else {
          outPath = defaultConfig[out]
          console.warn(`missing key ${out} at directory ${pwd}; use default config`);
        }
      }
      var componentFilePath = `${outPath}${data.name}/index.jsx`;
      writeFile(componentFilePath, fileString, function(err, result) {
        if (err) {
          console.error(err);
        }
      });
    });
  }
}

var writeFile = (path, contents, cb) => {
  mkdirp(dirname(path), function (err) {
    if (err) return cb(err);
    fs.writeFile(path, contents, cb);
  });
}
