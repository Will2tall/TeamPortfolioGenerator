const Engineer = require('../lib/Engineer');

test('create the engineer with info', () => {
    const engineer = new Engineer('Will');

    expect(engineer.name).toBe('Will');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expecct(engineer.github).toEqual(expect.any(String));
});