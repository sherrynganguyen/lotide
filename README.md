
##Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sherrynganguyen/lotide`

**Require it:**

`const _ = require('@sherrynganguyen/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: A function takes in two arrays and print an appropriate message to console
* `assertEqual(actual, expected)`: A function compares two values and print out a message telling users if they match or not
* `assertObjectEqual(object1, object2)`: A function takes in two objects and print an appropriate message to the console
* `countLetter(strToCheck)`: A function counts how many times letters appear
* `countOnly(allItems, itemsToCount)`: A function only returns if the itemsToCount appears and how many times it appears
* `eqArrays(array1, array2)` : A function takes in two arrays and returns true or false, based on a perfect match
* `eqObjects(object1, object2)`: A function takes in two objects and returns true or false, based on a pefect match
* `findKey(keyList, callback)`: A function takes in an object and a callback, scan through the object and return the first key where the callback returns true. If no key found, return undefined
* `findKeyByValue(object, searchValue)`: A function help searching for a key on an ojects where its value matches a given value
* `flatten(array)`: A function flatten the given array into single-level array
* `head(array)`: A function returns the item in the array
* `letterPositions(sentence)`: A function reutrns all the indices(zero-based positions) in the string where each character is found
* `map(array, callback)`: A function takes in two arguments: an array to map and a callback function. It will then return a new array based on the results of the callback function
* `middle(array)`: A function takes in an array and returns the middle-most element(s) of the given array
* `tail(array)`: A function returns back the given array expect the first item
* `takeUntil(array, callback)`: A function takes an array to work with and a callback functions. It then returns a truthy value
* `without(source, itemsToRemove)`: A function returns a subset of a given array, removing unwanted elements
