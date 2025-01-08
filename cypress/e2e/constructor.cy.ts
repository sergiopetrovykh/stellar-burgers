// Переменные для текста
const addIngredientText = 'Добавить';
const bunText = 'Флюоресцентная булка R2-D3';
const mainFillingText = 'Биокотлета из марсианской Магнолии';
const sauceText = 'Соус фирменный Space Sauce';
const orderNumber = '60719';

// Общий блок
describe('E2E Тесты на главной странице', function () {
  beforeEach(() => {
    cy.intercept('GET', '/api/ingredients', { fixture: 'ingredients.json' });
    cy.visit('/');
  });

  describe('Добавление ингредиентов в конструктор', function () {
    it('Флюоресцентная булка R2-D3 должна добавиться в конструктор', function () {
      cy.get('[data-cy="noTopBun"]').should('be.visible');
      cy.get('[data-cy="noBottomBun"]').should('be.visible');
      cy.get('[data-cy="Флюоресцентная булка R2-D3"]')
        .contains(addIngredientText)
        .click();
      cy.get('[data-cy="TopBun"]').contains(bunText);
      cy.get('[data-cy="BottomBun"]').contains(bunText);
    });

    it('Соус фирменный Space Sauce должен добавиться в конструктор', function () {
      cy.get('[data-cy="noFiller"]').should('be.visible');
      cy.get('[data-cy="Соус фирменный Space Sauce"]')
        .contains(addIngredientText)
        .click();
      cy.get('[data-cy="Filler"]').contains(sauceText);
    });

    it('Биокотлета из марсианской Магнолии должна добавиться в конструктор', function () {
      cy.get('[data-cy="noFiller"]').should('be.visible');
      cy.get(`[data-cy="Биокотлета из марсианской Магнолии"]`)
        .contains(addIngredientText)
        .click();
      cy.get('[data-cy="Filler"]').contains(mainFillingText);
    });
  });

  describe('Проверка модальных окон', function () {
    it('Открытие модального окна', function () {
      cy.get('[data-cy="modal"]').should('not.exist');
      cy.get('[data-cy="Соус фирменный Space Sauce"]').click();
      cy.get('[data-cy="modal"]').contains(sauceText).should('be.visible');
    });

    it('Закрытие модального окна по крестику', function () {
      cy.get('[data-cy="Соус фирменный Space Sauce"]').click();
      cy.get('[data-cy="modal"]')
        .should('exist')
        .contains(sauceText)
        .should('be.visible');
      cy.get('[data-cy="modal-close"]').click();
      cy.get('[data-cy="modal"]').should('not.exist');
    });

    it('Закрытие модального окна по оверлею', function () {
      cy.get('[data-cy="Соус фирменный Space Sauce"]').click();
      cy.get('[data-cy="modal"]')
        .should('exist')
        .contains(sauceText)
        .should('be.visible');
      cy.get('[data-cy="modal-overlay"]').click({ force: true });
      cy.get('[data-cy="modal"]').should('not.exist');
    });
  });

  describe('Оформление заказа', function () {
    it('Проверяем успешное оформление заказа', function () {
      cy.intercept('GET', '/api/auth/user', { fixture: 'user.json' });
      cy.intercept('POST', '/api/orders', { fixture: 'order.json' });
      cy.setCookie('accessToken', 'mockAccessToken');
      window.localStorage.setItem('refreshToken', 'mockRefreshToken');
      cy.visit('/');

      // Проверяем, что конструктор пуст
      cy.get('[data-cy="noTopBun"]').should('be.visible');
      cy.get('[data-cy="noBottomBun"]').should('be.visible');
      cy.get('[data-cy="noFiller"]').should('be.visible');

      // Добавляем ингредиенты в конструктор
      cy.get('[data-cy="Флюоресцентная булка R2-D3"]')
        .contains(addIngredientText)
        .click();
      cy.get('[data-cy="Соус фирменный Space Sauce"]')
        .contains(addIngredientText)
        .click();
      cy.get('[data-cy="Биокотлета из марсианской Магнолии"]')
        .contains(addIngredientText)
        .click();

      // Нажимаем кнопку оформления заказа
      cy.get('button').contains('Оформить заказ').click();

      // Проверяем, что открылась модалка с номером заказа
      cy.get('[data-cy="modal"]').contains(orderNumber).should('be.visible');

      // Закрываем модалку
      cy.get('[data-cy="modal-close"]').click();
      cy.get('[data-cy="modal"]').should('not.exist');

      // Проверяем, что конструктор очистился
      cy.get('[data-cy="noTopBun"]').should('be.visible');
      cy.get('[data-cy="noBottomBun"]').should('be.visible');
      cy.get('[data-cy="noFiller"]').should('be.visible');

      // Удаляем токены и проверяем, что тест завершился успешно
      cy.clearCookie('accessToken');
      window.localStorage.removeItem('refreshToken');
    });
  });
});
