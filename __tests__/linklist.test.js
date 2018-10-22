'use strict';
const LinkedList = require('../linklist.js');
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
    
    console.log(list);
        
  });

  it('prepend()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    list.append(firstValue);
    list.prepend(secondValue);
    expect(list.head.value).toEqual(secondValue);
  });

  it('reverse()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';
    list.append(firstValue);
    list.append(secondValue);
    list.append(thirdValue);
    list.reverse();
    expect(list.head.value).toEqual(thirdValue);
  });

  it('remove()', () => {
    let list = new LinkedList();
    let firstValue = 'First One';
    let secondValue = 'Second One';
    let thirdValue = 'Third One';
    list.append(firstValue);
    list.append(secondValue);
    list.append(thirdValue);
    list.remove(2);
    console.log(list);
    expect(list.length).toEqual(2);
    expect(list.head.value).toEqual(firstValue);
  });
});