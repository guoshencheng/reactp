#! /usr/bin/env node

"use strict"

var program = require('commander');
var lib = require('../lib');

program.version('0.0.1').command("Component <operation> [name]").action((operation, name) => {
  if (!name) {
    console.log("arguments wrong or arguments not enough");
    process.exit();
  } else {
    lib.handleComponent(operation, name);
  }
})

program.version('0.0.1').command("View <operation> [name]").action((operation, name) => {
  if (!name) {
    console.log("arguments wrong or arguments not enough");
    process.exit();
  } else {
    lib.handleView(operation, name);
  }
})

program.parse(process.argv);
