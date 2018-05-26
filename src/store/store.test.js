import initStore from './index';
import { addText } from '../actions';

describe('Basic store tests', () => {
    test('Initial text state must be an empty array', () => {
        const store = initStore();
        expect(Array.isArray(store.getState().text)).toBeTruthy();
        expect(store.getState().text.length).toEqual(0);
    });

    test('Store state array must contain an item more after dispatching ADD_TEXT', () => {
        const store = initStore();
        const initialTextLength = store.getState().text.length;
        store.dispatch(addText('Hello World'));

        expect(store.getState().text.length).toEqual(initialTextLength + 1);
    });

    test('String passed to ADD_TEXT must be the last item contained in text state array', () => {
        const store = initStore();
        const dummyText = 'Hello World Again!';
        store.dispatch(addText(dummyText));

        expect(store.getState().text).toContain(dummyText);
    });
});