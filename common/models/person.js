'use strict';

module.exports = function (Person) {
    Person.afterRemote('login', function (ctx, result, next) {
        if (result && result.userId) {
            Person.findById(result.userId, function (err, user) {
                if (user) {
                    ctx.result.person = JSON.parse(JSON.stringify(user));
                }
                next();
            });
        } else {
            next();
        }
    });

    //Person.disableRemoteMethodByName('create');
    //Person.disableRemoteMethodByName('upsert');
    //Person.disableRemoteMethodByName('updateAll');
    Person.disableRemoteMethodByName('prototype.updateAttributes');

    //Person.disableRemoteMethodByName('find');
    //Person.disableRemoteMethodByName('findById');
    //Person.disableRemoteMethodByName('findOne');

    //Person.disableRemoteMethodByName('deleteById');

    //Person.disableRemoteMethodByName('confirm');
    //Person.disableRemoteMethodByName('count');
    //Person.disableRemoteMethodByName('exists');
    //Person.disableRemoteMethodByName('resetPassword');

    Person.disableRemoteMethodByName('prototype.__count__accessTokens');
    Person.disableRemoteMethodByName('prototype.__create__accessTokens');
    Person.disableRemoteMethodByName('prototype.__delete__accessTokens');
    Person.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    Person.disableRemoteMethodByName('prototype.__findById__accessTokens');
    Person.disableRemoteMethodByName('prototype.__get__accessTokens');
    Person.disableRemoteMethodByName('prototype.__updateById__accessTokens');
    Person.disableRemoteMethodByName('createChangeStream');
};
