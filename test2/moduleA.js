const moduleB = require('./moduleB');

function doSomethingWithModuleB() {
    return moduleB.getData();
}

module.exports = { doSomethingWithModuleB };