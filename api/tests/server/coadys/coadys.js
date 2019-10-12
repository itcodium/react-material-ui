var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var DataTest = require('./data.test.js');

var ENV = {
  dev: "http://localhost:4444/react-material-ui/api",
  test: ""
};
var URL = ENV["dev"];

FileHelper.status.folderPath = __dirname + '\\data';
FileHelper.status.credencialPath = __dirname + '/../../credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('Cliente', function () {

  it("Save[0]", function (done) {
    chai.request(URL)
      .post("/cliente")
      .send(DataTest.cliente[0])
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/cliente_0.post.json', JSON.stringify(res.body));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('id');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        DataTest.cliente[0].id_cliente = res.body.data.id;
        done();
      });
  });

  it("Save[1]", function (done) {
    chai.request(URL)
      .post("/cliente")
      .send(DataTest.cliente[1])
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/cliente_1.post.json', JSON.stringify(res.body));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('id');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        DataTest.cliente[1].id_cliente = res.body.data.id;
        done();
      });
  });


  it("List By Id", function (done) {
    var id = DataTest.cliente[0].id_cliente;
    chai.request(URL)
      .get("/cliente/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/clienteById.' + id + '.json', JSON.stringify(res.body));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("List By Name", function (done) {
    var name = DataTest.cliente[0].nombre;
    chai.request(URL)
      .get("/cliente/" + name)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/clienteByName.' + name + '.json', JSON.stringify(res.body));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });


  it("List", function (done) {
    chai.request(URL)
      .get("/cliente")
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/cliente.json', JSON.stringify(res.body));
        done();
      });
  });


  it("Delete By Id", function (done) {
    var id = DataTest.cliente[0].id_cliente;
    chai.request(URL)
      .delete("/cliente/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/cliente.delete.id.' + id + '.json', JSON.stringify(res.body));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("ok");

        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        done();
      });
  });

  it("Delete By Code", function (done) {
    var codigo = DataTest.cliente[1].codigo;
    chai.request(URL)
      .delete("/cliente/code/" + codigo)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/cliente.delete.code.' + codigo + '.json', JSON.stringify(res.body));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("ok");

        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        done();
      });
  });




  after(function (done) {
    done();
  });

});
