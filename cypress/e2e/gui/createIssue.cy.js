import { faker } from '@faker-js/faker'
/// <reference types="cypress" />

describe('Create Issue', () => {
    beforeEach(() => cy.api_deleteProjects())
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)

        }
    }
    beforeEach(() => {
        cy.login()
        //cy.gui_createProject(issue.project)
        cy.api_createProject(issue.project)      
    });

    it('successfully', () => {
        cy.gui_createIssue(issue)
        cy.get('.issue-details')
        .should('contain',issue.title)
        .and('contain',issue.description)

    });

});
