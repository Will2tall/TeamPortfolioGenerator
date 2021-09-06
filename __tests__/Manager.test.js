const Manager = require("../lib/Manager");

test('create the manager with info', () => {
    const manager = new Manager('Will');

    expect(manager.name).toBe('Will');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expecct(manager.office).toEqual(expect.any(Number));
});