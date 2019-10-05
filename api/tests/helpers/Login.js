


module.exports = {
  chai:null,
  token:null,
  FileHelper:null,
  path:null,
  login: function(url,done) {
    var _this=this;
    this.chai.request(url)
      .post('/services/auth/login')
      .set('Content-type', 'application/json;charset=utf-8')
      .set('Authorization', '')
      .send(this.FileHelper.readCredenciales())
      .end(function (err, res) {
        _this.chai.expect(res.body.status).to.equal(0);
        _this.chai.expect(res.body).to.have.property('user');
        _this.token = "Bearer " + res.body.user.token;
        _this.FileHelper.saveToFile(_this.path+'/token_'+Date.now()+'.json',JSON.stringify(_this.token));
        done();
      });
  },
  logout: function(url,done) {
    var _this=this;
    _this.chai.request(url)
    .post('/services/auth/logout')
    .set('Content-type', 'application/json;charset=utf-8')
    .set('Authorization', _this.token)
    .end(function (err, res) {
      _this.chai.expect(res.body.status).to.equal(0);
      done();
    });
  }
};



