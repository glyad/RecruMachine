/**
 * Job
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	schema : true,

    attributes : {

        title : {
            type : 'string'
        },

        location : {
            type : 'string'
        },

        positionType : {
            type : 'string' /* Full Time, Partial, etc. */
        },

        description : {
            type : 'string'
        },

        minCommonExperience : {
            type : 'string'
        },

        salaryRange : {
            type : 'string'
        }
    }
  }

};
