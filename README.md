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
  var myapp = angular.module('myapp', ['cabargues.naiveCard'])
  ```

3. Add naiveCard component to the wanted element passing the data to show, example:
  ```html
  <div naiveCard data=data></span>
  ```
The expected data structure is the following:
 ```javascript
 data = {
  title: 'title shown in the card',
  content: 'content to shown below the title',
  img: 'image to show',
  url: 'url to redirect the user on image click'
 }
 
 ```
 
 ## Customize the UI

You have several ways to customize the UI to meet your project requirements.

### Modify the original .scss and generate the .css file with your changes.

  1. Download or clone the project from github repository.
  ```
  git clone https://github.com/cabargues/angular-naive-card.git
  ```
  2. Modify the file src/naive-card/naive-card.scss as desired. All values are declared as SASS variables.`
  ```
  // Contains all the styling for naive-card component
  
  // Container
  $naive-card-max-width: 100% !default;
  $naive-card-margins: 5px !default;
  $naive-card-container-margin: 0 !default;
  $naive-card-figure-max-width: 100% !default;
  ```
  
  3. Build the project 
  ```
  npm run-script build
  ```
  
  4. Copy the .css file somewhere in your project and reference it from your index.html.

### Include the .scss in your workflow

All scss properties are declared as !default so you can import the .scss file and override the values with the ones that best fits your project. 
 
 
 ## TODO
 
 Tests