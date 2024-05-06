require('cypress-xpath');

/*
 * Sitio a probar: https://www.demoblaze.com/index.html
 *  	- Visitar el sitio
 */


// Crear la funcion de la prueba

describe('Prueba al sitio de DemoBlaze',()=>{
    
   /*beforeEach(()=>{
        cy.visit('https://example.cypress.io');
    });*/
    
    it('Buscar el texto de Navigation Pantalla principal',()=>{
        cy.visit('https://example.cypress.io');
        cy.xpath('/html/body/nav').contains('Commands').click() //Buscar y hacer click en el elemento de Commands
        cy.xpath('//*[@id="navbar"]/ul[1]/li[1]/ul/li[7]/a').contains('Navigation').click() //Busca el elemento de navigation y hace click
    });

    it('Buscar el cy.go desde la pagina de navigation',()=>{
        cy.visit('https://example.cypress.io/commands/navigation');
        cy.xpath('/html/body/div[2]/div/div/div[1]/h4/a').contains('cy.go()').click() //Buscar y hacer click en el elemento de Commands
    });
});