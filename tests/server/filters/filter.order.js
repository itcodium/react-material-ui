var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var Login = require('../../helpers/Login.js');
var FileHelper = require('../../helpers/Files.js');
var ContentsOrder = require('../../helpers/ContentsOrderHelper.js');


var ENV = {
  dev: "http://dev.adm.dlatv.net",
  test: "http://adminv10-test.clarovideo.com"
};
var URL = ENV["dev"];



FileHelper.status.folderPath = __dirname + '\\data';
FileHelper.status.credencialPath = __dirname + '/../../credenciales.txt';
FileHelper.deleteFolderFiles();

Login.chai = chai;
Login.FileHelper = FileHelper;
Login.path = __dirname + '/token';


var FILTROS = {
  id: 8821,
  path:function(option){
    if(option=="filters"){
      return '/services/v1/filters/list';
    }
    if(option=="contents"){
      return '/services/v1/filters/contents/list';
    }else{
      if(option=='list'){
        return '/services/v2/filters/'+this.id+'/contents/'+option;
      }
      return '/services/v1/filters/'+this.id+'/contents/'+option;
    }
  }
};


describe('Filtros', function () {
  it('/services/auth/login', function (done) {
    Login.login(URL, done);
  });

  it(FILTROS.path('list') + ' (Sin Contenido)', function (done) {
    chai.request(URL)
      .get(FILTROS.path('list'))
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Authorization', Login.token)
      .query({ draw: 0, from: 0, item_type: 'G', quantity: '10', search: '', sort_field: 'data.id', sort_order: 'asc' })
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/contents_list_'+FILTROS.id+'.json', JSON.stringify(res.body[0]));
        chai.expect(res.body).to.be.an('array');
        chai.expect(res.body).to.have.length.of.at.least(1);
        chai.expect(res.body[0].status).to.equal(1);
        chai.expect(res.body[0].error).to.equal("service_exception");
        done();
      });
  });

  it(FILTROS.path('add'), function (done) {
    chai.request(URL)
      .post(FILTROS.path('add'))
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Authorization', Login.token)
      .query({ draw: 0, from: 0, item_type: 'G', quantity: '10', search: '', sort_field: 'data.id', sort_order: 'asc' })
      .send(ContentsOrder.status.contents)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/contents_add_'+FILTROS.id+'.json', JSON.stringify(res.body[0]));
        chai.expect(res.body).to.be.an('array');
        chai.expect(res.body[0].status).to.equal(0);
        chai.expect(res.body[0].parameters).to.be.an('array');
        chai.expect(res.body[0].parameters).to.have.length.of.at.least(2);
        chai.expect(res.body[0].parameters[1]).to.have.property('contents');
        chai.expect(res.body[0].parameters[1].contents).to.have.length.of.at.least(ContentsOrder.status.contents.contents.length);
        done();
      });
  });

  it(FILTROS.path('list') +' (Existe)', function (done) {
    chai.request(URL)
      .get(FILTROS.path('list'))
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Authorization', Login.token)
      .query({ from: 0, quantity: 10, item_type: 'G', sort_field: "data.id" })
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/contents_list_existe_'+FILTROS.id+'.json', JSON.stringify(res.body));
        chai.expect(res.body[0].status).to.equal(0);
        chai.expect(res.body).to.be.an('array');
        chai.expect(res.body).to.have.length.of.at.least(1);
        chai.expect(res.body[0]).to.have.property('contents');
        chai.expect(res.body[0].contents).to.be.an('array');
        chai.expect(res.body[0].contents).to.have.length.of.at.least(ContentsOrder.status.contents.contents.length);
        done();
      });
  });

  it(FILTROS.path('del'), function (done) {
    chai.request(URL)
      .put(FILTROS.path('del'))
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Authorization', Login.token)
      .query({ draw: 0, from: 0, item_type: 'G', quantity: '10', search: '', sort_field: 'data.id', sort_order: 'asc' })
      .send(ContentsOrder.status.contents)
      .end(function (err, res) {
        FileHelper.saveToFile(__dirname + '/data/contents_delete_'+FILTROS.id+'.json', JSON.stringify(res));
        chai.expect(res.body).to.be.an('array');
        chai.expect(res.body[0].status).to.equal(0);
        chai.expect(res.body[0].parameters).to.be.an('array');
        chai.expect(res.body[0].parameters).to.have.length.of.at.least(2);
        chai.expect(res.body[0].parameters[1]).to.have.property('contents');
        chai.expect(res.body[0].parameters[1].contents).to.be.an('array');
        chai.expect(res.body[0].parameters[1].contents).to.have.length.of.at.least(ContentsOrder.status.contents.contents.length);
        done();
      });
  });

  it('/services/auth/logout', function (done) {
    Login.logout(URL, done);
  });

  after(function (done) {
    done();
  });

});




