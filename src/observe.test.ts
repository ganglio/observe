import { describe, test, expect } from "@jest/globals"

import observe from './observe';

describe('Observe', () => {
    test('should return an instance of the object and a watch function', () => {
        const obj = { a: 1 };
        const [observedObj, watch] = observe(obj);
        expect(observedObj).toBeInstanceOf(Object);
        expect(watch).toBeInstanceOf(Function);
    });

    test('should call the watcher function when a property is set', () => {
        const obj = { a: 1 };
        const [observedObj, watch] = observe(obj);
        const mockWatcher = jest.fn();
        watch(mockWatcher);

        observedObj.a = 2;

        expect(mockWatcher).toHaveBeenCalledWith({
            prop: 'a',
            oldValue: 1,
            newValue: 2,
            target: observedObj
        });
    });
});