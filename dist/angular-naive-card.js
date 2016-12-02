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

angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('src/components/naive-card/naive-card.tmpl.html','<div class="naive-card">\n    <div class="naive-card-container">\n        <figure>\n            <img class="card-img-top img-responsive" ng-src="{{$ctrl.data.cover}}" alt="Book cover">\n            <figcaption>\n                    <span class="title">{{::$ctrl.data.title}}</span>\n                    <span class="subtitle">{{::$ctrl.data.subtitle}}</span>\n                    <div>\n                    <span class="footer-left">{{::$ctrl.data.footer-left}}</span>\n                    <span class="footer-right">{{::$ctrl.data.footer-right}}></span>\n                    </div>\n\n                <a ui-sref="details({bookId: $ctrl.book.id})">Take a look</a>\n\n            </figcaption>\n        </figure>\n    </div>\n</div>');}]);