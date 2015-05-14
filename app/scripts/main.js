(function (angular, undefined) {
    "use strict";
    angular.module('mdTabsHref', [
        'ngMaterial',
        "ui.router",
        "ncy-angular-breadcrumb"
    ])
        .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            // use the HTML5 History API to avoid # in URLs
            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/tabs/view1');

            $stateProvider
                .state('tabs', {
                    url: '/tabs',
                    abstract: true,
                    templateUrl: 'views/tabs.html',
                    controller: function ($scope, $state) {
                        $scope.currentTab = 2;
                        $scope.state = $state;
                        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                            $scope.currentTab = toState.data.selectedTab;
                        });

                        $scope.transitionTo = function (state, params) {
                            $state.transitionTo(state, params);
                        };
                    },
                    ncyBreadcrumb: {
                        skip: true,
                        label: 'Home'
                    }
                })
                .state('tabs.view1', {

                    abstract: true,
                    data: {
                        'selectedTab': 0
                    },
                    views: {
                        'view1': {
                            //controller: playerController
                            templateUrl: "views/tab1/view1.html"
                        }
                    },
                    ncyBreadcrumb: {
                        label: 'View 1'
                    }
                })
                .state('tabs.view1.choices', {
                    url: "/view1",
                    templateUrl: "views/tab1/choices.html",
                    ncyBreadcrumb: {
                        label: 'Choices'
                    }
                })
                .state('tabs.view1.subview1', {
                    url: "/subview11",
                    templateUrl: "views/tab1/view1.1.html",
                    ncyBreadcrumb: {
                        parent: 'tabs.view1.choices',
                        label: 'Sub view 1.1'
                    }
                })
                .state('tabs.view1.subview2', {
                    url: "/subview12",
                    templateUrl: "views/tab1/view1.2.html",
                    ncyBreadcrumb: {
                        parent: 'tabs.view1.choices',
                        label: 'Sub view 1.2'
                    }
                })
                .state('tabs.view1.subview3', {
                    url: "/subview13",
                    templateUrl: "views/tab1/view1.3.html",
                    ncyBreadcrumb: {
                        parent: 'tabs.view1.choices',
                        label: 'Sub view 1.3'
                    }
                })
                .state('tabs.view2', {
                    url: "/view2",
                    data: {
                        'selectedTab': 1
                    },
                    views: {
                        'view2': {
                            //controller: playerController
                            templateUrl: "views/tab2/view2.html"
                        }
                    },
                    ncyBreadcrumb: {
                        label: 'View 2'
                    }
                })
                .state('tabs.view3', {
                    url: "/view3",
                    data: {
                        'selectedTab': 2
                    },
                    views: {
                        'view3': {
                            //controller: playerController
                            templateUrl: "views/tab3/view3.html"
                        }
                    },
                    ncyBreadcrumb: {
                        label: 'View 3'
                    }
                })
            ;
        });
})(angular);