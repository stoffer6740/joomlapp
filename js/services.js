/**
 * Created by Christoffer on 20-10-2014.
 */

joomlaapp.service('getPageData', function(){
    var id;

    return {
        getId: function() {
            return id;
        },
        setId: function(newId) {
            id = newId;
        }
    }
});

joomlaapp.service('getArticleByIdSrvc', function(){
    var id;

    return {
        getId: function() {
            return id;
        },
        setId: function(newId) {
            id = newId;
        }
    }
});

joomlaapp.service('getContactByIdSrvc', function() {
    var id;

    return {
       getId: function () {
           return id;
       },
       setId: function (newId) {
           id = newId;
       }
    }
});