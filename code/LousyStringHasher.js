/* A pretty lousy hash function for strings.  What's so lousy about it is
* that it simply adds up the codes for each character, meaning that any
* word with the same set of characters in it, regardless of the order of
* those characters, hashes to the same place (i.e. hash("alex") ==
* hash("xela")).  Consider why this is such a poor strategy.
*/

export default class LousyStringHasher {
  hash(key) {
    let h = 0;
      for (let i = 0; i < key.length; ++i) {
        h += key.charCodeAt(i);
      }
   
    return h;
  }
}