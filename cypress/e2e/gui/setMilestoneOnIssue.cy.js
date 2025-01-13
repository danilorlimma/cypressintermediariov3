import { faker } from "@faker-js/faker";

describe('Set milestone on Issue', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
          name: `project-${faker.datatype.uuid()}`,
          description: faker.random.words(5)
        }
      }

    const milestone = {
        title: `sprint-${faker.random.word()}`
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()
        cy.api_createIssue(issue)
        .then(response=>{
            cy.api_createMilestone(response.body.project_id,milestone)
            cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/${response.body.iid}`)

        })


    })
    it('Teste malestone', () => {
        cy.gui_setMilestoneOnIssue(milestone)
        cy.get('.block.milestone').should('contain', milestone.title)
        
    });
});