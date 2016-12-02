angular-naive-card
=======

Super simple angular component to show data in a card.

## Installation

#### Bower
```
bower install angular-naive-card
```
### Npm
```
npm install angular-naive-card
```

## Usage

1. Add angular-naive-card.(min).js to your main file (index.html)
  ```html
  <script type="text/javascript" src="bower_components/angular-naive-card/dist/angular-naive-card.js"></script>
  ```

2. Set `cabargues.naive-card` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['cabargues.naive-card'])
  ```

3. Add copy-text directive to the wanted element passing the data to show, example:
  ```html
  <div naive-card data=data></span>
  ```
The data must present the following structure:
 ```json
 {
 
 }
 
 ```