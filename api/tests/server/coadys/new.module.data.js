module.exports = {
    login: { user_name: "admin", password: "123123" },
    loginNotAllowed: { user_name: "client", password: "123123" },
    token: "",
    module: {
        "id_modulo": null,
        "modulo": "Client",
        "codigo": "CLIENT",
        "vigencia_desde": "2020-01-01",
        "vigencia_hasta": "2030-12-31",
        "creado_por": "test.module"
    },
    perfil: {
        "id_perfil": "",
        "perfil": "Client",
        "vigencia_desde": "2020-01-01",
        "vigencia_hasta": "2030-12-31",
        "creado_por": "test.module",
        "modificado_por": null,
    },
    perfil_module: {
        "id_perfil": null,
        "id_modulo": null,
        "enabled": 1,
        "creado_por": "test.module",
    },
    user: {
        "id_usuario": "",
        "usuario": "Client",
        "nombre": "Cliente",
        "apellido": "Cliente",
        "password": "123123",
        "email": "Client@test.com",
        "id_perfil": null,
        "vigencia_desde": "2020-01-01",
        "vigencia_hasta": "2030-12-31",
        "creado_por": "test.module"
    },
};
