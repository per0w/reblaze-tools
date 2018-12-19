const yargs = require('yargs');
/* eslint-disable no-unused-expressions */
yargs(['reblaze:hostDisable', 'host:server1,server2,server3,server4']).default('site', 'site.com')
    .argv;

const reblaze = require('../../../app/modules/reblaze/reblaze');

describe('Reblaze', () => {
    const fServers = reblaze.findServers();
    it('findServers data correctly', () => {
        expect(fServers).toMatchSnapshot();
    });
    it('createConfig when server is disable', async () => {
        const spy = jest.spyOn(reblaze, 'createConfig');
        const createConfig = await reblaze.createConfig(true);
        expect(spy).toHaveBeenCalled();
        expect(createConfig).toMatchSnapshot();
    });
    it('createConfig when server is enable', async () => {
        const spy = jest.spyOn(reblaze, 'createConfig');
        const createConfig = await reblaze.createConfig(false);
        expect(spy).toHaveBeenCalled();
        expect(createConfig).toMatchSnapshot();
    });
});
