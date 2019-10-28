var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var DataTest = require('./client.test.js');

var ENV = {
  dev: "http://localhost:4444/react-material-ui/api",
  prod: "http://itcodium.tech/api"
};
var URL = ENV["dev"];

FileHelper.status.folderPath = __dirname + '\\data';
FileHelper.status.credencialPath = __dirname + '/../../credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('client', function () {

  it("Save client[0]", function (done) {
    chai.request(URL)
      .post("/client")
      .send(DataTest.client[0])
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/client_0.post.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('id');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        DataTest.client[0].id_cliente = res.body.data.id;
        done();
      });
  });

  it("Save client[1]", function (done) {
    chai.request(URL)
      .post("/client")
      .send(DataTest.client[1])
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/client_1.post.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('id');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        DataTest.client[1].id_cliente = res.body.data.id;
        done();
      });
  });

  it("Update client", function (done) {
    var client = DataTest.getClientOneUpdate();
    chai.request(URL)
      .put("/client/" + client.id_cliente)
      .send(client)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/client.updated.id.' + client.id_cliente + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("ok");
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        done();
      });
  });

  it("List By Name", function (done) {
    var name = DataTest.client[0].nombre;
    chai.request(URL)
      .get("/client/" + name)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/clientByName.' + name + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("List By Id", function (done) {
    var id = DataTest.client[0].id_cliente;
    chai.request(URL)
      .get("/client/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/clientById.' + id + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("List", function (done) {
    chai.request(URL)
      .get("/client")
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/client.json', JSON.stringify(res));
        done();
      });
  });

  it("Delete By Id", function (done) {
    var id = DataTest.client[0].id_cliente;
    chai.request(URL)
      .delete("/client/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/client.delete.id.' + id + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("ok");

        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        done();
      });
  });

  it("Delete By Code", function (done) {
    var codigo = DataTest.client[1].codigo;
    chai.request(URL)
      .delete("/client/code/" + codigo)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/client.delete.code.' + codigo + '.json', JSON.stringify(res));
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
