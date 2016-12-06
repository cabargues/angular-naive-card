/**
 * Created by cabargues on 5/12/16.
 */
'use strict';

describe('Component: naiveCard', function() {
  beforeEach(module('cabargues.naiveCard'));

  var testData = {
    title: 'Title',
    content: 'Content',
    img: 'https://flic.kr/p/zGNeSK',
    url: 'https://www.github.com/cabargues/angular-naive-card'
  };


  describe('component renders', function() {
    var elm, scope;

    beforeEach(inject(function($rootScope, $compile) {
      elm = angular.element('<naive-card data="data"></naive-card>');
      scope = $rootScope;
      scope.data = testData;
      $compile(elm)(scope);
      scope.$digest();
    }));


    it ('should render data', inject(function($compile, $rootScope) {
      var title = elm.find('.title').first().text();
      var content = elm.find('.content').first().text();
      var url = elm.find('a').attr('href');
      var img = elm.find('img').attr('src');
      expect(title).toBe(testData.title);
      expect(content).toBe(testData.content);
      expect(url).toBe(testData.url);
      expect(img).toBe(testData.img);
    }));


    it ('should not two-way-bind the content', function(){
      var newData = {
        title: 'Title 2',
        content: 'Content 2',
        img: 'https://flic.kr/p/zGNeSKA',
        url: 'https://www.github.com/cabargues/angular-naive-card-2'
      };

      scope.$apply(function() {
        scope.data = newData;
      });

      var title = elm.find('.title').first().text();
      var content = elm.find('.content').first().text();
      var url = elm.find('a').attr('href');
      var img = elm.find('img').attr('src');

      expect(title).toBe(testData.title);
      expect(content).toBe(testData.content);
      expect(url).toBe(testData.url);
      expect(img).toBe(testData.img);
    });

  });

  describe('component controller', function() {
    var controller;
    var scope;
    beforeEach(inject(function($rootScope, $componentController){
      scope = $rootScope.$new();
      controller = $componentController('naiveCard', { $scope: scope }, { data: testData })
    }));

    it('should expose my data', function() {
      expect(controller).toBeDefined();
      expect(controller.data).toBeDefined();
      expect(controller.data.title).toBe('Title');
      expect(controller.data.content).toBe('Content');
      expect(controller.data.img).toBe('https://flic.kr/p/zGNeSK');
      expect(controller.data.url).toBe('https://www.github.com/cabargues/angular-naive-card');
    });
  });



});