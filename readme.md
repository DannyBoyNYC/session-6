# Object Oriented JavaScript

## ES6 Classes and Classic Prototypal inheritance

Note: refer to the contents of `other/classes` for this part of the exercise.

Open `classes/index.html` in Chrome (no server needed).

In `scripts.js`:

```js

  function Car(model, make) {
    this.model = model;
    this.make = make;
  }

  const expo = new Car('Expo', 'Ford');

  console.log(expo);

```

The _constructor_ function:

```js
function Car(model, make) {
  this.model = model;
  this.make = make;
}
```

enables creating a new car object with properties:

`const expo = new Car('Expo', 'Ford');`

### Prototypal inheritance

An important, native to JavaScript since day one (-ish), feature.

#### Example: Array Methods

Methods on the original constructor will be inherited.

Create an array in the console:

```js
> const names = ['John', 'Henry']
> names
```

Note the Array prototypes, e.g.:

```js
> names.join(', ')
> names.unshift('Doug') // add to the beginning
> names.push('Daniel') // add to the end, return new length
> names.pop() // remove and return the last element
```

Adding a prototype to our car constructor:

```js
function Car(model, make) {
  this.model = model;
  this.make = make;

  Car.prototype.drive = function() {
    console.log(`Vroom vroom 🚓 ! I'm a ${this.model}`);
  }
}
const expo = new Car('Expo', 'Ford');
const miata = new Car('Miata', 'Mazda');
```

Test drive them in the console:

```js
> miata.drive()
> expo.drive()
```

Add an additional prototype:

```js
Car.prototype.stop = function() {
  console.log(`Screech! 🚒 🚑 🚓`);
}
```

```js
> expo.stop()
```

### Inheritance and ES6 Classes

ES6 offers an alternative syntax to create objects. Let's use it:

```js
class Car {

  constructor(model, make) {
    this.model = model;
    this.make = make;
  }

  drive() {
    console.log(`Vroom vroom 🚗 🚗 🚗! I'm a ${this.model} and I'm a ${this.make}`);
  }

  stop() {
    console.log(`Screech! 🚒 🚑 🚓`);
  }
}

const expo = new Car('Expo', 'Ford');
const miata = new Car('Miata', 'Mazda');
```

In the console:

```js
> expo
> expo.drive()
> expo.stop()
```

### Static Methods

Static Methods apply to the class, not the objects.

```js
static info() {
  console.log('I\'m a static method, Cars only need apply' );
}
```

```js
> expo.info()
> Car.info()
> expo
```

Inspect the expo prototype. The static method is _not_ inherited.

### Demo: A Static Method on an Array

`Array.of` and the spread operator.

In `index.html`:

`ul>li*4>a[href="#"]{link}`

See [Emmet in VSCode](https://code.visualstudio.com/docs/editor/emmet)

```js
> Array.of(1,2,3,4)
> const links = document.querySelectorAll('li')
> links
> Array.of(links)
> Array.of(...links)
> links.join(' ')
```

But `.of` is not ihnerited:

```js
> numbers = [6,7,8,9]
> numbers.of(1,2,3,4)
```

It is a static method on an Array and only works with `Array.of`. Just like our `info` static method:

```js
Car.info()
```

### Getters and Setters

Create a getter:

```js
get description() {
  return `${this.model} is a ${this.make} model car`;
}
```

Getters are not methods (no braces when calling)

```js
> expo.description
```

Create a setter:

```js
set nicknames(value) {
  this.nick = value.trim();
}
```

We _could_ now extend our constructor and Car object, i.e.:

```js
constructor(model, make, nick) {
  this.model = model;
  this.make = make;
  this.nick = nick;
}
```

and pass `const expo = new Car('Expo', 'Ford', 'grumbler');`

But that's not what setters are for. Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.

Let's leave the constructor as is and create a getter:

```js
get nicknames() {
  return this.nick.toUpperCase();
}
```

Note the lack of parentheses when using getters and setters:

```js
> expo.nicknames = '   grumbler   '
> expo.nicknames
```

Just for fun, try converting our code on [Babel's Website](https://babeljs.io/).

Try it again on [TypeScript's website](https://www.typescriptlang.org/index.html).

<!-- Just for fun, try converting our car script from TypeScript by popping it into our `greeter.ts` example from earlier and running `tsc greeter.ts --target ES5` (another method might involve `tsc --init`): -->

<!-- ```js
class Car {
  constructor(model, make) {
    this.model = model;
    this.make = make;
  }
  drive() {
    console.log(`Vroom vroom 🚗 🚗 🚗! I'm a ${this.model} and I'm a ${this.make}`);
  }
  stop() {
    console.log(`Screech! 🚒 🚑 🚓`);
  }
  static info() {
    console.log("I'm a static method, cars only need apply");
  }
  get description() {
    return `${this.model} is a ${this.make} model car`;
  }
  set nicknames(value) {
    this.nick = value.trim();
  }
  get nicknames() {
    return this.nick.toUpperCase();
  }
}

