const STORY = 'AngularSpecific';

describe('Angular',{baseUrl:'http://localhost:6008/'},  () => {
    beforeEach(() => {
        cy.visitStorybook()
    })

    describe(STORY, () => {

    })
})