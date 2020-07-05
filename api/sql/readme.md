
01. Crear Usuario
    - admin

02. Crear Perfil
    - admin
    - ingles

03. Crear Modulo

    - modulo
    - usuario
    - perfil
    - perfil-modulo
    - ingles

04. Crear Perfiles_Modulos
    admin:
        - usuarios (ABM)
        - perfiles (ABM)
        - modulos  (ABM)
        - perfiles_modulos (ABM)
    ingles
        - ingles (ABM)

Inicio

- Tabla usuarios insertar:
    [principal]

- Tabla perfiles insertar:
    [admin]
    [user]
    [module]
    [perfil_module]
    [ingles]
    [client]

- Tabla modulos insertar:
    [user]
    [module]
    [perfil]
    [perfil_module]
    [client]
    [ingles]

- Tabla Perfil-Module, asociar modulos al cada perfil
    admin:  [user,module,perfil,perfil_module,client]
    user:   [ingles]
