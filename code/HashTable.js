/*
 * Implement your hash table here.  You are required to use the separate
 * chaining strategy that we discussed in lecture, meaning that collisions
 * are resolved by having each cell in the table be a linked list of all of
 * the strings that hashed to that cell.
 */
import DegenerateStringHasher from './DegenerateStringHasher.js';
import LousyStringHasher from './LousyStringHasher.js';
import BetterStringHasher from './BetterStringHasher.js';

export default class HashTable {
	/**
   * The constructor is given a table size (i.e. how big to make the array)
   * and a StringHasher, which is used to hash the strings.
   *
   * @param tableSize number of elements in the hash array
   *        hasher    Object that creates the hash code for a string
   * @see StringHasher
   */
	constructor(tableSize, stringHasher) {

	}


	/**
   * Takes a string and adds it to the hash table, if it's not already
   * in the hash table.  If it is, this method has no effect.
   */
	add(key) {

	}
	

	/**
  * Takes a string and returns true if that string appears in the
	* hash table, false otherwise.
  */
	lookup(key) {

	}
	

	/**
   * Takes a string and removes it from the hash table, if it
   * appears in the hash table.  If it doesn't, this method has no effect.
  */
	remove(key) {

  }
  
  createArray(size) {

  }

}
