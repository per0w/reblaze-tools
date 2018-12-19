#!/usr/bin/env node

const {argv} = require('yargs')
    .demandCommand(1, 'You need at least one command before moving on')
    .usage(
        `
    ./$0 reblaze:hostDisable host:server1,server2 --site site.com
    `,
    );
const exec = require('./component/exec');

exec.run(argv._[0].split(':'), __dirname);
