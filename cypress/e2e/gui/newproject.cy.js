import {faker} from '@faker-js/faker'
describe('Novo projeto', () => {
    beforeEach(() => {
        cy.login()
        cy.api_deleteProjects()

    });
    it('Cria projeto', () => {
        const project = {
            name: `project-${faker.datatype.number()}`,
            description: faker.random.words(25)
        }
cy.gui_createProject(project)
cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
    });
});