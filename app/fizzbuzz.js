var FizzBuzz = (function() {

  var self = {};

  var bindEvents = function() {
    $('#launch').click(self.onLaunch);
    $('#calculate').click(self.onCalculate);
    $('#done').click(self.onDone);
  };

  self.start = function() {
    FizzBuzz.View.showLauncher();
    FizzBuzz.View.hideInputer();
    FizzBuzz.View.hideResulter();
    bindEvents();
  };

  self.onLaunch = function() {
    FizzBuzz.View.hideLauncher();
    FizzBuzz.View.showInputer();
  };

  self.onCalculate = function() {
    var number = FizzBuzz.View.number();
    var result = FizzBuzz.Calculator.calculate(number);
    FizzBuzz.View.result(result);

    FizzBuzz.View.hideInputer();
    FizzBuzz.View.showResulter();
  };

  self.onDone = function() {
    FizzBuzz.View.hideResulter();
    FizzBuzz.View.showLauncher();
    FizzBuzz.View.number('');
    FizzBuzz.View.result('');
  };

  return self;

})();

FizzBuzz.View = (function() {

  var self = {};

  var showOrHideFn = function(id, showOrHide) {
    return function() {
      $('#' + id)[showOrHide]();
    };
  };

  var showFn = function(id) {
    return showOrHideFn(id, 'show');
  };

  var hideFn = function(id) {
    return showOrHideFn(id, 'hide');
  };

  self.showLauncher = showFn('launcher');
  self.showInputer = showFn('inputer');
  self.showResulter = showFn('resulter');
  self.hideLauncher = hideFn('launcher');
  self.hideInputer = hideFn('inputer');
  self.hideResulter = hideFn('resulter');

  self.number = function(newNumber) {
    if (newNumber !== undefined)
      $('#number').val(newNumber);
    return $('#number').val();
  };

  self.result = function(newResult) {
    return $('#result').text(newResult);
  };

  return self;

})();

FizzBuzz.Calculator = (function() {

  var self = {};

  self.calculate = function(number) {
    if (number % 15 === 0) return 'fizzbuzz';
    if (number % 5 === 0) return 'buzz';
    if (number % 3 === 0) return 'fizz';
    return '' + number;
  };

  return self;

})();

$(function() {
  FizzBuzz.start();
});
