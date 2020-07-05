var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var ModuleData = require('./new.module.data.js');
var Hosts = require('../../helpers/Hosts.js');

var apiUrl = Hosts.getUrl();

FileHelper.status.folderPath = __dirname + '\\data';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';

console.log('ModuleData.login: ', ModuleData.login);

describe('user', function () {
    it("Login", function (done) {
        chai.request(apiUrl)
            .post("/login")
            .send(ModuleData.login)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/user_login.json', res.text);
                chai.expect(res.body).to.have.property('status');
                chai.expect(res.body).to.have.property('data');
                chai.expect(res.body.data).to.have.property('user');
                chai.expect(res.body.data).to.have.property('token');
                ModuleData.token = res.body.data.token;
                done();
            });
    });

    it("Module Allow Get All", function (done) {
        chai.request(apiUrl)
            .get("/module")
            .send(ModuleData.module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/module.allow.getAll.json', JSON.stringify(res));
                done();
            });
    });

    it("Login Not Allowed", function (done) {
        chai.request(apiUrl)
            .post("/login")
            .send(ModuleData.loginNotAllowed)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/user_login.json', res.text);
                chai.expect(res.body).to.have.property('status');
                chai.expect(res.body).to.have.property('data');
                chai.expect(res.body.data).to.have.property('user');
                chai.expect(res.body.data).to.have.property('token');
                ModuleData.token = res.body.data.token;
                done();
            });
    });

    it("Module [* Not] Allow Get All", function (done) {
        chai.request(apiUrl)
            .get("/module")
            .send(ModuleData.module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/module.not.getAll.json', JSON.stringify(res));
                done();
            });
    });

    return;
    it("Save module", function (done) {
        chai.request(apiUrl)
            .post("/module")
            .send(ModuleData.module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/module_0.post.json', JSON.stringify(res));
                chai.expect(res.body).to.have.property('status');
                chai.expect(res.body).to.have.property('data');
                chai.expect(res.body.data).to.have.property('id');
                chai.expect(res.body.data).to.have.property('row_count');
                chai.expect(res.body.data.row_count).to.equal(1);
                ModuleData.module.id_modulo = res.body.data.id;
                ModuleData.perfil_module.id_modulo = res.body.data.id;
                done();
            });
    });

    it("Save perfil", function (done) {
        chai.request(apiUrl)
            .post("/perfil")
            .send(ModuleData.perfil)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/perfil_0.post.json', JSON.stringify(res));
                chai.expect(res.body).to.have.property('status');
                chai.expect(res.body).to.have.property('data');
                chai.expect(res.body.data).to.have.property('id');
                chai.expect(res.body.data).to.have.property('row_count');
                chai.expect(res.body.data.row_count).to.equal(1);
                ModuleData.perfil.id_perfil = res.body.data.id;
                ModuleData.user.id_perfil = res.body.data.id;
                ModuleData.perfil_module.id_perfil = res.body.data.id;
                done();
            });
    });

    it("Save perfil-Module", function (done) {
        chai.request(apiUrl)
            .post("/perfilmodule")
            .send(ModuleData.perfil_module)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/perfilmodule_0.post.json', JSON.stringify(res));
                chai.expect(res.body).to.have.property('status');
                chai.expect(res.body).to.have.property('data');
                chai.expect(res.body.data).to.have.property('id');
                chai.expect(res.body.data).to.have.property('row_count');
                chai.expect(res.body.data.row_count).to.equal(1);
                done();
            });
    });

    it("Save user", function (done) {
        chai.request(apiUrl)
            .post("/user")
            .send(ModuleData.user)
            .set('Authorization', 'Bearer ' + ModuleData.token)
            .end(function (err, res) {
                FileHelper.saveToFile(__dirname + '/data/user_0.post.json', res.text);
                chai.expect(res.body).to.have.property('status');
                chai.expect(res.body).to.have.property('data');
                chai.expect(res.body.data).to.have.property('id');
                chai.expect(res.body.data).to.have.property('row_count');
                chai.expect(res.body.data.row_count).to.equal(1);
                ModuleData.user.id_user = res.body.data.id;
                done();
            });
    });

    after(function (done) {
        done();
    });
});