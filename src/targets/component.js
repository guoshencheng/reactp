import { FileGenerator } from '../FileUtil.js';
import humps from 'humps';
import path from 'path';

export default class Component {
  constructor() {
    this.operations = {
      add: this.add
    }
  }
  add(name) {
    var id = humps.decamelize(name, { separator: '_' });
    var fileGenerator = FileGenerator(path.resolve(__dirname, '../../templates/component.ejs'), 'component');
    fileGenerator({ name, id });
  }
}
