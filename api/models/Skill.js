/**
 * Skill
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {

      types : {
          tag : function (title) {
              return title;
          }
      },

      attributes: {

           tag : {
               type : 'json',
               tag : true
           }

      }


  }

};
