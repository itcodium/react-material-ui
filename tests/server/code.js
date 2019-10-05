// Cookie
chai.request(URL)
  .get('/be/remote/apa/gettenantcodes')
  .set('Content-type', 'application/json;charset=utf-8')
  .set('Cookie', "cookie")
  .query({})
  .end(function (err, res) {
    done();
  });

// Read cookie

function(url, done) {
  var _this = this;
  this.chai.request(url)
    .post('/be/remote/index/login')
    .type('form')
    .send(this.FileHelper.readCredenciales())
    .end(function (err, res) {
      _this.token = res.header["set-cookie"][0].split(";")[0];
      _this.chai.expect(res).to.have.cookie('PHPSESSID');
      _this.FileHelper.saveToFile(_this.path + '/token_' + Date.now() + '.json', JSON.stringify(res));
      done();
    });
}

chai.request().set('Content-type', 'application/json;charset=utf-8')
chai.request().set('Authorization', Login.token)
chai.expect(res.body).to.be.an('array');
chai.expect(res.body).to.have.length.of.at.least(1);
chai.expect(res.body[0]).to.have.property('filters');
chai.expect(res.body[0].filters).to.be.an('array');
chai.expect(res.body[0].filters).to.have.length.of.at.least(1);
chai.expect(res.body[0].status).to.equal(0);


//

describe('Filtros', function () {
  it('/services/auth/login', function (done) {
    Login.login(URL, done);
  });
  it('/services/auth/logout', function (done) {
    Login.logout(URL, done);
  });


});
