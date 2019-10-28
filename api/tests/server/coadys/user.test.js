module.exports = {
  user: [{
    "id_usuario": "",
    "usuario": "test_user_name",
    "nombre": "Test 0001",
    "apellido": "Test 0001",
    "password": "123123",
    "email": "test@test.com",
    "id_perfil": 1,
    "vigencia_desde": "2019-01-01",
    "vigencia_hasta": "2019-01-01",
    "creado_por": "TEST_0001"
  }],
  updated: false,
  getUserOneUpdate: function () {
    if (!this.updated) {
      this.user[0].usuario = this.user[0].usuario + "_UPDATED";
      this.user[0].nombre = this.user[0].nombre + "_UPDATED";
      this.user[0].apellido = this.user[0].apellido + "_UPDATED";
      this.user[0].email = "test_updated@test.com";
      this.user[0].id_perfil = 22;
      this.user[0].lang = "us";
      this.user[0].vigencia_desde = "2016-01-01";;
      this.user[0].vigencia_hasta = "2017-12-31";
      this.user[0].modificadoPor = "Modif User";
    }
    return this.user[0];
  }
};
