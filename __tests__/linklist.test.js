'use strict';
const LinkedList = require('../linklist.js');
const deserialize = require('../deserialize.js');

describe('Linked List', () => {
  it('constructor()', ()=> {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });
  it('append()', ()=> {
    let list = new LinkedList();
    let initialValue = 'First One';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Soemthing Else';
    list.append(newValue);
    expect(list.head.value).toEqual(initialValue);
    let anotherOne = 'Another One';
    list.append(anotherOne);    
  });
  it('prepend()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    list.append(firstValue);
    list.prepend(secondValue);
    expect(list.head.value).toEqual(secondValue);
  });
  let list = new LinkedList();  // This list to be used for all remaining tests
  let firstValue = 'First One';
  let secondValue = 'Second One';
  let thirdValue = 'Third One';
  let fourthValue = 'Fourth One';
  let fifthValue = 'Fifth One';
  list.append(firstValue);
  list.append(secondValue);
  list.append(thirdValue);
  list.append(fourthValue);
  list.append(fifthValue);
  it('reverse()', () => {
    list.reverse();
    expect(list.head.value).toEqual('Fifth One');
  });
  it('remove()', () => {
    let results = list.remove(2);
    expect(results.value).toBe('Third One');
    expect(list.length).toEqual(4);
    expect(list.head.value).toEqual('Fifth One');
  });
  it('serialize()', () => {
    let value = list.serialize();
    expect(value).toBeInstanceOf(Array);
    expect(value[0].value).toBe('Fifth One');
    expect(value[1].value).toBe('Fourth One');
    expect(value[2].value).toBe('Second One');
    expect(value.length).toBe(list.length);
  });
  it('getMiddle()', () => {
    let results = list.getMiddle();
    expect(results.value).toBe('Second One');
  });
  it('getKthFromEnd', () => {
    let one = list.getKthFromEnd(2);
    let two = list.getKthFromEnd(1);
    let three = list.getKthFromEnd(0);
    expect(one.value).toBe('Fourth One');
    expect(two.value).toBe('Second One');
    expect(three.value).toBe('First One');
  });
  it('deserialize(arr)', () => {
    let listArray = list.serialize();
    let results = deserialize(listArray);
    expect(results).toBeInstanceOf(Object);
    expect(results.head.value).toEqual(list.head.value);
    expect(results.head.next.value).toEqual(list.head.next.value);
  });
});