/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

function hashPassword(values, next) {
    bcrypt.hash(values.password, 10, function(err, hash) {
        if (err) {
            return next(err);
        }
        values.password = hash;
        next();
    });
}

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/

      firstName : {
          type : 'string'
      },

      lastName : {
          type : 'string'
      },

      email : {
          type : 'email'
      },

      role : {
          type : 'string' /* system, administrator, recruiter */
      }



    
  }

};
