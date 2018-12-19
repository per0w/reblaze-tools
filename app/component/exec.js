/* eslint-disable global-require */
const fs = require('fs');

const execModule = {
    pluginModule(filename) {
        if (!fs.existsSync(`${filename}.js`)) {
            throw new TypeError(`Module ${filename}.js is not found`);
        }
        // eslint-disable-next-line import/no-dynamic-require
        return require(filename);
    },

    run(params, basePath) {
        const [module, command] = params;
        const filename = `${basePath}/modules/${module}/${module}`;

        const object = this.pluginModule(filename);

        const functionCommand = `${command}Command`;

        if (typeof object[functionCommand] !== 'function') {
            throw new TypeError(`Module ${module} does not have command ${command}`);
        }

        return object[functionCommand]();
    },
};

module.exports = execModule;
