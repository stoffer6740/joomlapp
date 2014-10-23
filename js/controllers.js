/**
 * Created by Christoffer on 20-10-2014.
 */

joomlaapp.controller('AppCtrl', function($scope){

});

joomlaapp.controller('MenuCtrl', [ '$scope', '$http', 'getPageData', function($scope, $http, getPageData){
    var encSql = encode_sql(MENUCTRLSQL);
    $http({url   : 'http://' + API_URL + API_REQUEST,
        method   : 'GET',
        params   : {'sql':encSql}
    })
        .success(function(data, status, headers, config) {
            $scope.result = data.result;

        })
        .error(function(data, status, headers, config) {

        })
        .finally(function(){
        })
}]);

joomlaapp.controller('GetUsersCtrl', function($scope, $http){
    var encSql = encode_sql(GETUSERSCTRLSQL);
    $http({url      : 'http://' + API_URL + API_REQUEST,
           method   : 'GET',
           params   : {'sql':encSql}
    })
        .success(function(data, status, headers, config) {
            $scope.result = data.result;

        })
        .error(function(data, status, headers, config) {

        })
        .finally(function(){

        })
});

joomlaapp.controller('GetArticlesCtrl', function($scope, $http){
        console.log("getArticles");
        var encSql = encode_sql(GETARTICLESCTRLSQL);
        $http({url: 'http://' + API_URL + API_REQUEST,
            method: 'GET',
            params: {'sql':encSql}
        })
            .success(function(data, status, headers, config){
                $scope.result = [];
                $scope.images = [];
                angular.forEach(data.result, function (value) {
                    var url     = value.link.replace(REGEX_LINK, "");
                    var option  = getUrlParameter(url, 'option');
                    var id      = getUrlParameter(url, 'id');

                    getArticleFromMenu($scope, $http, id);
                });
            })
            .error(function(data, status, headers, config) {

            })
            .finally(function(){
            })
});

function getArticleFromMenu ($scope, $http, id) {
    var encSql = encode_sql(GETARTICLEFROMMENUSQL + id);
    $http({url: 'http://' + API_URL + API_REQUEST,
        method: 'GET',
        params: {'sql':encSql}
    })
        .success(function(data, status, headers, config){
            var img = 'http://' + API_URL + '/' + JSON.parse(data.result[0].images).image_intro;
            if(!JSON.parse(data.result[0].images).image_intro) {
                $scope.images.push({
                    'id'     : id,
                    'image'  : ""
                });
            }else {
                $scope.images.push({
                    'id'     : id,
                    'image'  : img
                });
            }
            $scope.result.push(data.result[0]);
        })
        .error(function(data, status, headers, config) {

        })
        .finally(function(){

        })
}


joomlaapp.controller('GetContactsCtrl', function($scope, $http){
    var encSql = encode_sql(GETCONTACTSCTRLSQL);
    $http({url      : 'http://' + API_URL + API_REQUEST,
        method   : 'GET',
        params   : {'sql':encSql}
    })
        .success(function(data, status, headers, config) {
            $scope.result = data.result;
        })
        .error(function(data, status, headers, config) {

        })
        .finally(function(){
        })
});