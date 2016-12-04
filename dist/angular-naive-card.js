/*!
 * See LICENSE in this repository for license information
 */
/**
 * Created by cabargues on 29/11/16.
 *
 * Simple Angular component to show data in a form of a card.
 *
 */
(function () {
  'use strict';

  angular.module('cabargues.naiveCard', [])
    .component('naiveCard', {
      bindings: {
        data: '<'
      },
      template: '' +
      '<div class="naive-card"> ' +
      '<div class="naive-card-container"> ' +
      '<figure> ' +
      '<a href="{{$ctrl.data.link}}">' +
      '<img class="card-img-top img-responsive" ng-src="{{$ctrl.data.img}}" alt="Book cover">' +
      '</a>  ' +
      '<figcaption> ' +
      '<span class="title">{{::$ctrl.data.title}}</span> ' +
      '<span class="content">{{::$ctrl.data.content}}</span> ' +
      '</figcaption> ' +
      '</figure> ' +
      '</div> ' +
      '</div>'
    });

})();
