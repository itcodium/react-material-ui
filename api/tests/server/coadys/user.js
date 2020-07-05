var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var UserData = require('./user.data.js');
var Hosts = require('../../helpers/Hosts.js');
var apiUrl = Hosts.getUrl();

FileHelper.status.folderPath = __dirname + '\\data';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


describe('user', function () {

  it("Login user ok", function (done) {
    chai.request(apiUrl)
      .post("/login")
      .send(UserData.login)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user_login.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('user');
        chai.expect(res.body.data).to.have.property('token');
        UserData.token = res.body.data.token;
        done();
      });
  });

  it("Login not valid", function (done) {
    chai.request(apiUrl)
      .post("/login")
      .send(UserData.login_not_valid)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user_login_not_valid.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body.status).to.equal("error");
        chai.expect(res.body).to.have.property('message');
        chai.expect(res.body.message).to.equal("El usuario o contraseña no validos");
        done();
      });
  });

  it("Save Expired Token", function (done) {
    chai.request(apiUrl)
      .post("/user")
      .send(UserData.user[0])
      .set('Authorization', 'Bearer ' + UserData.expired_token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user_expired_token.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('message');
        chai.expect(res.body.status).to.equal("error");
        chai.expect(res.body.message).to.equal("Expired token");
        done();
      });
  });

  it("Save user[0]", function (done) {
    chai.request(apiUrl)
      .post("/user")
      .send(UserData.user[0])
      .set('Authorization', 'Bearer ' + UserData.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user_0.post.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.data).to.have.property('id');
        chai.expect(res.body.data).to.have.property('row_count');
        chai.expect(res.body.data.row_count).to.equal(1);
        UserData.user[0].id_user = res.body.data.id;
        done();
      });
  });

  it("Update user", function (done) {
    var user = UserData.getUserOneUpdate();
    chai.request(apiUrl)
      .put("/user/" + user.id_user)
      .set('Authorization', 'Bearer ' + UserData.token)
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
    var id = UserData.user[0].id_user;
    chai.request(apiUrl)
      .get("/user/" + id)
      .set('Authorization', 'Bearer ' + UserData.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/userById.' + id + '.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("List", function (done) {
    chai.request(apiUrl)
      .get("/user")
      .set('Authorization', 'Bearer ' + UserData.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user.json', res.text);
        chai.expect(res.body).to.have.property('status');
        chai.expect(res.body).to.have.property('data');
        chai.expect(res.body.status).to.equal("ok");
        done();
      });
  });

  it("Delete By Id", function (done) {
    var id = UserData.user[0].id_user;
    chai.request(apiUrl)
      .delete("/user/" + id)
      .set('Authorization', 'Bearer ' + UserData.token)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/user.delete.id.' + id + '.json', res.text);
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
