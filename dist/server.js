'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _testdebug = require('./data/testdebug');

var _testdebug2 = _interopRequireDefault(_testdebug);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _mongodb = require('mongodb');

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import schema from './data/schema';

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
                            var inst = new _testdebug2.default();
                            inst.logFuncition('messagetext');
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

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

var db = undefined;
_mongodb.MongoClient.connect('mongodb://ohabbers:dykk12@ds042898.mongolab.com:42898/dbgira', function (err, database) {
    if (err) throw err;

    db = database;
    app.use('/graphql', (0, _expressGraphql2.default)({
        schema: Schema(db),
        graphiql: true
    }));
    app.listen(3000, function () {
        return console.log('Listening on port 3000   ');
    });
});

if (true) {
    console.log('jaggu');
    var inst = new _testdebug2.default();
    inst.logFuncition('messagetext');
}
//# sourceMappingURL=server.js.map
