/**
 * Created by Christoffer on 20-10-2014.
 */

joomlaapp.controller('AppCtrl', function($scope){
    $scope.pageTitle = "";
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
    $scope.pageTitle = "Users";
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

joomlaapp.controller('GetArticlesCtrl', ['getArticleByIdSrvc', '$scope', '$http', function(getArticleByIdSrvc, $scope, $http){
    $scope.pageTitle = "Articles";
        console.log("getArticles");

        $scope.GetOneArticle = function (id) {
            getArticleByIdSrvc.setId(id);
            navigation.pushPage('template_view/_viewArticle.html', {animation: 'slide'});
        };

//        $scope.getResults = function (num) {
            var encSql = encode_sql(GETALLARTICLESSQL);
            $http({url: 'http://' + API_URL + API_REQUEST,
                method: 'GET',
                params: {'sql':encSql}
            })
                .success(function(data, status, headers, config){
                    var unsorted = [];
                    $scope.images = [];
                    angular.forEach(data.result, function (value) {
                        var url     = value.link.replace(REGEX_LINK, "");
                        var option  = getUrlParameter(url, 'option');
                        var id      = getUrlParameter(url, 'id');

                        getArticleFromMenu($scope, $http, id, unsorted);
                    });
                })
                .error(function(data, status, headers, config) {

                })
                .finally(function(){
                })
//        }
}]);

function getArticleFromMenu ($scope, $http, id, unsorted) {
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

            unsorted.push(data.result[0]);
            unsorted.sort(function(a, b) {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
            $scope.result = unsorted;
        })
        .error(function(data, status, headers, config) {

        })
        .finally(function(){

        })
}

joomlaapp.controller('GetOneArticleCtrl', ['getArticleByIdSrvc', '$scope', '$http', function(getArticlebyIdSrvc, $scope, $http){
    console.log("Get one");
    var aid = getArticlebyIdSrvc.getId();
    var encSql = encode_sql(GETARTICLEFROMMENUSQL + aid);
    $http({url: 'http://' + API_URL + API_REQUEST,
        method: 'GET',
        params: {'sql':encSql}
    })
        .success(function(data, status, headers, config){
            $scope.result = data.result;
            $scope.images = [];
            var img = 'http://' + API_URL + '/' + JSON.parse(data.result[0].images).image_intro;
            if(!JSON.parse(data.result[0].images).image_intro) {
                $scope.images.push({
                    'id'     : aid,
                    'image'  : ""
                });
            }else {
                $scope.images.push({
                    'id'     : aid,
                    'image'  : img
                });
            }
        })
        .error(function(data, status, headers, config) {

        })
        .finally(function(){
        })
}]);


joomlaapp.controller('GetContactsCtrl', ['getContactByIdSrvc', '$http', '$scope', function(getContactByIdSrvc, $http, $scope){

    $scope.pageTitle = "Contacts";
    $scope.GetOneContact = function (id) {
        getContactByIdSrvc.setId(id);
        navigation.pushPage('template_view/_viewContact.html', {animation: 'slide'});
    };

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
}]);

joomlaapp.controller('GetOneContactCtrl', ['getContactByIdSrvc', '$http', '$scope', function(getContactByIdSrvc, $http, $scope){
    console.log("Get one");
    var cid = getContactByIdSrvc.getId();
    var encSql = encode_sql(GETCONTACTSQL + cid);
    $http({url: 'http://' + API_URL + API_REQUEST,
        method: 'GET',
        params: {'sql':encSql}
    })
        .success(function(data, status, headers, config){
            $scope.result = data.result;
        })
        .error(function(data, status, headers, config) {

        })
        .finally(function(){
        })
}]);