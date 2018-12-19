const jest = require('jest-mock');
const fs = require('fs');
const object = require('../../app/component/exec');

describe('Create config', () => {
    beforeEach(() => {
        fs.existsSync = jest.fn(
            filename => filename === 'base_path/modules/testModule/testModule.js',
        );
        object.pluginModule = jest.fn(module => {
            if (module === 'base_path/modules/testModule/testModule') {
                return {
                    testCommand() {
                        return 'job well done';
                    },
                };
            }
            return null;
        });
    });

    test('execModule.run success', () => {
        expect(object.run(['testModule', 'test'], 'base_path')).toBe('job well done');
    });

    test('execModule.run with non-exist module', () => {
        expect(() => object.run(['not-exists', 'test'], 'base_path')).toThrow(TypeError);
    });

    test('execModule.run with none-exist command', () => {
        expect(() => object.run(['testModule', 'not-exist'], 'base_path')).toThrow(TypeError);
    });
});
