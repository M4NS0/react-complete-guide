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
## Arrays Prototype Methods
### Mapping

```ts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
    const arr = [1, 2, 3];
    const arr2 = arr.map(item => item * 2); // This is now [2, 4, 6]
```

### Filtering

```ts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const result = words.filter(word => word.length > 6); // This is now ['exuberant', 'destruction', 'present']
```

### Reducing

```ts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    const arr = [1, 2, 3];
    const initialValue = 0;
    const sumWithInitial = array1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,initialValue
    );

    console.log(sumWithInitial); // expected output: 10
```

### Findings

```ts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    const array1 = [5, 12, 8, 130, 44];
    const found = array1.find(element => element > 10);
    console.log(found);    // expected output: 12
```

## Finding Index 

```ts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    const array1 = [5, 12, 8, 130, 44];
    const isLargeNumber = (element) => element > 13;
    console.log(array1.findIndex(isLargeNumber));  // expected output: 3
```

### Concatenating

```ts

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = array1.concat(array2);

    console.log(array3);  // expected output: Array ["a", "b", "c", "d", "e", "f"]

    // or
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = [...array1, ...array2];
```

### Slice

```ts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice());
    // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

### Splice

```ts
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    const months = ['Jan', 'March', 'April', 'June'];
    months.splice(1, 0, 'Feb');
    // inserts at index 1

    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

    months.splice(4, 1, 'May');
    // replaces 1 element at index 4
    
    console.log(months);
    // expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

