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
  }

  append(value) {
    console.log(value);
    let node = new Node(value);
    if(!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  prepend(value) {
      let node = new Node(value);
      this.head = node;
      let currentNode = this.head;
      
      while(currentNode.next)  {
        
      }
  }
}

module.exports = LinkedList;
