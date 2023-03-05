import { faker } from '@faker-js/faker';
import "cypress-real-events";

Cypress.on('uncaught:exception', () => {
    return false;
});

describe("Suite de test pour ajouter un article dans le panier ", () => {
    it('Ok', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').click();
        cy.get('[class="item"]').children('[href="https://magento.softwaretestingboard.com/women/tops-women.html"]').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-60').click();
        cy.get('[class="actions-primary"]').eq(0).contains("Add to Cart").click({ force: true });
        cy.get('[class="action showcart"]').click();
    })
})


describe("Suite de test pour modifier le panier ", () => {
    it('Ok', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').click();
        cy.get('[class="item"]').children('[href="https://magento.softwaretestingboard.com/women/tops-women.html"]').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-60').click();
        cy.get('[class="actions-primary"]').eq(0).contains("Add to Cart").click({ force: true });
        cy.get('.message-success > div > a').click();
        cy.wait(2000);
        cy.get('[class="action action-edit"]').click({ force: true });
        cy.get('#option-label-size-143-item-168').then(($size) => {
            if ($size.hasClass('selected')) {} else {
                cy.get('#option-label-size-143-item-168').click();
            }
        })
        cy.get('#option-label-color-93-item-60').then(($color) => {
            if ($color.hasClass('selected')) {} else {
                cy.get('#option-label-color-93-item-60').click();
            }
        })
        cy.get('[class="input-text qty"]', { timeout: 10000 }).clear({ timeout: 5000 }).type("5");
        cy.get('#product-updatecart-button > span').click();
    })
})


describe("Suite de test pour crée l'adresse de livraison ", () => {
    it('Ok', () => {
        //MODIFIER LE PANIER
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').click();
        cy.get('[class="item"]').children('[href="https://magento.softwaretestingboard.com/women/tops-women.html"]').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-60').click();
        cy.get('[class="actions-primary"]').eq(0).contains("Add to Cart").click({ force: true });
        cy.get('.message-success > div > a').click();
        cy.wait(2000);
        cy.get('[class="action action-edit"]').click({ force: true });
        cy.get('#option-label-size-143-item-168').then(($size) => {
            if ($size.hasClass('selected')) {} else {
                cy.get('#option-label-size-143-item-168').click();
            }
        })
        cy.get('#option-label-color-93-item-60').then(($color) => {
            if ($color.hasClass('selected')) {} else {
                cy.get('#option-label-color-93-item-60').click();
            }
        })
        cy.get('[class="input-text qty"]', { timeout: 10000 }).clear({ timeout: 5000 }).type("5");
        cy.get('#product-updatecart-button > span').click();
        cy.wait(500);
        cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click();
        // CREE L'ADRESSE DE LIVRAISON
        cy.wait(4000);
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(faker.internet.email());
        cy.wait(500);
        cy.get('[name="shippingAddress.lastname"]').type(faker.name.lastName());
        cy.wait(500);
        cy.get('[name="shippingAddress.firstname"]').type(faker.name.firstName());
        cy.wait(500);
        cy.get('[name="shippingAddress.company"]').type('Wild');
        cy.wait(500);
        cy.get('[name="street[0]"]').type(faker.address.street());
        cy.wait(500);
        cy.get('[name="shippingAddress.city"]').type(faker.address.city());
        cy.wait(500);
        cy.get('.select').eq(1).select('France');
        cy.wait(500);
        cy.get('.select').first().select('Nord');
        cy.wait(500);
        cy.get('[name="shippingAddress.postcode"]').type("12345");
        cy.wait(500);
        cy.get('[name="shippingAddress.telephone"]').type(faker.phone.imei());
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(1) > .radio').click();
        cy.wait(2000);
        cy.get('.button > span').click();
        cy.wait(1000);
    })
})


