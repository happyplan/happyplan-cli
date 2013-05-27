'use strict';

// Project metadata.
var pkg = require('../package.json');

// Display happyplan-cli version.
exports.version = function() {
  console.log('happyplan-cli v' + pkg.version);
};

// Show help, then exit with a message and error code.
exports.fatal = function(msg, code) {
  exports.helpHeader();
  console.log('Fatal error: ' + msg);
  console.log('');
  exports.helpFooter();
  process.exit(code);
};

// Show help and exit.
exports.help = function() {
  exports.helpHeader();
  exports.helpFooter();
  process.exit();
};

// Help header.
exports.helpHeader = function() {
  console.log('happyplan-cli: ' + pkg.description + ' (v' + pkg.version + ')');
  console.log('');
};

// Help footer.
exports.helpFooter = function() {
  [
    'If you\'re seeing this message, happyplan hasn\'t been installed locally to your project.', 
    'For more information about installing and configuring HappyPlan, please see the Getting Started guide:',
    '',
    'http://mdwn.in/gh/happyplan/happyplan#getting-started',
  ].forEach(function(str) { console.log(str); });
};
