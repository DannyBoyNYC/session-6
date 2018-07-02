# Object Oriented JavaScript

## ES6 Classes and Classic Prototypal inheritance

Refer to the contents of `other/_classes` for this part of the exercise.

Open `index.html` in Chrome (no server needed).

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Prototypal Inheritance</title>
</head>
<body>
<script>

  function Car(model, make) {
    this.model = model;
    this.make = make;
  }

  const expo = new Car('Expo', 'Ford');

  console.log(expo);
</script>
</body>
</html>
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

In the browser console:

```sh
> expo
```

### Prototypal inheritance

#### Example: Array Methods

Methods on the original constructor will be inherited.

Create an array in the console:

```js
> const names = ['John', 'Henry']
```

Examine the Array in the console with `> names`.

Note the Array prototypes, e.g.:

```js
> names.join(', ')
> names.unshift('Doug') // add to the beginning
> names.push('Daniel') // add to the end, return new length
> names.pop() // remove and return the last element
```

Add a prototype and new car to our car object:

```js
function Car(model, make) {
  this.model = model;
  this.make = make;

  Car.prototype.drive = function() {
    console.log(`Vroom vroom! I'm a ${this.model}`);
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

Aside: Static Methods

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

### Demo: Static methods on an Array

`Array.of` and the spread operator.

In `index.html`:

`ul>li*4>a[href="#"]{link}`

Then use `ctrl-e`. See [Emmet in VSCode](https://code.visualstudio.com/docs/editor/emmet)

```js
> Array.of(1,2,3,4)
> const links = document.querySelectorAll('li')
> links
> Array.of(links)
> Array.of(...links)
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

But that's not what setters are for.

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

```

```js

const yorik = new Dog('Yorik', 'Mutt');

```

Note the error on the console.

Super calls the thing (Animal) that you are extending first.

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

typeof [1,2]

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

We get the object (not the key) and the property (name) is not shown. The `for...of` statement creates a loop iterating over *iterable* objects

N.B. for of loops skip over the properties.

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

> movies.topRated()

```

Refactored with a [ternary operator](https://www.w3schools.com/js/js_comparisons.asp):

```js

topRated(limit = 10) {
  return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
}

```

```js

> console.table(movies.topRated())

```

Use the limiter:

```js

> console.table(movies.topRated(2))

```

Aside: we will be using this in a future exercise

```js

Object.keys(movies)

```
