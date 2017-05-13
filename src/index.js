import targets from './targets';

const { view, component } = targets();

var handleComponent = (operation, name, option) => {
  if (!component[operation]) {
    console.log(`operation ${operation} is not implement`)
    process.exit()
  } else {
    component[operation](name);
  }
}

var handleView = (operation, name, option) => {
  if (!view[operation]) {
    console.log(`operation ${operation} is not implement`)
    process.exit()
  } else {
    view[operation](name);
  }
}

module.exports = {
  handleComponent, handleView
}

// var flagTest = /-/;

// var flags = process.argv.filter(function(arg) {
  // return flagTest.test(arg);
// });

// var argv = process.argv.filter(function(arg) {
  // return !flagTest.test(arg)
// });

// console.log(argv, flags);

// if (argv.length < 5) {
  // console.log('arguments not enough')
  // process.exit()
// } else {
  // var targetKey = argv[2];
  // var operation = argv[3];
  // var name = argv[4];
  // if (targets[targetKey] && targets[targetKey].operations[operation]) {
    // targets[targetKey] && targets[targetKey].operations[operation](name);
  // } else {
    // console.log('arguments wrong')
    // process.exit()
  // }
// }



