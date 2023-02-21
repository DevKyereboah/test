
class Node {
    constructor(data, next = null){
         this.data = data;
         this.next = next;
     }
 }
 const n1 = new Node(100);
 console.log(n1);

class linkedList {
    constructor(){
        this.head = null;
        this.size = 0;
      
    }

// // insert first node
insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
    
 }
// insert last node
insertLast(data){
    let node = new Node(data)
    let current;

    //if empty, make head
    if(!this.head){
        this.head = node;
    }
    else{
        current = this.head
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
    this.size++;
}
// // insert at index
// // Get at index
//  Remove at index
//   Clear list
//  print list data
printListData() {
    let current = this.head;

    while(current) {
        console.log(current.data);
       current = current.next;
    }
}
 }
 const ll = new linkedList();
 ll.insertFirst(100);
  ll.insertFirst(200);
 ll.insertFirst(300);
 ll.insertLast(400);


 ll.printListData();
 





