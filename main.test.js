
const sum = require("./main");

test('2+2=', () => {
    expect(sum(2,2)).toBe(4);
});

test('-1+0=', () => {
    expect(sum(-1,0)).toBe(-1);
});

test('1+1=', () => {
    expect(sum(1,1)).toBe(2);
}); 
