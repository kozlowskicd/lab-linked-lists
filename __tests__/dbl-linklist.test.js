'use strict';

const DblLinkedList = require('../dbl-linklist.js');
const deserialize = require('../deserialize.js');

describe('Double Linked List', () => {
  it('can create a new empty list', () => {
    let list = new DblLinkedList;
    expect(list).toBeInstanceOf(Object);
  });
});
describe('append(value)', () => {
  it('can add a value to an empty list', () => {
    let list = new DblLinkedList;
    list.append(100);
    expect(list).toBeInstanceOf(Object);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(100);
  });
  it('can append 2 items to an empty list in the correct order', () => {
    let list = new DblLinkedList;
    list.append(100);
    list.append(200);
    expect(list).toBeInstanceOf(Object);
    expect(list.length).toBe(2);
    expect(list.head.next.value).toBe(200);
  });
  it('defines prev for nodes after the head', () => {
    let list = new DblLinkedList;
    list.append(100);
    list.append(200);
    expect(list.head.prev).toBeNull();
    expect(list.head.next.prev).toEqual(list.head);
  });
});
describe('prepend()', () => {
  it('can add a value to an empty list', () => {
    let list = new DblLinkedList;
    list.prepend(100);
    expect(list).toBeInstanceOf(Object);
    expect(list.length).toBe(1);
    expect(list.head.value).toBe(100);
  });
  it('can prepend 2 items to an empty list in the correct order', () => {
    let list = new DblLinkedList;
    list.prepend(100);
    list.prepend(200);
    expect(list).toBeInstanceOf(Object);
    expect(list.length).toBe(2);
    expect(list.head.next.value).toBe(100);
  });
  it('list.head changes on prepend', () => {
    let list = new DblLinkedList;
    list.append(100);
    expect(list.head.value).toBe(100);
    list.prepend(200);
    expect(list.head.value).toBe(200);
    expect(list.head.next.value).toBe(100);
  });
});
describe('reverse()', () => {
  it('returns a list', () => {
    let list = new DblLinkedList;
    list.append(100);
    let results = list.reverse();
    expect(results).toBeInstanceOf(Object);
    expect(results.head).toBeDefined();
  });
  it('reverses a list', () => {
    let list = new DblLinkedList;
    list.append(100);
    list.append(200);
    list.append(300);
    expect(list.head.value).toBe(100);
    expect(list.head.next.value).toBe(200);
    expect(list.head.next.next.value).toBe(300);
    let results = list.reverse();
    expect(results.head.value).toBe(300);
    expect(results.head.next.value).toBe(200);
    expect(results.head.next.next.value).toBe(100);
  });
});
describe('remove(offset)', () => {
  it('returns a node', () => {
    let list = new DblLinkedList;
    list.append(100);
    list.append(200);
    let results = list.remove(0);
    expect(results).toBeInstanceOf(Object);
    expect(results.value).toBeDefined();
  });
  it('returns the node at (offset)', () => {
    let list = new DblLinkedList;
    list.append(100);
    list.append(200);
    list.append(300);
    let results = list.remove(1);
    expect(results.value).toBe(200);
  });
  it('returned node is removed from original list', () => {
    let list = new DblLinkedList;
    list.append(100);
    list.append(200);
    list.append(300);
    expect(list.length).toBe(3);
    expect(list.head.next.value).toBe(200);
    list.remove(1);
    expect(list.length).toBe(2);
    expect(list.head.next.value).toBe(300);
  });
});
describe('serialize()', () => {
  it('empty list returns an empty array', () => {
    let list = new DblLinkedList;
    let results = list.serialize();
    expect(results).toBeInstanceOf(Array);
  });
  it('populated list returns populated array', () => {
    let list = new DblLinkedList;
    list.append(100);
    list.append(200);
    let results = list.serialize();
    expect(results).toEqual([list.head, list.head.next]);
  });
});
describe('deserialize', () => {
  // Setting up serialized array for testing
  let list = new DblLinkedList;
  list.append(100);
  list.append(200);
  list.append(300);
  let listArray = list.serialize();
  it('tests can access funtion', () => {
    expect(deserialize).toBeInstanceOf(Function);
  });
  it('takes in an array', () => {
    let results = deserialize([1,2]);
    console.log(results);
    expect(results).toBeDefined();
  });
  it('requires a serialized list array', () => {
    let string = deserialize([1,2]);
    expect(string).toBe('Serialized list array required');
    let results = deserialize(listArray);
    expect(results.head).toBeDefined();
  });
  it('can create new list from serialized list array', () => {
    let results = deserialize(listArray);
    expect(results.length).toBe(3);
    expect(results.head.value).toBe(100);
    expect(results.head.next.value).toBe(200);
    expect(results.head.next.next.value).toBe(300);
  });
});