import principal from '../../Pages/principal';
import {INVALID_USER_LOGIN,VALID_USER_LOGIN,INVALID_PASSWORD_LOGIN}  from "../../data/user";


describe('Test de inicio de sesion del SISUAR',()=>{
    beforeEach(()=>{
        cy.visit('http://sisuar.imta.mx/aplicacion/vista/principal.php');
    });

    it('Prueba de un login exitoso',()=>{
        cy.wait(1000);
        cy.get(principal.entrar_btn).click();
        cy.wait(1000);
        cy.get(principal.login_btn).click();
        cy.wait(1000);
        cy.get(principal.user_login_txt).type(VALID_USER_LOGIN.usuario);
        cy.wait(1000);
        cy.get(principal.pass_login_txt).type(VALID_USER_LOGIN.contra);
        cy.wait(1000);
        cy.get(principal.submit_login_btn).click();
        cy.wait(1000);
        cy.get(principal.logout_btn).should('exist');
    });


    it('Prueba de un login con contraseña incorrecta',()=>{
        cy.wait(1000);
        cy.get(principal.entrar_btn).click();
        cy.wait(1000);
        cy.get(principal.login_btn).click();
        cy.wait(1000);
        cy.get(principal.user_login_txt).type(INVALID_PASSWORD_LOGIN.usuario);
        cy.wait(1000);
        cy.get(principal.pass_login_txt).type(INVALID_PASSWORD_LOGIN.contra);
        cy.wait(1000);
        cy.get(principal.submit_login_btn).click();
        cy.wait(1000);
        cy.contains('La contraseña no es válida.').should('exist');
    });

    it('Prueba de un login con usuario incorrecto',()=>{
        cy.wait(1000);
        cy.get(principal.entrar_btn).click();
        cy.wait(1000);
        cy.get(principal.login_btn).click();
        cy.wait(1000);
        cy.get(principal.user_login_txt).type(INVALID_USER_LOGIN.usuario);
        cy.wait(1000);
        cy.get(principal.pass_login_txt).type(INVALID_USER_LOGIN.contra);
        cy.wait(1000);
        cy.get(principal.submit_login_btn).click();
        cy.wait(1000);
        cy.contains('El usuario no existe.').should('exist');
    });
})