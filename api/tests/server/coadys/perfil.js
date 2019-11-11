var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var DataTest = require('./perfil.data.js');

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


describe('Perfil', function () {

  it("Save perfil[0]", function (done) {
    chai.request(URL)
      .post("/perfil")
      .send(DataTest.perfil[0])
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil_0.post.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('id');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        DataTest.perfil[0].id_perfil = res.body.data.id;
        done();
      });
  });


  it("Update perfil", function (done) {
    var perfil = DataTest.getOneUpdate();
    chai.request(URL)
      .put("/perfil/" + perfil.id_perfil)
      .send(perfil)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil.updated.id.' + perfil.id_perfil + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("ok");
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        done();
      });
  });

  it("List By Id", function (done) {
    var id = DataTest.perfil[0].id_perfil;
    chai.request(URL)
      .get("/perfil/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfilById.' + id + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("List", function (done) {
    chai.request(URL)
      .get("/perfil")
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.be.an('array');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("Delete By Id", function (done) {
    var id = DataTest.perfil[0].id_perfil;
    chai.request(URL)
      .delete("/perfil/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/perfil.delete.id.' + id + '.json', JSON.stringify(res));
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
