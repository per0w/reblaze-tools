const utility = {
    isHost: host => /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.?){4}$/.test(host),
    isWeight: weight => typeof weight === 'number' && weight > 0,
    isBoolean: value => typeof value === 'boolean',
};

module.exports = utility;
