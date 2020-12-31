test("test common",()=>{
    expect(2+2).toBe(4)
    expect(2+2).not.toBe(5)
})
test("true or false",()=>{
    expect(1).toBeTruthy()
    expect(0).toBeFalsy()
})
test("number",()=>{
    expect(3).toBeGreaterThan(2)
    expect(0).toBeLessThan(1)
})
test("object",()=>{
    expect({name:"frank"}).toEqual({name:"frank"})
})