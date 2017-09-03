var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
      orm.selectAll('burgers_table', function(res){
        cb(res)
      });
    },
    delete: function(burger_name, cb) {
      orm.deleteBurger('burgers_table', burger_name, function(res){
        cb(res)
      });
    },
    eat: function(burger_name, cb) {
      orm.eatBurger('burgers_table', burger_name, function(res){
        cb(res)
      });
    },
    add: function(burger_name, cb) {
      orm.addBurger('burgers_table', burger_name, function(res){
        cb(res)
      });
    }
  };
      
  module.exports = burger;