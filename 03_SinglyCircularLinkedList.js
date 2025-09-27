// Node structure for Circular Singly Linked List
class Node {
    constructor(data) {
        this.data = data;   // value stored in the node
        this.next = null;   // pointer to the next node
    }
}

// LinkedList wrapper class
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert at beginning
    InsertFirst(iValue) {
        console.log("\n\t\tInsertFirst");
        let newNode = new Node(iValue);

        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head;
        }
    }

    // Display all nodes
    Display() {
        console.log("\n\t\tIn Display\n");

        if (this.head === null && this.tail === null) {
            console.log("\t\tNo Any Node In Linked List");
            return;
        }

        let temp = this.head;
        do {
            process.stdout.write(temp.data + " ");
            temp = temp.next;
        } while (temp !== this.tail.next);

        console.log(" (back to Head)");
        console.log("-------------------------------------------------------");
    }

    // Insert at end
    InsertLast(iValue) {
        console.log("\n\t\tInsertLast");

        let newNode = new Node(iValue);

        if (this.head === null && this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        }
    }

    // Count number of nodes
    Count() {
        console.log("\n\t\tIn Count");
        if (this.head === null && this.tail === null) {
            console.log("\t\t\nNo Any Node In Linked List");
            return -1;
        }
        let iCnt = 0;
        let temp = this.head;
        do {
            iCnt++;
            temp = temp.next;
        } while (temp !== this.tail.next);
        return iCnt;
    }

    // Insert at specific position
    InsertAtPosition(iValue, iPos) {
        console.log("\n\t\tIn InsertAtPos");
        let iSize = this.Count();

        if (iPos < 1 || iPos > iSize + 1) {
            return;
        }
        if (iPos === 1) {
            this.InsertFirst(iValue);
        } else if (iPos === iSize + 1) {
            this.InsertLast(iValue);
        } else {
            let newNode = new Node(iValue);
            let Temp = this.head;
            for (let i = 1; i <= iPos - 2; i++) {
                Temp = Temp.next;
            }
            newNode.next = Temp.next;
            Temp.next = newNode;
        }
    }

    // Delete first node
    DeleteFirst() {
        console.log("\n\t\tIn DeleteFirst");

        if (this.head === null && this.tail === null) {
            console.log("\t\t No Node");
            return;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head;
        }
    }

    // Delete last node
    DeleteLast() {
        console.log("\n\t\tIn DeleteLast");

        if (this.head === null && this.tail === null) {
            console.log("\t\t No Node");
            return;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let Temp = this.head;
            while (Temp.next !== this.tail) {
                Temp = Temp.next;
            }
            this.tail = Temp;
            this.tail.next = this.head;
        }
    }

    // Delete at given position
    DeleteAtPosition(iPos) {
        console.log("\n\t\tIn DeleteAtPos");

        let iSize = this.Count();
        if (iPos < 1 || iPos > iSize) {
            return;
        }
        if (iPos === 1) {
            this.DeleteFirst();
        } else if (iPos === iSize) {
            this.DeleteLast();
        } else {
            let Temp = this.head;
            for (let i = 1; i <= iPos - 2; i++) {
                Temp = Temp.next;
            }
            let toDelete = Temp.next;
            Temp.next = toDelete.next;
        }
    }
}

// -------- Usage Example --------
let list = new LinkedList();

list.InsertFirst(151);
list.InsertFirst(51);
list.InsertFirst(11);
list.Display();

list.InsertLast(101);
list.Display();

list.InsertAtPosition(21, 2);
list.Display();

list.DeleteFirst();
list.Display();

list.DeleteLast();
list.Display();

list.DeleteAtPosition(2);
list.Display();

let iRet = list.Count();
console.log("\t\n\nTotal Count of Node is : " + iRet);