const Intern = require('../lib/Intern');

test('create the intern with info', () => {
    const intern = new Intern('Will', 1, "will@email.com", "some school");

    expect(intern.name).toBe('Will');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("will@email.com");
    expect(intern.school).toBe("some school");
});