const STORY = 'ReactSpecific';

describe('React', {baseUrl:'http://localhost:6011/'}, () => {
    beforeEach(() => {
        cy.visitStorybook()
    })

    describe(STORY, () => {

    })
})