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

  it("Post", function (done) {
    chai.request(URL)
      .post("/cliente")
      .send(DataTest.cliente)
      .end(function (err, res) {
        console.log("res", res)
        FileHelper.saveToFile(__dirname + '/data/cliente.post.json', JSON.stringify(res));
        done();
      });
  });

  /*
  it("List", function (done) {
    chai.request(URL)
      .get("/cliente")
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/cliente.json', res.text);
        done();
      });
  });

  it("List By Id", function (done) {
    chai.request(URL)
      .get("/cliente/153")
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/clienteById.json', res.text);
        done();
      });
  });*/



  /*
  */

  after(function (done) {
    done();
  });

});
