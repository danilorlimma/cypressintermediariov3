import {faker} from '@faker-js/faker'
describe('Novo projeto', () => {
    beforeEach(() => {
        cy.login()

    });
    it('Cria projeto', () => {
        const project = {
            name: `project-${faker.datatype.number()}`,
            description: faker.random.words(25)
        }
cy.gui_createProject(project)
    });
});