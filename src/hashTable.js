/*
 *
 * 본인이 구현하는 메소드의 시간 복잡도에 대해서 생각해보세요.
 * 새로운 메소드나 속성은 추가해야 하는 행위는 신중히 결정하세요.
 *
 */

function HashTable() {
  this._limit = 8;
  this._storage = createLimitedArray(this._limit);
}

HashTable.prototype.insert = function (k, v) {
  const index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.retrieve = function (k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function (k) {
  const index = getIndexBelowMaxForKey(k, this._limit);
};
