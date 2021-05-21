describe('Hot', () => {
    // Note the use of `before`
    before(() => {
        // Visit the storybook iframe page once per file
        cy.visitStorybook()
    })

    // Note the use of `beforeEach`
    beforeEach(() => {
        // The first parameter is the category. This is the `title` in CSF or the value in `storiesOf`
        // The second parameter is the name of the story. This is the name of the function in CSF or the value in the `add`
        // This does not refresh the page, but will unmount any previous story and use the Storybook Router API to render a fresh new story
        cy.loadStory('HOT', 'JustATable')
    })

    it('should change the knob', () => {
        // first parameter is the name of the knob
        // second parameter is the value of the knob
        cy.get('.htCore > tbody')
            .get('tr:first')
            .get('td:first')
            .as('cell')
            .dblclick();
        cy.get('textarea:first').type('{selectall}{del}=1+2{enter}');
        // cy.get('@cell').should....
        cy.matchImageSnapshot();
    })
})