interface Car {
  model: string;
  make: string;
  nick: string;
}

const expo = new Car('Expo', 'Ford');
const miata = new Car('Miata', 'Mazda');

document.body.innerHTML = `Hello ${expo.make}`;\

```

Try again using ES6: `tsc greeter.ts --target ES6` -->

### Extending Classes

```js

class Animal {
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }

  drink() {
    this.thirst -= 10;
    return this.thirst;
  }

  eat(food) {
    this.belly.push(food);
    return this.belly;
  }

}

const rhino = new Animal('Rhiney');

```

And test on the browser:

```js

> rhino
> rhino.name
> rhino.eat('lilies')
> rhino.eat('hunters')
> rhino.drink()

```

#### Super

We want to 'extend' our Animal class to include a subclass, _dogs_, which, unlike other animals, will include a unique property - breed. We extend a class using a the following syntax.

```js

class Dog extends Animal {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}

const yorik = new Dog('Yorik', 'Mutt');

```

Note the error on the console.

Super calls the thing (`Animal`) that you are extending first.

We need to call `super` first and here, super needs a name:

```js

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

```

```js

> yorik
> rhino

```

Examine the hierarchy in the inspector.

Add a bark method:

```js

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`Bark bark my name is ${this.name} and I\'m a ${this.breed}`);
  }
}

```

Needless to say, rhinos do not bark - `rhino.bark()`.

### Aside - Rest Operator

The rest operator (`...`) is used in destructuring arrays:

```js

team = ['john', 'jane', 'doug', 'sally', 'tom']
const [captain, assistant, ...players] = team
console.log(captain, assistant, players)

```

### Aside - Spread Operator

The spread operator is visually identical to the rest operator (...) but is used to join arrays.

```js

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = [...featured, 'veg', ...specialty];

```

### Advanced Example: Extending Arrays

Making our own classes modelled after Array so they inherit all prototypes of an array.

We can also add properties that are not part of the array.

```js

class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }
  add(movie) {
    this.push(movie);
  }
}

const movies = new MovieCollection(
  'My Favorite Movies',
  { name: 'Sausage Party', stars: 10 },
  { name: 'Star Wars Trek', stars: 1 },
  { name: 'Virgin Suicides', stars: 7 },
  { name: 'Alice in the Cities', stars: 8 }
);

movies.add({ name: 'Titanic', stars: 5 });

console.table(movies);

```

We start off by creating a new `MovieCollection` and passing it a string and a series of objects:

```js

const movies = new MovieCollection(
  'My Favorite Movies',
  { name: 'Sausage Party', stars: 10 },
  { name: 'Star Wars Trek', stars: 1 },
  { name: 'Virgin Suicides', stars: 7 },
  { name: 'Alice in the Cities', stars: 8 }
);

```

We create a class that extends the Array object, and a constructor that recognizes the first item passed as  `name` and uses a spread operator to add the passed objects as `items`. We then call super on the class passing the items to the Array object:

```js

class MovieCollection extends Array {
  constructor(name, ...items) {
    super(...items);
    this.name = name;
  }
}

```

Super calls the Array prototype with a spread operator.

```js

> movies[4]
> movies.name

```

We have an Array that also has properties (possible because in JS, Arrays are objects) e.g:

```js

> let ar = [1,2]
> ar
> typeof ar

```

Methods using the array prototype methods can be added:

```js

add(movie) {
  this.push(movie);
}

```

`for... in`:

```js

> for (const movie in movies){ console.log(movie) }

```

returns the key _and_ the name property. The `for...in` statement iterates over the *enumerable* properties of an object.

More useful will be `for... of` which returns *only* the array:

```sh

> for (const movie of movies) { console.log(movie) }

> for (const movie of movies) { console.table(movie) }

```

We get the object (not the key) and the property (name) is not shown. The `for...of` statement creates a loop iterating over *iterable* objects while `for...in` iterates over the *enumerable* properties of an object.

Also note: `for of` loops skip over the properties (`name` here) because they are not iterable.

topRated:

```js

  topRated(limit = 10) {
    return this.sort( function(firstItem, secondItem) {
      if (secondItem.stars > firstItem.stars){
        return 1
      } else {
        return -1;
      }
    }).slice(0, limit);
  }

```

```js

> console.table(movies.topRated())

```

Refactored with a [ternary operator](https://www.w3schools.com/js/js_comparisons.asp):

```js

topRated(limit = 10) {
  return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
}

```

Use the limiter:

```js

> console.table(movies.topRated(2))

```

Aside: we will be using this in a future exercise

```js

Object.keys(movies)

