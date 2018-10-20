/*
Codecademy Javascript Pro Intensive Capstone Project 
Re-create the Lodash Library
Coded by Bruce W. Brooksher
19 Oct 2018
*/
const _ = {
    clamp(num, min, max) {
      return Math.min(Math.max(num, min), max);
    },
    inRange(num, min, max) {
      if (max === undefined){
        max = min;
        min = 0;
      };
      if (min > max) {
        let temp = max;
        max = min;
        min = temp;
      };
      return (min <= num && num < max);
    },
    words(string) {
      return string.split(' ');
    },
    pad(string, length) {
      if (string.length >= length){
        return string;
      }      
      let startPad = Math.floor((length - string.length) / 2);
      let endPad = length - string.length - startPad;
      return ' '.repeat(startPad) + string + ' '.repeat(endPad);
    },
    has(object, key) {
      return (object[key] != undefined);
    },
    invert(object) {
      let invertedObject = {};
      for (let key in object) {
        let originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
    findKey(object, predicate) {
      for (let key in object) {
        let value = object[key];
        predicateReturnValue = (predicate(value));
        if (predicateReturnValue){
          return key;
        }
      }
      return undefined;
    },
    drop(arr, num) {
      if (num === undefined){
        num = 1;
      }
      return arr.slice(num);
    },
    dropWhile(array, predicate) {
      let dropNumber = array.findIndex(function(element, index){
        return !predicate(array[index], index, array);
      });
      droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk(array, size) {
      if (size === undefined) {
        size = 1;
      }
      arrayChunks = [];
      for (i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  };
  
// Do not write or modify code below this line.
module.exports = _;