'use strict';

const Node = require('./node.js');

class DblLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  append(value) {
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.length++;
      this.serialized = this.serialize(this);
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    node.prev = currentNode;
    currentNode.next = node;
    currentNode.next.value = node.value;
    this.length++;
    this.serialized = this.serialize(this);
    return this;
  }

  prepend(value) {
    if(!this.head) {
      let node = new Node(value);
      this.head = node;
      this.length++;
      this.serialized = this.serialize(this);
      return this;
    }
    let node = new Node(value);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    this.serialized = this.serialize(this);
    return this;
  }
  
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode.prev = nextNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    this.serialized = this.serialize(this);
    return this;
  }
  
  remove(offset) {
    let node = this.head;
    if (offset == 0) {
      while(node.next) {
        node = node.next;
      }
      node.prev.next = null;
      node.prev = null;
      this.length--;
      this.serialized = this.serialize(this);
      return node;
    }
    for (let i=0; i < offset; i++) {
      node = node.next;
    }
    node.prev.next = node.next;
    node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
    this.length--;
    this.serialized = this.serialize(this);
    return node;
  }

  serialize() {
    let serialized = [];
    if(this.length === 0) {
      return [];
    }
    let currentNode = this.head;
    while(currentNode.next) {
      serialized.push(currentNode);
      currentNode = currentNode.next;
    }
    if (currentNode.next === null && currentNode.value) {
      serialized.push(currentNode);
    }
    this.serialized = serialized;
    return serialized;
  }
}

module.exports = DblLinkedList;