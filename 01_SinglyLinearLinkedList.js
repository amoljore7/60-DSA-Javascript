// Node definition
class Node {
  constructor(data) {
    this.data = data;   // value
    this.next = null;   // pointer to the next node
    // Example: [data: 10 | next: null]
  }
}

// Linked List implementation
class LinkedList {
  constructor() {
    this.head = null;

    // head is just a reference (a pointer).
    // It doesn’t store data or next itself.
    // It only points to the first node in the linked list.
    // If the list is empty: head = null
    //
    // head ──▶ null   (when empty)
  }

  InsertFirst(iValue) {
    console.log("\n\t\tInsertFirst");
    const newNode = new Node(iValue);

    if (this.head === null) {
      // Case 1: list empty → head points to new node
      this.head = newNode;
      // head ──▶ [data: iValue | next: null]
    } else {
      // Case 2: list not empty
      newNode.next = this.head; // new node points to old head
      this.head = newNode;      // head updated to new node
      //
      // Example after InsertFirst(11), InsertFirst(21):
      // head ──▶ [data: 21 | next ──▶ ] ──▶ [data: 11 | next: null]
    }
  }

  InsertLast(iValue) {
    console.log("\n\t\tInsertLast");
    const newNode = new Node(iValue);

    if (this.head === null) {
      this.head = newNode;
      // head ──▶ [data: iValue | next: null]
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
      //
      // Example:
      // head ──▶ [data: 10 | next ──▶ ] ──▶ [data: 20 | next: null]
      // InsertLast(30) →
      // head ──▶ [10] ──▶ [20] ──▶ [30 | next: null]
    }
  }

  DeleteFirst() {
    console.log("\n\t\tDeleteFirst");
    if (this.head === null) {
      console.log("\nIt is NULL\n");
      return;
    } else {
      // Move head to 2nd node
      // First node automatically garbage collected
      this.head = this.head.next;
    }
  }

  DeleteLast() {
    console.log("\n\t\tDeleteLast");
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      // Only one node → remove it
      this.head = null;
    } else {
      let temp = this.head;
      while (temp.next.next !== null) {
        temp = temp.next;
      }
      // temp stops at 2nd last node
      temp.next = null;
      // last node gets disconnected
    }
  }

  InsertAtPosition(iValue, iPos) {
    console.log("\n\t\tInsertAtPosition");
    let iSize = this.Count();

    if (iPos < 1 || iPos > iSize + 1) {
      console.log("\nPlz Enter Valid Position");
      return;
    }

    if (iPos === 1) {
      this.InsertFirst(iValue);
    } else if (iPos === iSize + 1) {
      this.InsertLast(iValue);
    } else {
      const newNode = new Node(iValue);
      let temp = this.head;
      for (let i = 1; i <= iPos - 2; i++) {
        temp = temp.next;
      }
      // Insert in middle
      newNode.next = temp.next;
      temp.next = newNode;
      //
      // Example:
      // head ──▶ [10] ──▶ [20] ──▶ [40]
      // InsertAtPosition(30, 3) →
      // head ──▶ [10] ──▶ [20] ──▶ [30] ──▶ [40]
    }
  }

  DeleteAtPosition(iPos) {
    console.log("\n\t\tDeleteAtPosition");
    let iSize = this.Count();

    if (iPos < 1 || iPos > iSize) {
      console.log("Plz Enter Valid Position\n");
      return;
    }

    if (iPos === 1) {
      this.DeleteFirst();
    } else if (iPos === iSize) {
      this.DeleteLast();
    } else {
      let temp1 = this.head;
      for (let i = 1; i <= iPos - 2; i++) {
        temp1 = temp1.next;
      }
      let temp2 = temp1.next; // node to delete
      temp1.next = temp2.next;
      // temp2 disconnected, GC removes it
    }
  }

  Display() {
    console.log("\n\t\tDisplay");
    console.log("\n\nElement in Linked List Are :\n\n");
    let temp = this.head;
    let result = "";
    while (temp !== null) {
      result += ` ${temp.data} -->`;
      temp = temp.next;
      // moves temp to next node
    }
    result += " NULL";
    // NULL means last node (next = null)
    console.log(result);
    console.log("\n-------------------------------------------------------\n");
  }

  Count() {
    console.log("\n\t\tIn Count");
    let iCnt = 0;
    let temp = this.head;
    while (temp !== null) {
      iCnt++;
      temp = temp.next;
    }
    return iCnt;
  }
}

// Demo like C main()
const list = new LinkedList();

list.InsertFirst(111);
list.Display();
list.InsertFirst(101);
list.InsertFirst(51);
list.InsertFirst(21);
list.InsertFirst(11);

list.Display();
console.log("\nTotal No.of Node is ->", list.Count());

list.InsertLast(121);
list.Display();

list.DeleteFirst();
list.Display();

list.DeleteLast();
list.Display();

list.InsertAtPosition(151, 5);
list.Display();

list.DeleteAtPosition(4);
list.Display();