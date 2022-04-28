# Javascript + ES6

### Arrow Functions

```ts 
    // Normal function
    function callMe(name) { 
        console.log(name);
    }

    // can be written as:
    const callMe = function(name) { 
        console.log(name);
    }

    // using arrow function
    const callMe = (name) => { 
        console.log(name);
    }

    // with no arguments
    const callMe = () => { 
        console.log('Hello');
    }

    // with exactly on arguments
    const callMe = (name) => {
        console.log(name);
    }

    // just returning a value
    const returnMe = (name) => name;

    // is equals to
    const returnMe = name => {
        return name;
    }

```

### Exports and Imports

```ts

    // can be done 
    import something from './path/to/something.js';

    // or
    import { something } from './path/to/something.js';

    // multiple exports at once
    import * as something from './path/to/something.js';

    // specific exports
    import { something, somethingElse } from './path/to/something.js';


```

### Classes

```ts

    // old syntax
    class Person {
        constructor () {
            this.name = 'Max';
        }
    }
    
    const person = new Person();
    console.log(person.name); // prints 'Max'

    // modern syntax
    class Person {
        name = 'Max';
    }

    const person = new Person();
    console.log(person.name); // prints 'Max'

    // defining methods
    class Person {
        name = 'Max';
        printName = () => {
            console.log(this.name);
        }
    const person = new Person();
    person.printMyName();

```

### Inheritance

```ts
    class Human {
        species = 'human';
    }
    
    class Person extends Human {
        name = 'Max';
        printMyName = () => {
            console.log(this.name);
        }
    }
    
    const person = new Person();
    person.printMyName();
    console.log(person.species); // prints 'human'

```

### Spread and Rest

```ts

    // pull elements out of an array
    const arr = [1, 2, 3];
    const arr2 = [...arr, 4, 5]; // This is now [1,2,3,4,5]

    // pull properties from an object
    const oldObject = { name: 'Max' };
    const newObject = { ...oldObject, age: 27 }; // This is now { name: 'Max', age: 27 }

```
### Destructuring

```ts

    // for arrays
    const array = [1, 2, 3];
    const [a, b] = array;
    console.log(a); // prints 1
    console.log(b); // prints 2
    console.log(array); // prints [1, 2, 3]

    // for objects
    const myObject = { name: 'Max', age: 27 };
    const {name} = myObject;
    console.log(name); // prints 'Max'
    console.log(age); // prints undefined
    console.log(myObject); // prints { name: 'Max', age: 27 }

    // function arguments
    const printName = (personObj) => {
        console.log(personObj.name);
    }
    printName({ name: 'Max', age: 27 }); // prints 'Max'

    // condensed code with destructuring
    const printName = ({ name }) => {
        console.log(name);
    }
    printName({ name: 'Max', age: 27 }); // prints 'Max'
    
```