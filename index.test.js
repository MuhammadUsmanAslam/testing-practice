const {stringLength, reverseString, capitalize} = require('./index.js');

test("Calculates Length of string", ()=>{
    expect(
        stringLength('Usman')
    ).toBe(5)
});

test("Reverse a string", ()=>{
    expect(
        reverseString('usman')
    ).toBe("namsu")
});


test("Capitalize a string", () => {
    expect(
      capitalize('usman')
    ).toBe("Usman")
});
