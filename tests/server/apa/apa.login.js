


module.exports = {
  chai:null,
  token:null,
  FileHelper:null,
  path:null,
  login: function(url,done) {
    var _this=this;
    this.chai.request(url)
      .post('/be/remote/index/login')
      .type('form')
      .send(this.FileHelper.readCredenciales())
      .end(function (err, res) {
        _this.token =res.header["set-cookie"][0].split(";")[0];
        _this.chai.expect(res).to.have.cookie('PHPSESSID');
        _this.FileHelper.saveToFile(_this.path+'/token_'+Date.now()+'.json',JSON.stringify(res));
        done();
      });
  },
  logout: function(url,done) {
    var _this=this;/*
    _this.chai.request(url)
    .post('/services/auth/logout')
    .set('Content-type', 'application/json;charset=utf-8')
    .set('Authorization', _this.token)
    .end(function (err, res) {
      _this.chai.expect(res.body.status).to.equal(0);
      done();
    });*/
  }
};



