import promptTeamProfile from '../src/prompt-team-profile';

describe.skip(`prompt-team-profile`, () => {
    it(`returns an array`, () => {
        expect(promptTeamProfile()).toBeInstanceOf(Array);
    });
})