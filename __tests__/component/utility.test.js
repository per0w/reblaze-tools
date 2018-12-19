const object = require('../../app/component/utility');

describe('Utility.isHost', () => {
    test('isHost with IP-Address', () => {
        expect(object.isHost('127.0.0.1')).toBe(true);
    });
    test('isHost with Number', () => {
        expect(object.isHost(123)).toBe(false);
    });
    test('isHost with Object?!?', () => {
        expect(object.isHost({val: 123})).toBe(false);
    });
    test('isHost with Bad string', () => {
        expect(object.isHost('Bad string')).toBe(false);
    });
});

describe('Utility.isWeight', () => {
    test('isWeight with Number > 0', () => {
        expect(object.isWeight(11)).toBe(true);
    });
    test('isWeight with number < 0', () => {
        expect(object.isWeight(-1)).toBe(false);
    });
    test('isWeight with Zero', () => {
        expect(object.isWeight(0)).toBe(false);
    });
    test('isWeight with Object?!?', () => {
        expect(object.isWeight({val: 123})).toBe(false);
    });
    test('isWeight with String', () => {
        expect(object.isWeight('Bad string')).toBe(false);
    });
});

describe('Utility.isBoolean', () => {
    test('isBoolean with Boolean', () => {
        expect(object.isBoolean(false)).toEqual(true);
    });
    test('isBoolean with Number', () => {
        expect(object.isBoolean(123)).toEqual(false);
    });
    test('isBoolean with Object?!?', () => {
        expect(object.isBoolean({val: 123})).toEqual(false);
    });
    test('isBoolean with string', () => {
        expect(object.isBoolean('Bad string')).toEqual(false);
    });
});

describe('Utility.getReleasePath', () => {
    test('getReleasePath with string', () => {
        expect(object.isBoolean(false)).toEqual(true);
    });
    test('getReleasePath with integer', () => {
        expect(object.isBoolean(123)).toEqual(false);
    });
    test('getReleasePath with Object?!?', () => {
        expect(object.isBoolean({val: 123})).toEqual(false);
    });
});
