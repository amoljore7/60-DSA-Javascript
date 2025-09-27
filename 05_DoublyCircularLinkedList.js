// Node for Doubly Circular Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

// Doubly Circular Linked List Class
class DoublyCircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Insert node at beginning
  InsertFirst(iValue) {
    console.log("\t\tInsert First");
    let newNode = new Node(iValue);

    if (this.head === null && this.tail === null) {
      this.head = this.tail = newNode;
      this.head.next = this.head;
      this.head.prev = this.head;
    } else {
      newNode.next = this.head;
      newNode.prev = this.tail;
      this.head.prev = newNode;
      this.tail.next = newNode;
      this.head = newNode;
    }
  }

  // Insert node at end
  InsertLast(iValue) {
    console.log("\t\tInsert Last");
    let newNode = new Node(iValue);

    if (this.head === null && this.tail === null) {
      this.head = this.tail = newNode;
      this.head.next = this.head;
      this.head.prev = this.head;
    } else {
      newNode.prev = this.tail;
      newNode.next = this.head;
      this.tail.next = newNode;
      this.head.prev = newNode;
      this.tail = newNode;
    }
  }

  // Insert at position
  InsertAtPos(iValue, iPos) {
    console.log("\t\tInsert At Position");
    let iSize = this.Count();
    if (iPos < 1 || iPos > iSize + 1) return;

    if (iPos === 1) {
      this.InsertFirst(iValue);
    } else if (iPos === iSize + 1) {
      this.InsertLast(iValue);
    } else {
      let newNode = new Node(iValue);
      let temp = this.head;

      for (let iCnt = 1; iCnt <= iPos - 2; iCnt++) {
        temp = temp.next;
      }

      newNode.next = temp.next;
      newNode.prev = temp;
      temp.next.prev = newNode;
      temp.next = newNode;
    }
  }

  // Delete first node
  DeleteFirst() {
    console.log("\t\tDelete First");

    if (this.head === null && this.tail === null) return;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    }
  }

  // Delete last node
  DeleteLast() {
    console.log("\t\tDelete Last");

    if (this.head === null && this.tail === null) return;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
  }

  // Delete at position
  DeleteAtPos(iPos) {
    console.log("\t\tDelete At Position");
    let iSize = this.Count();
    if (iPos < 1 || iPos > iSize) return;

    if (iPos === 1) {
      this.DeleteFirst();
    } else if (iPos === iSize) {
      this.DeleteLast();
    } else {
      let temp = this.head;
      for (let iCnt = 1; iCnt <= iPos - 2; iCnt++) {
        temp = temp.next;
      }
      temp.next = temp.next.next;
      temp.next.prev = temp;
    }
  }

  // Display list Forward
  DisplayF() {
    console.log("\n\n\t\tInside Display Forward\n");
    if (this.head === null && this.tail === null) {
      console.log("No Any Node In Linked List");
      return;
    }
    let temp = this.head;
    do {
      process.stdout.write(temp.data + " ");
      temp = temp.next;
    } while (temp !== this.head);
    console.log("\n--------------------------------------------------------------");
  }

  // Display list Backward
  DisplayB() {
    console.log("\n\n\t\tInside Display Backward\n");
    if (this.head === null && this.tail === null) {
      console.log("No Any Node In Linked List");
      return;
    }
    let temp = this.tail;
    do {
      process.stdout.write(temp.data + " ");
      temp = temp.prev;
    } while (temp !== this.tail);
    console.log("\n--------------------------------------------------------------");
  }

  // Count number of nodes
  Count() {
    let iCnt = 0;
    if (this.head === null && this.tail === null) return 0;

    let temp = this.head;
    do {
      iCnt++;
      temp = temp.next;
    } while (temp !== this.head);

    return iCnt;
  }
}

// ----------------- DEMO RUN -----------------
let list = new DoublyCircularLinkedList();

list.InsertFirst(11);
list.InsertFirst(21);
list.InsertFirst(51);
list.InsertFirst(101);
list.InsertFirst(111);

list.DisplayF();
list.DisplayB();

list.DeleteAtPos(4);
list.DisplayF();
list.DisplayB();

let iRet = list.Count();
console.log("\n\nCount Of Node is = " + iRet);