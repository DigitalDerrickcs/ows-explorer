'use strict';

//Global service for global variables
angular.module('explorer.system')
  .factory('Global',[
    function() {
    }
  ])
  .factory('Version',
    function($resource, Api) {
      return $resource(Api.apiPrefix + '/version');
  });