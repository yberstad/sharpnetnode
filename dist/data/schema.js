'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var Schema = function Schema(db) {

  var linkType = new _graphql.GraphQLObjectType({
    name: 'Link',
    fields: function fields() {
      return {
        _id: { type: _graphql.GraphQLString },
        title: { type: _graphql.GraphQLString },
        url: { type: _graphql.GraphQLString }
      };
    }
  });

  var schema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
      name: 'Query',
      fields: function fields() {
        return {
          links: {
            type: new _graphql.GraphQLList(linkType),
            resolve: function resolve() {
              console.log('neggu ');
              return db.collection("links").find({}).toArray();
            }
          }
        };
      }
    })
  });

  function logger() {
    "use strict";

    console.log('joggu');
  }

  return schema;
};

exports.default = Schema;
//# sourceMappingURL=schema.js.map
