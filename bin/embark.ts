#!/usr/bin/env node

try {
  eval('let __nodeTest = 123;');
} catch(e) {
  if (e.name === 'SyntaxError') {
    console.error("unsupported version of NodeJS. Make sure you are running nodejs 8.11.3 or above");

    process.exit();
  }
}

var Cmd = require('../src/cmd/cmd');
var cli = new Cmd();
cli.process(process.argv);