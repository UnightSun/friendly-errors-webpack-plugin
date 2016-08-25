'use strict';

function dependenciesNotFound (count) {
  if (count === 1) {
    return 'This dependency was not found in node_modules:';
  }

  return 'These dependencies were not found in node_modules:';
}

function forgetToInstall (count) {
  if (count === 1) {
    return 'Did you forget to run npm install --save for it?';
  }

  return 'Did you forget to run npm install --save for them?';
}

function formatErrors (errors) {
  if (errors.length === 0) {
    return [];
  }

  return [
    dependenciesNotFound(errors.length),
    ''
  ]
    .concat(errors.map(e =>`* ${e.module}`))
    .concat('', forgetToInstall(errors.length));
}

function format (errors) {
  return formatErrors(errors.filter((e) => (
    e.type === 'module-not-found'
  )));
}

module.exports = format;
