/**
 * Created by cabargues on 29/11/16.
 *
 * Simple Angular component to show data in a form of a card.
 *
 */
(function () {
  'use strict';

  angular.module('cabargues.naive-card')
    .component('naive-card', {
      template: ['$templateCache', function($templateCache) {
        return $templateCache.get('components/card/naive-card.tmpl.html');
      }],
      bindings: {
        data: '<'
      }
    });

})();
