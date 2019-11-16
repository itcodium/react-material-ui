var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var UserData = require('./user.data.js');
var DataTest = require('./client.data.js');

var Hosts = require('../../helpers/Hosts.js');
var apiUrl = Hosts.getUrl();

FileHelper.status.folderPath = __dirname + '\\data';
FileHelper.status.credencialPath = __dirname + '/../../credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('client', function () {
  it("Login", function (done) {
    Login.login(apiUrl, UserData.login, done);
  });

  it("Save client[0]", function (done) {
    chai.request(apiUrl)
      .post("/client")
      .send(DataTest.client[0])
      .set('Authorization', 'Bearer ' + Login.token)
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
    chai.request(apiUrl)
      .post("/client")
      .send(DataTest.client[1])
      .set('Authorization', 'Bearer ' + Login.token)
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
    chai.request(apiUrl)
      .put("/client/" + client.id_cliente)
      .send(client)
      .set('Authorization', 'Bearer ' + Login.token)
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
    chai.request(apiUrl)
      .get("/client/" + name)
      .set('Authorization', 'Bearer ' + Login.token)
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
    chai.request(apiUrl)
      .get("/client/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/clientById.' + id + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("List", function (done) {
    chai.request(apiUrl)
      .get("/client")
      .set('Authorization', 'Bearer ' + Login.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/client.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("Delete By Id", function (done) {
    var id = DataTest.client[0].id_cliente;
    chai.request(apiUrl)
      .delete("/client/" + id)
      .set('Authorization', 'Bearer ' + Login.token)
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
    chai.request(apiUrl)
      .delete("/client/code/" + codigo)
      .set('Authorization', 'Bearer ' + Login.token)
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
