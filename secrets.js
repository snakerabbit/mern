const secrets = {
  'db_uri': 'mongodb://alisoncheng:password@ds141514.mlab.com:41514/mern',
};

module.exports = {
  requestSecret: function(s) {
    return secrets[s];
  },
};
