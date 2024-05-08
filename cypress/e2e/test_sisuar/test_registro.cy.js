import principal from '../../Pages/principal';
import {VALID_USER,INVALID_USER}  from "../../data/user";

describe ('Prueba al registro del SISUAR',()=>{
    //1. Ingresar al SITO del SISUAR
    beforeEach(()=>{
       cy.visit('http://sisuar.imta.mx/aplicacion/vista/principal.php');
    });

    //1. Prueba #1 Realizar el Registro con un sector Sin Especificar
    it('Registro Sin Sector VALIDO',()=>{
        principal.register(
            VALID_USER.nombre,
            VALID_USER.apaterno,
            VALID_USER.amaterno,
            VALID_USER.usuario,
            VALID_USER.correo,
            VALID_USER.contra
        );
    });

    it('Registro Sin Sector USUARIO NO VALIDO',()=>{
        principal.register(
            INVALID_USER.nombre,
            INVALID_USER.apaterno,
            INVALID_USER.amaterno,
            INVALID_USER.usuario,
            INVALID_USER.correo,
            INVALID_USER.contra
        );
    });
})