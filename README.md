[![Build Status](https://travis-ci.com/kozlowskicd/lab-linked-lists.svg?branch=master)](https://travis-ci.com/kozlowskicd/lab-linked-lists)
# Linked List
This repo is a self-implementation of Linked Lists and their associated methods.

## Singly Linked List (SLL) 
This type of data stucture begins with a head node that contains a value and a next property.  Each node in the list contains a value and a pointer to the next node.  The last node points to null, marking the end of the list.
### Implemented methods
- ##### append(value)
        Takes in a value and adds it to the end of the list.
- ##### prepend(value)
       Takes in a value and adds it to the front of the list.  This new node will be the new head and it's next will point to the old one.
- ##### reverse()
        Reverses the position of every node.
- ##### remove(offset)
        Moves forward (offset) places and removes that node from the list.
- ##### serialize()
        Creates an array with the properties of each node object in each position of the array.
- ##### getMiddle()
      Searches for the node in the middle of the list and returns it.  Does not delete the node.  Rounds up if there is an odd number of nodes in the list.
- ##### getKthFromEnd(number)
        Moves backwards (number) from the end and returns the node.  Does nodt delete the node.  0 returns the last node in the list.

## Doubly Linked List (DLL)
This operates identically as a SLL, except in this each node includes a property pointing to the previous node in the list in addition to the value and next properties.
### Implemented methods
- ##### append(value)
        Takes in a value and adds it to the end of the list.
- ##### prepend(value)
       Takes in a value and adds it to the front of the list.  This new node will be the new head and it's next will point to the old one.
- ##### reverse()
        Reverses the position of every node.
- ##### remove(offset)
        Moves forward (offset) places and removes that node from the list.
- ##### serialize()
        Creates an array with the properties of each node object in each position of the array.

## Deserialize(array)
Both types of lists have access to an externalized deserialize funtion.  This function takes in an array created by either lists' .serialize() function, and returns a new list created from the array.