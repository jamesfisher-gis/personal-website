const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv))
  .parserConfiguration({'camel-case-expansion': false})
  .env('SB')
  .boolean(optionsForType("boolean"))
  .number(optionsForType("number").concat(optionsForType("integer")))
  .array(optionsForType("array"))
  .argv;
// Clean-up arguments
delete argv._;
delete argv.$0;


const vueConfig = {
  publicPath: argv.pathPrefix
};

module.exports = vueConfig;