import { Model } from "sequelize-typescript"
import { getToJSONIfPossible } from "./repository";

describe('repository test', () => {
    describe('getToJSONIfPossible', () => {
        it('call toJSON of model instance', () => {
            const instance = Object.create(Model.prototype);
            instance.toJSON = () => 'test';
            const result = getToJSONIfPossible(instance);
            expect(result).toBe('test');
        })

        it('return non model instance as it is', () => {
            const instance = { toJSON: () => 'test '};
            const result = getToJSONIfPossible(instance);
            expect(result).toBe(instance);
        })
    })
})