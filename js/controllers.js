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
                angular.forEach(data.result, function (value) {
                    var url     = value.link.replace(/^(.*)\?/, "");
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
//            var clean = data.result[0].introtext.replace(REGEX1, '\/ ');
            $scope.result.push(data.result[0]);
//            $scope.resultClean = clean;
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