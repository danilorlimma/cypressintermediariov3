Cypress.Commands.add('cloneViaSSH', project => {
    const domain = 'github.com'
    const caminho ="cd c:\\walmyrnv2024\\interm-v3\\cypress\\downloads\\"
  
    cy.exec(`cd .. && cd .. && ${caminho} && git clone https://${Cypress.env('user_name2')}:${Cypress.env('pass_git')}@${domain}/${Cypress.env('user_name2')}/cypressintermediariov3.git`,{failOnNonZeroExit: false})
  })
  
  
