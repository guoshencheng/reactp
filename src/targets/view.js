import { FileGenerator } from '../FileUtil.js';
import humps from 'humps';
import path from 'path';

export default class View {
  constructor() {
    this.operations = {
      add: this.add
    }
  }
  add(name) {
    var id = humps.decamelize(name, { separator: '_' });
    var fileGenerator = FileGenerator(path.resolve(__dirname, '../../templates/view.ejs'), 'view');
    fileGenerator({ name, id });
  }
}
