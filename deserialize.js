'use strict';

const DblLinkedList = require('./dbl-linklist.js');
const Node = require('./node.js');

const deserialize = (arr) => {
  if (!arr[0].value && !arr[0].next) {
    return 'Serialized list array required';
  }
  let list = new DblLinkedList;
  arr.forEach(one => {
    let node = new Node(one.value);
    list.append(node.value);
  });
  list.head.next = arr[0].next;
  return list;
};

module.exports = deserialize;