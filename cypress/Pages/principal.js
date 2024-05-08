class principal{
    constructor() {
        //Elementos de la pagina principal
        this.entrar_btn= '.swal2-confirm';
        this.registrarse_link= '#navbarSupportedContent > ul > li:nth-child(4) > a';
        this.nombre_txt= '#Nombre';
        this.apaterno_txt= '#Apaterno';
        this.amaterno_txt= '#Amaterno';
        this.usuario_txt= '#Usuario';
        this.correo_txt= '#Correo';
        this.contra_txt= '#Contra';
        this.contraV_txt= '#ContraV';
        this.registrarse_btn= '.modal.show > .modal-dialog > .modal-content > .modal-body > form > :nth-child(16) > :nth-child(2) > .btn';
    }
    //Metodos de la pagina principal
    register(nombre,apaterno,amaterno,usuario,correo,contra){
        cy.get(this.entrar_btn).click();
        cy.get(this.registrarse_link).click();
        cy.get(this.nombre_txt).type(nombre);
        cy.get(this.apaterno_txt).type(apaterno);
        cy.get(this.amaterno_txt).type(amaterno);
        cy.get(this.usuario_txt).type(usuario);
        cy.get(this.correo_txt).type(correo);
        cy.get(this.contra_txt).type(contra);
        cy.get(this.contraV_txt).type(contra);
        cy.get(this.registrarse_btn).click();
    }
}

export default new principal();