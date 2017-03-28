(function(){
    var kendoGrid = angular.module('kendoGrid', [
        "kendo.directives"

    ]).controller('mainController', function($scope, $http, $window, $timeout) {

        $http.get('testGridData.json').then(function(response) {
            var gridData = response.data;
            $scope.mainGridOptions = {
                dataSource: gridData,
                selectable:true,
                sortable: true,
                reorderable: true,
                resizable: true,
                scrollable: true,
                height    : "850px",
                columns: [{
                    field: "name",
                    title: "Name",
                    width: "220px",
                    locked: true
                },{
                    field: "age",
                    title: "Age this is a really long header",
                    width: "220px",
                    headerAttributes: { style: "white-space: normal"}
                }, {
                    field: "eyeColor",
                    title: "Eye Color this header is also very long",
                    width: "220px"
                }, {
                    field: "email",
                    title: "Email",
                    width: "220px"
                }, {
                    field: "randomCategory",
                    title: "Other",
                    width: "300px"
                }]
            };
        });
        
    })
})();