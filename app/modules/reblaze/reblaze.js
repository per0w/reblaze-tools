const {argv} = require('yargs');

const config = require('../../config');

const {getCanonicalnames, getUpStreams, postSetupstream} = require('./request');

const reblaze = {
    findServers() {
        const {servers} = config;
        return Object.entries(servers)
            .map(([key, value]) => ({[value.ip]: key}))
            .reduce((result, item) => ({...result, ...item}));
    },
    async createConfig(isDown) {
        const hosts = argv._[1]
            .split(':')[1]
            .split(',')
            .map(el => el.toLowerCase());
        const servers = this.findServers();
        const upStreams = await getUpStreams();
        return upStreams.map(upStream => {
            if (hosts.includes(servers[upStream.host])) {
                return {...upStream, down: isDown};
            }
            return upStream;
        });
    },

    async getSiteCommand() {
        console.log(await getCanonicalnames());
    },

    async hostEnableCommand() {
        const curentConfig = await this.createConfig(false);
        await postSetupstream(curentConfig);
    },
    async hostDisableCommand() {
        const curentConfig = await this.createConfig(true);
        await postSetupstream(curentConfig);
    },
};

module.exports = reblaze;