////////////////////////////////////////////////////
//////////  CHANGEMENT D'ADRESSE => SKIP  //////////
////////////////////////////////////////////////////
describe.skip("Suite de test pour changer l'adresse de facturation", () => {
    it('Ok', () => {
        //MODIFIER LE PANIER
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').click();
        cy.get('[class="item"]').children('[href="https://magento.softwaretestingboard.com/women/tops-women.html"]').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-60').click();
        cy.get('[class="actions-primary"]').eq(0).contains("Add to Cart").click({ force: true });
        cy.get('.message-success > div > a').click();
        cy.wait(2000);
        cy.get('[class="action action-edit"]').click({ force: true });
        cy.get('#option-label-size-143-item-168').then(($size) => {
            if ($size.hasClass('selected')) {} else {
                cy.get('#option-label-size-143-item-168').click();
            }
        })
        cy.get('#option-label-color-93-item-60').then(($color) => {
            if ($color.hasClass('selected')) {} else {
                cy.get('#option-label-color-93-item-60').click();
            }
        })
        cy.get('[class="input-text qty"]', { timeout: 10000 }).clear({ timeout: 5000 }).type("5");
        cy.get('#product-updatecart-button > span').click();
        cy.wait(1000);
        cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click();
        // CREER L'ADRESSE DE LIVRAISON
        cy.wait(6000);
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(faker.internet.email());
        cy.wait(500);
        cy.get('[name="shippingAddress.lastname"]').type(faker.name.lastName());
        cy.wait(500);
        cy.get('[name="shippingAddress.firstname"]').type(faker.name.firstName());
        cy.wait(500);
        cy.get('[name="shippingAddress.company"]').type('Wild');
        cy.wait(500);
        cy.get('[name="street[0]"]').type(faker.address.street());
        cy.wait(500);
        cy.get('[name="shippingAddress.city"]').type(faker.address.city());
        cy.wait(500);
        cy.get('.select').eq(1).select('France');
        cy.wait(500);
        cy.get('.select').first().select('Nord');
        cy.wait(500);
        cy.get('[name="shippingAddress.postcode"]').type("12345");
        cy.wait(500);
        cy.get('[name="shippingAddress.telephone"]').type(faker.phone.imei());
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(1) > .radio').click();
        cy.wait(2000);
        cy.get('.button > span').click();
        cy.wait(1000);
        // EDIT ADRESSE FACTURATION (pas obligatoire mais a faire si possible)

        cy.get('#billing-address-same-as-shipping-checkmo').click();
        cy.wait(500);
        cy.get('[name="billingAddresscheckmo.firstname"]').type(faker.name.firstName());
        cy.wait(500);
        cy.get('[name="billingAddresscheckmo.lastname"]').type(faker.name.lastName());
        cy.wait(500);
        cy.get('[name="street[0]"]').type(faker.address.street());
        cy.wait(500);
        cy.get('[name="billingAddresscheckmo.city"]').type(faker.address.city());
        cy.wait(2000);
        //cy.get('.select').eq(1).select('France');
        //cy.wait(500);
        cy.get('.select').eq(1).select('Alaska');
        cy.wait(500);
        cy.get('[name="shippingAddress.postcode"]').type("12345");
        cy.wait(500);
        cy.get('[name="shippingAddress.telephone"]').type(faker.phone.imei());
        cy.wait(500);

        // cy.get('.billing-address-details > .action').click();
        // cy.get('[name="billingAddresscheckmo.firstname"]').type(faker.name.firstName());
        // cy.get('[name="billingAddresscheckmo.lastname"]').type(faker.name.lastName());
        // cy.get('.billing-address-form > form > .fieldset > .street > :nth-child(2)').type(faker.address.streetAddress());
        // cy.get('[name="billingAddresscheckmo.city"]').type(faker.address.city());
        // cy.get('[name="billingAddresscheckmo.region_id"]').select(0);
        // //cy.get('.select').first().select('Nord');
        // cy.get('[name="billingAddresscheckmo.postcode"]').type('14312');
        // cy.get('[name="billingAddresscheckmo.telephone"]').type(faker.phone.imei());
        // cy.get('.action-update').click(); // UPDATE ADRESSE
        // cy.get('.payment-method-content > :nth-child(4) > div.primary').click();
    })
})


describe("Suite de test pour valider le panier ", () => {
    it('Ok', () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#ui-id-4').click();
        cy.get('[class="item"]').children('[href="https://magento.softwaretestingboard.com/women/tops-women.html"]').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-60').click();
        cy.get('[class="actions-primary"]').eq(0).contains("Add to Cart").click({ force: true });
        cy.get('.message-success > div > a').click();
        cy.wait(2000);
        cy.get('[class="action action-edit"]').click({ force: true });
        cy.get('#option-label-size-143-item-168').then(($size) => {
            if ($size.hasClass('selected')) {} else {
                cy.get('#option-label-size-143-item-168').click();
            }
        })
        cy.get('#option-label-color-93-item-60').then(($color) => {
            if ($color.hasClass('selected')) {} else {
                cy.get('#option-label-color-93-item-60').click();
            }
        })
        cy.get('[class="input-text qty"]', { timeout: 10000 }).clear({ timeout: 5000 }).type("5");
        cy.get('#product-updatecart-button > span').click();
        cy.get('.checkout-methods-items > :nth-child(1) > .action > span').click();
        // CREE L'ADRESSE DE LIVRAISON
        cy.wait(2000);
        cy.get('#customer-email-fieldset > .required > .control > #customer-email').type(faker.internet.email());
        cy.wait(500);
        cy.get('[name="shippingAddress.lastname"]').type(faker.name.lastName());
        cy.wait(500);
        cy.get('[name="shippingAddress.firstname"]').type(faker.name.firstName());
        cy.wait(500);
        cy.get('[name="shippingAddress.company"]').type('Wild');
        cy.wait(500);
        cy.get('[name="street[0]"]').type(faker.address.street());
        cy.wait(500);
        cy.get('[name="shippingAddress.city"]').type(faker.address.city());
        cy.wait(500);
        cy.get('.select').eq(1).select('France');
        cy.wait(500);
        cy.get('.select').first().select('Nord');
        cy.wait(500);
        cy.get('[name="shippingAddress.postcode"]').type("12345");
        cy.wait(500);
        cy.get('[name="shippingAddress.telephone"]').type(faker.phone.imei());
        cy.wait(500);
        cy.get(':nth-child(2) > :nth-child(1) > .radio').click();
        cy.wait(2000);
        cy.get('.button > span').click();
        cy.wait(1000);

        // VALIDATION PANIER
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action > span').click();
        cy.get('.base').contains("Thank you for your purchase");

        cy.screenshot('CompletePage');
    })

})