describe('TAT Costumer Service Center', () => {
  //Setting fields default
  beforeEach(() => {
    cy.visit('./src/index.html');
  })

  //Lesson 01 e 02
  it('checks the application title', () => {
    cy.title().should('be.equal', 'TAT Customer Service Center')
  });
  
  //Exercise e extra 1
  it('fills in the require fields and submits the form', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('João');

    cy.get('#lastName')
      .should('be.visible')
      .type('Silva');

    cy.get('#email')
      .should('be.visible')
      .type('joaosilva@email.com');

    cy.get('#open-text-area')
      .should('be.visible')
      .type('I am satisfied with my order, the product is amazing!', { delay: 0 });

    cy.clock();
    cy.contains('button', 'Send').click();
    cy.get('[class="success"]').should('be.visible');
    cy.tick(3000);
    cy.get('[class="success"]').should('not.be.visible');
  })

  //Extra 2
  it('displays an error message when submitting the form with an email with invalid formatting', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('João');

    cy.get('#lastName')
      .should('be.visible')
      .type('Silva');

    cy.get('#email')
      .should('be.visible')
      .type('joaosilvaemail');

    cy.get('#open-text-area')
      .should('be.visible')
      .type('I am satisfied with my order, the product is amazing!', { delay: 0 });

    cy.clock()
    cy.contains('button', 'Send').click();
    cy.get('[class="error"]').should('be.visible');
    cy.tick(3000);
    cy.get('[class="error"]').should('not.be.visible');
  })

  //Extra 3
  it('verify value of input of phone number is non-numeric', () => {
    cy.get('#phone')
      .should('be.visible').clear()
      .type('teste');

    cy.get('#phone').should('have.value', '');
  })

  //Extra 4
  it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('João');

    cy.get('#lastName')
      .should('be.visible')
      .type('Silva');

    cy.get('#email')
      .should('be.visible')
      .type('joaosilva@email.com');

    cy.get('#open-text-area')
      .should('be.visible')
      .type('I am satisfied with my order, the product is amazing!', { delay: 0 });
      
    cy.get('#phone-checkbox').click()

    cy.clock();
    cy.contains('button', 'Send').click();
    cy.get('[class="error"]').should('be.visible');
    cy.tick(3000);
    cy.get('[class="error"]').should('not.be.visible');
  })

  //Extra 5
  it('fills and clears the first name, last name, email, and phone fields', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('João')
      .should('have.value', 'João')
      .clear().should('have.value', '');

    cy.get('#lastName')
      .should('be.visible')
      .type('Silva')
      .should('have.value', 'Silva')
      .clear().should('have.value', '');

    cy.get('#email')
      .should('be.visible')
      .type('joaosilva@email.com')
      .should('have.value', 'joaosilva@email.com')
      .clear().should('have.value', '');

    cy.get('#phone')
      .should('be.visible')
      .type('5555555')
      .should('have.value', '5555555')
      .clear().should('have.value', '');

    cy.get('#open-text-area')
      .should('be.visible')
      .type('I am satisfied with my order, the product is amazing!', { delay: 0 })
      .should('have.value', 'I am satisfied with my order, the product is amazing!')
      .clear().should('have.value', '');
  })

  //Extra 6
  it('Displays an error message when submitting the form without filling the required fields', () => {
    cy.clock();
    cy.contains('button', 'Send').click();
    cy.get('[class="error"]').should('be.visible');
    cy.tick(3000)
    cy.get('[class="error"]').should('not.be.visible');
  })

  //Extra 7
  it('successfully submits the form using a custom command', () => {
    const data = {
      firstName: "João",
      lastName: "Silva",
      email: "joaosilva@email.com",
      feedback: "I am satisfied with my order, the product is amazing!"
    }
    cy.clock();
    cy.fillMandatoryFieldsAndSubmit(data);
    cy.get('[class="success"]').should('be.visible');
    cy.tick(3000);
    cy.get('[class="success"]').should('not.be.visible');
  })

  //Lesson 03
  it('selects a product (YouTube) by its content', () => {
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
  })

  //Extra 01
  it('selects a product (Mentorship) by its value', () => {
    cy.get('#product').select('mentorship').should('have.value', 'mentorship')
  })

  //Extra 02
  it('selects a product (Blog) by its index', () => {
    cy.get('#product').select(1).should('have.value', 'blog')
  })

  //Lesson 04
  //Exercise
  it('checks the type of service "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
  })
  
  it('checks each type of service', () => {
    cy.get('#support-type').find('input[type="radio"]').each((input) => {
      cy.wrap(input).check().should('be.checked');
    })
  })

  //Lesson 05
  //Exercise
  it('checks both checkboxes, then unchecks the last one', () => {
    cy.get('#check input[type="checkbox"]')
      .as('checkboxes')
      .check()
    
    cy.get('@checkboxes')
      .each((checkbox) => {
        cy.wrap(checkbox).should('be.checked')
      })

    cy.get('@checkboxes').last().uncheck().should('be.empty');
  })

  //Extra - test revised)
  it.only('displays an error message when the phone becomes required but is not filled in before the form submission (revised)', () => {
    cy.get('#firstName')
      .should('be.visible')
      .type('João');

    cy.get('#lastName')
      .should('be.visible')
      .type('Silva');

    cy.get('#email')
      .should('be.visible')
      .type('joaosilva@email.com');

    cy.get('#open-text-area')
      .should('be.visible')
      .type('I am satisfied with my order, the product is amazing!', { delay: 0 });
      
    cy.get('#phone-checkbox').check()
    cy.clock();
    cy.contains('button', 'Send').click();
    cy.get('[class="error"]').should('be.visible');
    cy.tick(3000)
    cy.get('[class="error"]').should('not.be.visible');
  })

  //Lesson 06
  //Exercise
  it('selects a file from the fixtures folder', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json').should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  //extra 01
  it('selects a file simulating a drag-and-drop', () => {
    cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' }).should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  //extra 02
  it('selects a file using a fixture to which an alias was given', () => {
    cy.fixture('example.json', null).as('exampleFile')

    cy.get('input[type="file"]')
    .selectFile('@exampleFile', { action: 'drag-drop' }).should((input) => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })


  //Lesson 07
  //Exercise
  it('verifies that the privacy policy page opens in another tab without the need for a click', () => {
    cy.get("#privacy > a").should('have.attr', 'href', 'privacy.html').and('have.attr', 'target', '_blank')
  })

  //extra 1
  it('access the privacy policy page by removing the target, then clicking on the link', () => {
    cy.get("#privacy > a").invoke('removeAttr', 'target').click()

    cy.get('h1').contains('h1', 'TAT CSC - Privacy Policy').should('be.visible')
  })

})