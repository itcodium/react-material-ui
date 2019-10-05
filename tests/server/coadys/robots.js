var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var DataTest = require('./data.test.js');

var ENV = {
  dev: "http://localhost:4444/react-material-ui/api/v1",
  test: ""
};
var URL = ENV["dev"];

FileHelper.status.folderPath = __dirname + '\\data';
FileHelper.status.credencialPath = __dirname + '/../../credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('Robots', function () {

  it("Save", function (done) {
    chai.request(URL)
      .post("/robots")
      .send(DataTest.robot)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/robots.post.json', JSON.stringify(res.body));
        done();
      });
  });
  it("List", function (done) {
    chai.request(URL)
      .get("/robots")
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/robots.json', JSON.stringify(res.body));
        done();
      });
  });

  after(function (done) {
    done();
  });

});
