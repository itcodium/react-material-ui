


module.exports = {
  development: "http://localhost:4444/react-material-ui/api",
  production: "http://itcodium.tech/api",
  getUrl: function () {
    return this[process.env.NODE_ENV];
  }
};
