// Node for Doubly Linked List
class Node {
  constructor(data) {
    this.data = data;  // Data value
    this.next = null;  // Pointer to next node
    this.prev = null;  // Pointer to previous node
  }
}

// Doubly Linked List Class
class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  // Insert at beginning
  InsertFirst(iValue) {
    console.log("\t\tInsert First Node");
    let newNode = new Node(iValue);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // Insert at end
  InsertLast(iValue) {
    console.log("\t\tInsert Last Node");
    let newNode = new Node(iValue);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
      newNode.prev = temp;
    }
  }

  // Delete first node
  DeleteFirst() {
    console.log("\t\tDelete First Node");
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  // Delete last node
  DeleteLast() {
    console.log("\t\tDelete Last Node");
    if (this.head === null) return;

    if (this.head.next === null) {
      this.head = null;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.prev.next = null;
    }
  }

  // Insert at given position
  InsertAtPosition(iValue, iPos) {
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
      temp.next.prev = newNode;
      temp.next = newNode;
      newNode.prev = temp;
    }
  }

  // Delete at given position
  DeleteAtPosition(iPos) {
    console.log("\t\tDelete At Position");
    let iSize = this.Count();
    if (iPos < 1 || iPos > iSize) return;

    if (iPos === 1) {
      this.DeleteFirst();
    } else if (iPos === iSize) {
      this.DeleteLast();
    } else {
      let temp1 = this.head;
      for (let iCnt = 1; iCnt <= iPos - 2; iCnt++) {
        temp1 = temp1.next;
      }

      let temp2 = temp1.next;
      temp1.next = temp2.next;
      temp2.next.prev = temp1;
    }
  }

  // Display Forward
  DisplayF() {
    console.log("\nElements in Linked List (Forward):");
    let temp = this.head;
    while (temp !== null) {
      process.stdout.write(" " + temp.data + " <->");
      temp = temp.next;
    }
    console.log(" NULL");
    console.log("-------------------------------------------------------");
  }

  // Display Backward
  DisplayB() {
    console.log("\nElements in Linked List (Backward):");
    if (this.head === null) return;

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    while (temp !== null) {
      process.stdout.write(" " + temp.data + " <->");
      temp = temp.prev;
    }
    console.log(" NULL");
    console.log("-------------------------------------------------------");
  }

  // Count number of nodes
  Count() {
    let iCnt = 0;
    let temp = this.head;
    while (temp !== null) {
      iCnt++;
      temp = temp.next;
    }
    return iCnt;
  }
}

// ---------------- Example Usage ----------------
let list = new DoublyLinkedList();

list.InsertFirst(101);
list.InsertFirst(51);
list.InsertFirst(21);
list.InsertFirst(11);

list.DisplayF();
list.DisplayB();

list.InsertLast(111);
list.DisplayF();

list.DeleteFirst();
list.DisplayF();
list.DisplayB();

list.DeleteLast();
list.DisplayF();
list.DisplayB();

list.InsertAtPosition(71, 2);
list.DisplayF();
list.DisplayB();

list.DeleteAtPosition(2);
list.DisplayF();
list.DisplayB();

let iRet = list.Count();
console.log("\n\nCount Of Nodes : " + iRet);