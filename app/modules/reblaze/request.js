const ARGV = require('yargs');

const axios = require('axios');

const credentials = require('../../config');

const {apiUrl, apiKey} = credentials.services.reblaze;

const {site} = ARGV.argv;

const getCanonicalnames = async () => {
    const request = await axios.get(`https://${apiUrl}/api/${apiKey}/sites/list`, {});
    return request.data;
};

const getUpStreams = async () => {
    const request = await axios
        .get(`https://${apiUrl}/api/${apiKey}/sites/listupstream`, {
            params: {
                canonicalname: site,
            },
        })
        .catch(err => console.log(err));
    return request.data.back_hosts;
};

const postSetupstream = async data => {
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };
    const body = `${new Buffer.from(JSON.stringify(data)).toString('base64')}`;
    const url = `https://${apiUrl}/api/${apiKey}/`;
    await axios.post(
        `${url}sites/setupstream`,
        `back_hosts=${body}&canonicalname=${site}`,
        config,
        {
            params: {
                canonicalname: site,
            },
        },
    );
    await axios.post(`${url}system/publish`, `back_hosts=${body}&canonicalname=${site}`, config, {
        params: {
            canonicalname: site,
        },
    });
};

module.exports = {
    getUpStreams,
    getCanonicalnames,
    postSetupstream,
};