```

## ES6 Classes and Modules

Demo `other/sample`


## React Classes

`cd` to the top level of today's project folder.

```sh

sudo npm install -g create-react-app

```

```sh

> create-react-app react-pirates

```

```sh

cd react-pirates

```

Examine `package.json`

```sh

npm run start

```

_Danger_ - do not do this - demo only!

```sh

> git branch ejected
> git checkout ejected
> npm run eject

```

Examine `package.json`

### App.js

What appears to be HTML is JSX.

JSX is a templating language that looks similar to HTML but is XML. You can embed any javascript inside of a JSX template by wrapping it in curly braces ({}). Some words are special and reserved, such as `class`, so there are JSX-specific properties/attributes/etc you need to use (such as `className`).

In addition, React components must only return a _single JSX node_ at its root, so it’s very common to wrap  your components in a div.

1. logo: {logo}: JSX
1. App.css: injected via Webpack:`<style>`
1. class → className: JSX
1. xhtml style closing tags: JSX
1. style="color: purple" → style={{color: 'purple'}}: JSX

Add outside the App div to see a common error:

`<p>test</p>`

Comments:

`{ /* comment */ }`

## Additional Installs

1. [React developer tools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en). Adds a tab to dev tools in Chrome (or Firefox).
1. If you are using Sublime text use Babel - [Package Control: Babel](https://packagecontrol.io/packages/Babel)for syntax highlighting. An Atom react package is also available. Use `JavaScript(Babel)` as your highlighter in Sublime test.

* `App.js`:

Use a more appropriate image (from the React assets).

`import logo from './anchor.svg';`

Provide the logo.

`<h2>Pirate List</h2>`

App.css:

```css

.App-header {
  background-color: #eee;
  height: 150px;
  padding: 20px;
  color: #333;
}

```

### Components

Every component must have a render method.

Create a component.

* Pirate.js

```js

import React, { Component } from 'react';

class Pirate extends React.Component {
  render(){
    return (
      <p>Pirate Component</p>
      )
  }
}

export default Pirate;

```

* App.js:

```js

import Pirate from './Pirate';

```

Use the new component in `App.js`:

```js

<Pirate tagline="Ahoy there Matey!" />

```

* `Pirate.js`:

```html

<div>
  <p>Pirate Component</p>
  <p>{this.props.tagline}</p>
</div>

```

Inspect using React tool. Find the Pirate component and notice the `props` entry.

#### React dev tools

`$0` - selects the element - a standard feature in the console

`$r` - is the react equivalent

Select `<Pirate />`

`$r.props`

Try on *Instagram* or Facebook - two sites that use React. Find a component that has Object as its prototype.

Exercise - create another component - `Header.js`:

```js

import React, { Component } from 'react';
import logo from './anchor.svg';

class Header extends React.Component {
  render(){
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Pirate List</h2>
      </div>)
    }
  }

export default Header;

```

* `App.js`:

`import Header from './Header';`

`<Header />`

Breaking out chunks of code into additional components is a very common practice.

## Adding Pirates

New component: `PirateForm.js`:

`import samplePirates from './sample-pirates';`

```js

import React, { Component } from 'react';
import AddPirateForm from './AddPirateForm';

class PirateForm extends React.Component {
  render(){
    return (
      <div>
      <h3>Pirate Forms</h3>
      <AddPirateForm />
      </div>
      )
  }
}

export default PirateForm;

```

App.js

```js

import PirateForm from './PirateForm';

```

## State / Data binding

AddPirateForm.js

```js

import React, { Component } from 'react';

class AddPirateForm extends React.Component {
  render(){
    return (
      <form>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
      </form>
      )
  }
}

export default AddPirateForm;

```

Method - createPirate

`<form onSubmit={(e) => this.createPirate(e)}>`:

```js

    return (
      <form onSubmit={(e) => this.createPirate(e)}>
      <input type="text" placeholder="Pirate name" />
      <input type="text" placeholder="Pirate vessel" />
      <input type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
      </form>
      )

```

In AddPirateForm (above render:

```js

createPirate(event) {
  event.preventDefault();
  console.log('make a pirate')
}

```

Test.

Add refs to the form to store references to the input:

```html

<form onSubmit={(e) => this.createPirate(e)}>
<input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
<input ref={(input) => this.vessel = input } type="text" placeholder="Pirate vessel" />
<input ref={(input) => this.weapon = input } type="text" placeholder="Pirate weapon" />
<button type="submit">Add Pirate</button>
</form>

```

Go to React dev tools, find AddPirateForm component, $r in the console to see the inputs.

Create the pirate const variable

AddPirateForm:

```js

  createPirate(event) {
    event.preventDefault();
    console.log('make a pirate');
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value,
    }
    console.log(pirate)
  }

```

Test.

Get the pirate object into state.

The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component. - [ref](http://buildwithreact.com/tutorial/state)

App.js:

```js

