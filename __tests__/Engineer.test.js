const Engineer = require('../lib/Engineer');

test('create the engineer with info', () => {
    const engineer = new Engineer('Will', 1, "will@email.com", "githubWill");

    expect(engineer.name).toBe('Will');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("will@email.com");
    expect(engineer.github).toBe("githubWill");
});