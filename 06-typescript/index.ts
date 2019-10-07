// commonjs
// module.exports = '';
// const data = require('./');

// amd
// define();
// require();

import consoleLogWrapper from './dependency';
import { consoleWrapper as fooBar } from './dependency';
import * as allStuff from './dependency';

consoleLogWrapper('lala');
fooBar('lala', 'hehe');

console.log(allStuff);
