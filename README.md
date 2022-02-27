# character-frequency

# What is it?

This is a library which has two functions and gets the frequency of the elements of both an Array and a String.
The first function `frequencyOfArray()` gets the frequency of the elements in an Array. The second function `frequencyOfString ()` gets the frequency of elements in a String. Instead of trying to calculate of the occurance of characters manually, you can use this library.

## Installation

```sh
$ npm i character-frequency
```

## Usage

```js
const frequencyOfArray = require("character-frequency");
const frequencyOfString = require("character-frequency");

const result = frequencyOfArray([1, 2, 3, 4, 4, 4, 5, 5, 9]);

console.log(result); // This should give: { '1': 1, '2': 1, '3': 1, '4': 3, '5': 2, '9': 1 }

const result2 = frequencyOfString("Banana and APpLe");

console.log(result2); // This should give : { b: 1, a: 5, n: 3, ' ': 2, d: 1, p: 2, l: 1, e: 1 }
```

# LICENSE

MIT License

Copyright (c) 2022 Nilay Aydin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