class App extends Component {

  constructor() {
    super();
    this.state = {
      pirates: {}
    }
  }

```

React tools, find App, view state.

App.js:

```js

  addPirate(pirate){
    //update state
    const pirates = {...this.state.pirates}
    //add new pirate
    const timestamp = Date.now();
    pirates[`pirate-${timestamp}`] = pirate;
    //set state
    this.setState({ pirates: pirates })
  }

```

Bind the add form to our app.

App.js:

```js

  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this);
    this.state = {
      pirates: {}
    }
  }

```

note - bind() - creates a new function that, when called, has its `this` keyword set to the provided value.

```js

var foo = {
    x: 3
}

var bar = function(){
    console.log(this.x);
}

bar(); // undefined

var boundFunc = bar.bind(foo);

boundFunc(); // 3

```

Test with:

`$r.addPirate({name: 'joe'})`

Make the addPirate function available to components with props.

Pass the prop down to PirateForm:

`<PirateForm addPirate={this.addPirate} />`:

```js

return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pirate List</h2>
        </div>
        <ul>
          <Pirate />
        </ul>
        <PirateForm addPirate={this.addPirate} />
      </div>
    );

```

Examine PirateForm props

Only one level more! Pass the prop to AddPirateForm.

PirateForm:

`<AddPirateForm addPirate={this.props.addPirate} />`:

```js

  render(){
    return (
      <div>
      <h3>Pirate Forms</h3>
      <AddPirateForm addPirate={this.props.addPirate} />
      </div>
      )
  }

```

Examine AddPirateForm props

AddPirateForm:

`this.props.addPirate(pirate);`

```js

  createPirate(event) {
    event.preventDefault();
    console.log('making a pirate');
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value,
    }
    this.props.addPirate(pirate);
  }

```

### Use the form to add a pirate

Empty the form with a ref.

`<form ref={(input)=>this.pirateForm = input } onSubmit={(e) => this.createPirate(e)}>`:

```js

    return (
      <form ref={(input)=>this.pirateForm = input } onSubmit={(e) => this.createPirate(e)}>
      <input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
      <input ref={(input) => this.vessel = input } type="text" placeholder="Pirate vessel" />
      <input ref={(input) => this.weapon = input } type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
      </form>
      )

```

and `this.pirateForm.reset();`:

```js

createPirate(event) {
    event.preventDefault();
    console.log('making a pirate');
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value,
    }
    this.props.addPirate(pirate);
    this.pirateForm.reset();
  }

```

### Load sample data into state

PirateForm:

`<button onClick={this.loadSamples}>Load Sample Pirates</button>`:

```js

    return (
      <div>
      <h3>Pirate Form</h3>
      <AddPirateForm addPirate={this.props.addPirate} />
      <button onClick={this.props.loadSamples}>Load Sample Pirates</button>
      </div>
      )

```

App.js

`import samplePirates from './sample-pirates'`

```js

  loadSamples(){
    this.setState({
      pirates: samplePirates
    })
  }

```

```js

  constructor() {
    super();
    this.addPirate = this.addPirate.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      pirates: {}
    }
  }

```

`<PirateForm addPirate={this.addPirate} loadSamples={this.loadSamples} />`:

```js

return (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Pirate List</h2>
    </div>
    <ul>
      <Pirate />
    </ul>
    <PirateForm addPirate={this.addPirate} loadSamples={this.loadSamples} />
  </div>
);

```

Loading the pirates

App.js:

```html

<ul>
  <Pirate />
</ul>

```

Pirate.js:

```js

import React, { Component } from 'react';

class Pirate extends React.Component {

  render(){
    return (
      <li>
        <p>Pirate</p>
      </li>
      )
  }
}

export default Pirate;

```

Unlike Angular there are no built in loops, repeats etc. You must use regular JS.

Here - cannot use .map which is for Arrays.

Use `Object.keys()`

Find App component in React tool. In console: `$r.state.pirates`

Load samples and run again to see data. Can't loop over that!

`Object.keys($r.state.pirates)`

App.js:

`{Object.keys(this.state.pirates)}`

```js

  render() {
    return (
      <div className="App">
      <Header />

      <ul>
      {Object.keys(this.state.pirates)}
      </ul>

      <PirateForm addPirate={this.addPirate} loadSamples={this.loadSamples} />
      </div>

    );
  }

```

```js

<ul>
{
  Object
  .keys(this.state.pirates)
  .map( key => <Pirate key={key} details={this.state.pirates[key]} /> )
}
</ul>

```

`Pirate.js`:

```js

  render(){
    const {details} = this.props;
    return (
      <li>
        <h4>{details.name}</h4>
        <p>{details.weapon}</p>
        <p>{details.vessel}</p>
      </li>
      )
  }

```

Load sample pirates.