export default () => {
    beforeEach(() => {
        cy.visitStorybook()
    })

    const STORY = 'Generic';
    describe(STORY, () => {
        describe('JustATable', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'JustATable')
            })
            it('Type a formula `=1+2` into A1', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .get('tr:first')
                    .get('td:first')
                    .dblclick();

                cy.get('textarea:first').type('{selectall}{del}=1+2{enter}');
                cy.matchImageSnapshot();
            })
        })

        describe('CustomContextMenu', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'CustomContextMenu')
            })

            it('Add row above', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above this one (custom name)').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add row below', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add row above and below', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                //above
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above this one (custom name)').click()

                //below
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()


                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Clear all cells', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Clear all cells (custom)').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })
        })

        describe('StandardContextMenu', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'StandardContextMenu')
            })
            it('Add rows above', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                // first
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above').click()

                // second
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above').click()


                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add rows below', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                // first
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()

                // second
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()


                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add cols left', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                // first
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert column left').click()

                // second
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert column left').click()


                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add cols right', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                // first
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert column right').click()

                // second
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert column right').click()


                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add cols and rows', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                // up
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above').click()

                // right
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert column right').click()

                // down
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()

                // left
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert column left').click()


                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Remove row', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove row').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Remove column', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove column').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Remove row & column', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                //row
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove row').click()

                //column
                cy.get('.htCore > tbody')
                    .contains('td', 'B3')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove column').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Remove row & column then undo', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                //row
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove row').click()

                //column
                cy.get('.htCore > tbody')
                    .contains('td', 'B3')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove column').click()

                //undo
                cy.get('.htCore > tbody')
                    .contains('td', 'C3')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Undo').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Remove row & column then undu then redo', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                //row
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove row').click()

                //column
                cy.get('.htCore > tbody')
                    .contains('td', 'B3')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove column').click()

                //undo
                cy.get('.htCore > tbody')
                    .contains('td', 'C3')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Undo').click()

                //redo
                cy.get('.htCore > tbody')
                    .contains('td', 'C3')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Redo').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            // todo do not cut a value
            xit('Cut', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Cut').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Read only', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Read only').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Read only & update two cells', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                //read only
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Read only').click()

                //type into B1
                cy.get('.htCore > tbody')
                    .contains('td', 'B1')
                    .click();
                cy.get('textarea:first').type('{selectall}{del}=1+2{enter}');

                //type into B2
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .click();
                cy.get('textarea:first').should('not.be.visible');

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            // todo do not cut a value
            xit('Read only & Cut', () => {
                cy.get('body').click() // without that does not render HOT. ??!

                // read only
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Read only').click()

                // cut
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Cut').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            //todo alignment 3x3
            //todo copy
            //todo cut
            //todo paste - it doesn't exist in a context menu, should check clipboard or paste be a shortcut
        })
    })
}