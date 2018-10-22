'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    console.log(value);
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      this.length++;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
    return this;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++; 
  }
  
  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;
    while (currentNode) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    return this;
  }

  remove(offset) {
    let prevNode = null;
    let nextNode = null;
    let deleteThisNode = offset;
    let index = 1;
    let currentNode = this.head;
    while (index < deleteThisNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      index++;
    }
    prevNode.next = currentNode.next;
    currentNode = null;
    this.length--;
    
  }
}


module.exports = LinkedList;
