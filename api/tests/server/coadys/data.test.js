module.exports = {
  cliente: [{
    "id_cliente": "",
    "nombre": "Test 0001",
    "codigo": "TEST_0001",
    "habilitado": true,
    "creado_por": "test1"
  }, {
    "id_cliente": "",
    "nombre": "Test 0002",
    "codigo": "TEST_0002",
    "habilitado": false,
    "creado_por": "test2"
  }],
  updated: false,
  getClientOneUpdate: function () {
    if (!this.updated) {
      this.cliente[0].nombre = this.cliente[0].nombre + "_UPDATED";
      this.cliente[0].codigo = this.cliente[0].codigo + "_UPDATED";
      this.cliente[0].habilitado = !this.cliente[0].habilitado;
      this.cliente[0].modificado_por = "UPDATED";
    }
    return this.cliente[0];
  }
};
