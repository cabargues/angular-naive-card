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