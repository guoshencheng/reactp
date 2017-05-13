import Component from './component.js';
import View from './view.js';

module.exports = () => {
  const view = new View();
  const component = new Component();
  return {
    view, component
  }
}
