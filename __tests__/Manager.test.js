const Manager = require("../lib/Manager");

test('create the manager with info', () => {
    const manager = new Manager('Will', 1, "will@email.com", 2);

    expect(manager.name).toBe('Will');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("will@email.com");
    expect(manager.officeNumber).toBe(2);
});