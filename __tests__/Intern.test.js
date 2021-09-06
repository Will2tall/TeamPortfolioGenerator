const Intern = require('../lib/Intern');

test('create the intern with info', () => {
    const intern = new Intern('Will');

    expect(intern.name).toBe('Will');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expecct(intern.school).toEqual(expect.any(Number));
});