export const VALID_USER={
    nombre: 'Juan',
    apaterno: 'Carsi',
    amaterno: 'Castrejon',
    usuario: 'tester98',
    correo: 'maximilainocarsi1@utez.edu.mx',
    contra: '$Hola123$',
}


export const INVALID_USER={
    nombre: 'Maximiliano',
    apaterno: 'Carsi',
    amaterno: 'Castrejon',
    usuario: 'carsimax98',
    correo: 'maximilianocarsi@gmail.com',
    contra: '123',
}

// Estos datos de prueba son para testear el inicio de sesion
export const VALID_USER_LOGIN = {
    usuario: 'carsimax98',
    contra: 'C02101998m'
}

export const INVALID_USER_LOGIN = {
    usuario: 'carsi98',
    contra: 'C0210198m'
}

export const INVALID_PASSWORD_LOGIN = {
    usuario: 'carsimax98',
    contra: 'hola1234'
}