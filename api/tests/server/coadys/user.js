var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var DataTest = require('./user.data.js');

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


describe('user', function () {

  it("Login user ok", function (done) {
    chai.request(URL)
      .post("/login")
      .send(DataTest.login)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user_login.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('user');
        chai.expect(res.body.data).to.have.property('token');
        DataTest.token = res.body.data.token;
        done();
      });
  });

  it("Login not valid", function (done) {
    chai.request(URL)
      .post("/login")
      .send(DataTest.login_not_valid)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user_login_not_valid.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("error");
        chai.expect(res.body).to.have.property('message');
        chai.expect(res.body.message).to.equal("El usuario o contraseña no validos");
        done();
      });
  });

  it("Save user[0]", function (done) {
    chai.request(URL)
      .post("/user")
      .send(DataTest.user[0])
      .set('Authorization', 'Bearer ' + DataTest.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user_0.post.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('id');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        DataTest.user[0].id_user = res.body.data.id;
        done();
      });
  });

  it("Update user", function (done) {
    var user = DataTest.getUserOneUpdate();
    chai.request(URL)
      .put("/user/" + user.id_user)
      .send(user)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user.updated.id.' + user.id_user + '.json', JSON.stringify(res));
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("ok");
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        done();
      });
  });

  it("Get By Id", function (done) {
    var id = DataTest.user[0].id_user;
    chai.request(URL)
      .get("/user/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/userById.' + id + '.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("List", function (done) {
    chai.request(URL)
      .get("/user")
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user.json', res.text);
        done();
      });
  });


  it("Delete By Id", function (done) {
    var id = DataTest.user[0].id_user;
    chai.request(URL)
      .delete("/user/" + id)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user.delete.id.' + id + '.json', JSON.stringify(res));
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
