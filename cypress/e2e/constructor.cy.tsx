describe('E2E Тесты на главной странице и модальных окон', function () {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' });
    cy.visit('http://localhost:4000');
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it('Добавляем ингредиенты в бургер', function () {
    cy.get(`[data-cy=${'buns'}]`).as('buns');
    cy.get('[data-cy=mains]').as('mains');
    cy.get('[data-cy=sauces]').as('sauces');

    cy.get('@buns').contains('Добавить').click();
    cy.get('@mains').contains('Добавить').click();
    cy.get('@sauces').contains('Добавить').click();

    cy.get('.constructor-element_pos_top').as('constructorUp');
    cy.get('@constructorUp').contains('Флюоресцентная булка R2-D3 (верх)');
    cy.get('.constructor-element').as('constructorMiddle');
    cy.get('@constructorMiddle').contains('Биокотлета из марсианской Магнолии');
    cy.get('.constructor-element_pos_bottom').as('constructorDown');
    cy.get('@constructorDown').contains('Флюоресцен6тная булка R2-D3(низ)');

    cy.get('.move_button').as('moveButtons');
    cy.get('@moveButtons').then((buttons) => {
      const moveDownButton = buttons[1];
      moveDownButton.click();
      cy.get('.constructor-element').as('constructorMiddle');
      cy.get('@constructorMiddle').contains('Соус фирменный Space Sauce');
    });
  });

  it('проверяем модальное окно: отсутствие', function () {
    cy.get('#modals').children().should('have.length', 0);
  });

  it('проверям модальное окно: открытие', function () {
    cy.contains('Соус фирменный Space Sauce').click();
    cy.get('#modals').children().should('have.length', 2);
    cy.get('#modals').contains('Соус фирменный Space Sauce');
  });

  it('проверям модальное окно: акрытие по клику на крестик', function () {
    cy.contains('Соус фирменный Space Sauce').click();
    cy.get('#modals').find('button').click();
    cy.get('#modals').children().should('have.length', 0);
  });

  it('проверка модального окна: закрытие по esc', function () {
    cy.contains('Соус фирменный Space Sauce').click();
    cy.get('body').type('{esc}');
    cy.get('#modals').children().should('have.length', 0);
  });
});

describe('E2E тесты на оформление заказа', function () {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.intercept('POST', '/api/auth/login', { fixture: 'user.json' });
    cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' });
    cy.intercept('POST', '/api/orders', { fixture: 'order.json' });
    cy.visit('http://localhost:4000');
    cy.setCookie('accessToken', 'accessToken');
    window.localStorage.setItem('refreshToken', 'refreshToken');
  });

  afterEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });

  it('Тестируем оформление заказа', function () {
    cy.get(`[data-cy=${'buns'}]`).as('buns');
    cy.get('[data-cy=mains]').as('mains');
    cy.get('[data-cy=sauces]').as('sauces');

    cy.get('@buns').contains('Добавить').click();
    cy.get('@mains').contains('Добавить').click();
    cy.get('@sauces').contains('Добавить').click();

    cy.contains('Оформить заказ').click();
    cy.get('#modals').children().should('have.length', 2);
    cy.get('#modals').find('h2').contains(60719);
    cy.get('body').type('{esc}');
    cy.get('#modals').children().should('have.length', 0);

    cy.get('.text_type_main-default').contains('Выберите булки');
    cy.get('.text_type_main-default').contains('Выберите начинку');
  });
});
