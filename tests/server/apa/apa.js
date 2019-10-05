var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('./apa.login.js');
var FileHelper = require('../../helpers/Files.js');

var ENV = {
  dev:  "http://administradorestest.clarovideo.com",
  test: "http://administradorestest.clarovideo.com"
};
var URL = ENV["dev"];

FileHelper.status.folderPath = __dirname + '/data';
FileHelper.status.credencialPath = __dirname + '/apa.credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('APA Configuration', function () {
  it('login', function (done) {
    Login.login(URL, done);
  });

  it("Selección del propietario", function (done) {
    chai.request(URL)
      .get('/be/remote/apa/gettenantcodes')
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Cookie', Login.token)
      .query({})
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/propietario.json', res.text);
        done();
      });
  });

  it("APA Health (Link)", function (done) {
    chai.request("http://adminv10-test.clarovideo.com")
      .get('/services/apa/clarovideo_998be1b87d6e7f625917ed32ce2fa43a/healthcheck')
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Cookie', Login.token)
      .query({
        "partition": "test",
        "datacenter":"test",
        "silo":"tv"
      })
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/apa.Health.json', res.text);
        done();
      });
  });

  after(function (done) {
    done();
  });

});




