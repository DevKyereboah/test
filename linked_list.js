st2.js
 
//class for node objects
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
​
// Class for linked lists object
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
​
  // Method to insert a node object <data>, in the linked list
  insert(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }
​
  // Method to insert a node object <data>, at a specific position <index>
  insertAt(data, index) {
    if (index > this.size || index < 0) {
      console.error("Invalid index");
      return;
    }
    let newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = newNode;
    newNode.next = current;
    this.size++;
  }
​
  // Method to delete a node object at index postion <index>
  deleteAt(index) {
    if (index >= this.size || index < 0) {
      console.error("Invalid index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    previous.next = current.next;
    current.next = null;
    this.size--;
  }
​
  // Method to search for a value <value>, in the linked list
  search(value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.data === parseInt(value)) {
        return count + 1;
      }
      current = current.next;
      count++;
    }
    return -1;
  }
​
  // Method to sort the values in the linked list
  sort() {
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      while (next) {
        if (current.data > next.data) {
          let temp = current.data;
          current.data = next.data;
          next.data = temp;
        }
        next = next.next;
      }
      current = current.next;
    }
  }
​
  //Method to print the values in the linked list
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result);
  }
}
​
//Driver Code
//Creating Linked List object
let linkedList = new LinkedList();
linkedList.insert(50);
linkedList.insert(40);
linkedList.insert(60);
linkedList.insert(70);
linkedList.insert(80);
console.log("Linked List: ");
linkedList.print();
​
// //Inserting new element in third position
linkedList.insertAt(30, 2);
console.log("Linked List after inserting 30 at position 3: ");
linkedList.print();
​
//Deleting element in last but one position
linkedList.deleteAt(4);
console.log("Linked List after deleting at position 5: ");
linkedList.print();
​
//Sorting the elements in the linked list
linkedList.sort();
console.log("Linked List after sorting: ");
linkedList.print();
​
// Searching for value
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
​
const SearchFunction = () => {
  readline.question("Enter value to search: ", (input) => {
    try {
      if (isNaN(input)) {
        throw Error("Invalid input type. Enter a number");
      }
      let result = linkedList.search(input);
      if (result === -1) {
        console.error("Value not found!");
        SearchFunction();
      } else {
        console.log(`Value found at position ${result}`);
        readline.close();
      }
    } catch (error) {
      console.log(error);
    }
  });
};
​
SearchFunction();