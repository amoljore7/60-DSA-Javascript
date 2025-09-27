// Node class represents a single element (node) in the linked list
class Node {
  constructor(data) {
    this.data = data;   // Stores the data value of the node
    this.next = null;   // Stores the reference/address of the next node
  }
}

// LinkedList class encapsulates all operations
class LinkedList {
  constructor() {
    this.head = null; // Initially list is empty
  }

  // Insert at the beginning
  insertFirst(value) {
    console.log("\n\t\tInsertFirst");
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Insert at the end
  insertLast(value) {
    console.log("\n\t\tInsertLast");
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  // Delete first node
  deleteFirst() {
    console.log("\n\t\tDeleteFirst");
    if (this.head === null) {
      console.log("\nIt is NULL\n");
      return;
    }
    this.head = this.head.next;
  }

  // Delete last node
  deleteLast() {
    console.log("\n\t\tDeleteLast");
    if (this.head === null) {
      return;
    } else if (this.head.next === null) {
      this.head = null;
    } else {
      let temp = this.head;
      while (temp.next.next !== null) {
        temp = temp.next;
      }
      temp.next = null;
    }
  }

  // Count nodes
  count() {
    console.log("\n\t\tIn Count");
    let cnt = 0;
    let temp = this.head;
    while (temp !== null) {
      cnt++;
      temp = temp.next;
    }
    return cnt;
  }

  // Insert at a specific position
  insertAtPosition(value, pos) {
    console.log("\n\t\tInsertAtPosition");
    const size = this.count();

    if (pos < 1 || pos > size + 1) {
      console.log("\nPlz Enter Valid Position");
      return;
    }

    if (pos === 1) {
      this.insertFirst(value);
    } else if (pos === size + 1) {
      this.insertLast(value);
    } else {
      const newNode = new Node(value);
      let temp = this.head;

      for (let i = 1; i <= pos - 2; i++) {
        temp = temp.next;
      }

      newNode.next = temp.next;
      temp.next = newNode;
    }
  }

  // Delete at a specific position
  deleteAtPosition(pos) {
    console.log("\n\t\tDeleteAtPosition");
    const size = this.count();

    if (pos < 1 || pos > size) {
      console.log("Plz Enter Valid Position\n");
      return;
    }

    if (pos === 1) {
      this.deleteFirst();
    } else if (pos === size) {
      this.deleteLast();
    } else {
      let temp1 = this.head;
      for (let i = 1; i <= pos - 2; i++) {
        temp1 = temp1.next;
      }
      let temp2 = temp1.next;
      temp1.next = temp2.next;
    }
  }

  // Recursive Display Forward
  displayF(node = this.head) {
    if (node !== null) {
      process.stdout.write(` ${node.data} -->`);
      this.displayF(node.next);
    }
  }

  // Recursive Display Backward
  displayB(node = this.head) {
    if (node !== null) {
      this.displayB(node.next);
      process.stdout.write(` ${node.data} -->`);
    }
  }
}

  console.log("\n\tSingly Linear Linked List Display Forward AND Backward Direction\n");

  const list = new LinkedList();

  // Insert at beginning
  list.insertFirst(11);
  list.insertFirst(21);
  list.insertFirst(51);
  list.insertFirst(101);

  console.log("\n\t\tDisplay Forward");
  list.displayF();
  console.log("\n\t\tDisplay Backward\n");
  list.displayB();

  let iRet = list.count();
  console.log(`\n\nTotal No.of Node is -> ${iRet}`);

  // Insert at end
  list.insertLast(121);

  console.log("\n\t\tDisplay Forward");
  list.displayF();
  console.log("\n\t\tDisplay Backward\n");
  list.displayB();

  // Delete first
  list.deleteFirst();

  console.log("\n\t\tDisplay Forward");
  list.displayF();
  console.log("\n\t\tDisplay Backward\n");
  list.displayB();

  // Delete last
  list.deleteLast();

  console.log("\n\t\tDisplay Forward");
  list.displayF();
  console.log("\n\t\tDisplay Backward\n");
  list.displayB();

  // Insert at position
  list.insertAtPosition(151, 2);

  console.log("\n\t\tDisplay Forward");
  list.displayF();
  console.log("\n\t\tDisplay Backward\n");
  list.displayB();

  // Delete at position
  list.deleteAtPosition(2);

  console.log("\n\t\tDisplay Forward");
  list.displayF();
  console.log("\n\t\tDisplay Backward\n\n");
  list.displayB();