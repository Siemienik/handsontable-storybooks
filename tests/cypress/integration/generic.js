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
                cy.hOpenEditor('A1')

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
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above this one (custom name)').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add row below', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add row above and below', () => {
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
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove row').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Remove column', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Remove column').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Remove row & column', () => {
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
            it('Cut', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Cut').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Read only', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'B2')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Read only').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Read only & update two cells', () => {
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
            it('Read only & Cut', () => {
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

        describe('NestedRows', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'NestedRows')
            })

            it('Collapse two rows', () => {
                // collapse first
                cy.get('.ht_nestingCollapse:first')
                    .click({force: true});

                // collapse second
                cy.get('.ht_nestingCollapse:first')
                    .click({force: true});

                cy.get('div.handsontable:first').matchImageSnapshot();
            })
            it('Collapse & expand row', () => {
                // collapse first
                cy.get('.ht_nestingCollapse:first')
                    .click({force: true});

                // collapse second
                cy.get('.ht_nestingCollapse:first')
                    .click({force: true});

                // expand first
                cy.get('.ht_nestingExpand:first')
                    .click({force: true});

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add row above parent', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'Best Rock Performance')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })
            it('Add row below parent', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'Best Rock Performance')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })
            it('Add child row into parent', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'Best Rock Performance')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert child row').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })

            it('Add row above child', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'Florence & The Machine')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row above').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })
            it('Add row below child', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'Florence & The Machine')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert row below').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })
            it('Add child row into child', () => {
                cy.get('.htCore > tbody')
                    .contains('td', 'Florence & The Machine')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Insert child row').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })
            it('Detach child from parent', () => {
                // detach
                cy.get('.htCore > tbody')
                    .contains('td', 'Florence & The Machine')
                    .rightclick();

                cy.contains('.htContextMenu .htItemWrapper', 'Detach from parent').click()

                cy.get('div.handsontable:first').matchImageSnapshot();
            })


            // todo detach from parent - makes errors

        })

        describe('ButtonRendererWithAction', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'ButtonRendererWithAction')
            })

            it('Click a button', () => {
                // detach
                cy.get('.htCore > tbody')
                    .contains('button', '8')
                    .click();

                cy.matchImageSnapshot();
            })


            // todo detach from parent - makes errors

        })

        describe('ValidationResultAsAComment', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'ValidationResultAsAComment')
            })

            it('Invalid cell', () => {
                cy.matchImageSnapshot();
            })

            it('Invalid cell after update', () => {
                cy.hOpenEditor('4.5')

                cy.get('textarea:first').type('{selectall}{del}5,{enter}');

                cy.matchImageSnapshot();
            })

            it('Valid cell after update', () => {
                cy.hOpenEditor('4,')

                cy.get('textarea:first').type('{selectall}{del}5.5{enter}');

                cy.matchImageSnapshot();
            })


        })

        describe('ValidationAndDropDown', () => {
            // Note the use of `beforeEach`
            beforeEach(() => {
                cy.loadStory(STORY, 'ValidationAndDropDown')
            })

            it('Change to invalid year', () => {
                cy.hOpenEditor('2014')

                cy.get('textarea:first').type('{selectall}{del}2014s{enter}');

                cy.matchImageSnapshot();
            })

            it('Change to invalid owner', () => {
                cy.hOpenEditor('John Smith')

                cy.get('textarea:first').type('{selectall}{del}John Sith{enter}');

                cy.matchImageSnapshot();
            })

            it('Change year causes changed name', () => {
                cy.hOpenEditor('2014')

                cy.get('textarea:first').type('{selectall}{del}2015{enter}');

                cy.matchImageSnapshot();
            })

            it('Change owner doesn\'t causes changed year', () => {
                cy.hOpenEditor('James Anthon')

                cy.get('textarea:first').type('{selectall}{del}Andrew Sanchez{enter}');

                cy.matchImageSnapshot();
            })

        })

    })
}