import { mockDeep, mockReset } from 'jest-mock-extended';

const prismaMock = mockDeep<{}>();

beforeEach(() => {
    mockReset(prismaMock);
});

test('jest-mock-extended test', () => {

});
