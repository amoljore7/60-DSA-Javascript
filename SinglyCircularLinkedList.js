// Node structure for Circular Singly Linked List
class Node {
    constructor(Data) {
        this.Data = Data;   // value stored in the node
        this.Next = null;   // pointer to the next node
    }
}

// Insert at beginning
function InsertFirst(HeadTail, iValue) {
    console.log("\n\t\tInsertFirst");
    let newNode = new Node(iValue);

    if (HeadTail.Head === null && HeadTail.Tail === null) {
        // Case 1: Empty list
        HeadTail.Head = newNode;
        HeadTail.Tail = newNode;
        HeadTail.Tail.Next = HeadTail.Head; 
        // Circle formed: Head & Tail point to same node
    } else {
        // Case 2: List has nodes
        newNode.Next = HeadTail.Head; // new node points to old Head
        HeadTail.Head = newNode;      // update Head to new node
        HeadTail.Tail.Next = HeadTail.Head; // Tail still points back to Head
    }
    // Diagram after InsertFirst:
    // Head ──▶ [newNode] ──▶ [..] ──▶ Tail ──┐
    //        ◀──────────────────────────────┘
}

// Display all nodes
function Display(HeadTail) {
    console.log("\n\t\tIn Display\n");

    if (HeadTail.Head === null && HeadTail.Tail === null) {
        console.log("\t\tNo Any Node In Linked List");
        return;
    }

    let temp = HeadTail.Head;
    do {
        process.stdout.write(temp.Data + " ");
        temp = temp.Next;
    } while (temp !== HeadTail.Tail.Next); 
    // Stop when loop comes back to Head

    console.log(" NULL");
    console.log("-------------------------------------------------------");
}

// Insert at end
function InsertLast(HeadTail, iValue) {
    console.log("\n\t\tInsertLast");

    let newNode = new Node(iValue);

    if (HeadTail.Head === null && HeadTail.Tail === null) {
        // Same as InsertFirst for empty list
        HeadTail.Head = newNode;
        HeadTail.Tail = newNode;
        HeadTail.Tail.Next = HeadTail.Head;
    } else {
        HeadTail.Tail.Next = newNode;   // old Tail points to new node
        HeadTail.Tail = newNode;        // Tail moves to new node
        HeadTail.Tail.Next = HeadTail.Head; // Tail connects back to Head
    }
    // Diagram:
    // Head ──▶ [..] ──▶ [oldTail] ──▶ [newTail] ──┐
    //        ◀────────────────────────────────────┘
}

// Count number of nodes
function Count(HeadTail) {
    console.log("\n\t\tIn Count");
    if (HeadTail.Head === null && HeadTail.Tail === null) {
        console.log("\t\t\nNo Any Node In Linked List");
        return -1;
    }
    let iCnt = 0;
    let temp = HeadTail.Head;
    do {
        iCnt++;
        temp = temp.Next;
    } while (temp !== HeadTail.Tail.Next); // loop back to head
    return iCnt;
}

// Insert at specific position
function InsertAtPosition(HeadTail, iValue, iPos) {
    console.log("\n\t\tIn InsertAtPos");
    let iSize = Count(HeadTail);

    if (iPos < 1 || iPos > iSize + 1) {
        return;
    }
    if (iPos === 1) {
        InsertFirst(HeadTail, iValue);
    } else if (iPos === iSize + 1) {
        InsertLast(HeadTail, iValue);
    } else {
        let newNode = new Node(iValue);
        let Temp = HeadTail.Head;
        for (let i = 1; i <= iPos - 2; i++) {
            Temp = Temp.Next;
        }
        newNode.Next = Temp.Next; // connect to next
        Temp.Next = newNode;      // link previous to newNode
    }
}

// Delete first node
function DeleteFirst(HeadTail) {
    console.log("\n\t\tIn DeleteFirst");

    if (HeadTail.Head === null && HeadTail.Tail === null) {
        console.log("\t\t No Node");
        return;
    }
    if (HeadTail.Head === HeadTail.Tail) {
        // Only one node
        HeadTail.Head = null;
        HeadTail.Tail = null;
    } else {
        HeadTail.Head = HeadTail.Head.Next; // move Head to next
        HeadTail.Tail.Next = HeadTail.Head; // Tail points to new Head
    }
}

// Delete last node
function DeleteLast(HeadTail) {
    console.log("\n\t\tIn DeleteLast");

    if (HeadTail.Head === null && HeadTail.Tail === null) {
        console.log("\t\t No Node");
        return;
    }
    if (HeadTail.Head === HeadTail.Tail) {
        // Only one node
        HeadTail.Head = null;
        HeadTail.Tail = null;
    } else {
        let Temp = HeadTail.Head;
        while (Temp.Next !== HeadTail.Tail) {
            Temp = Temp.Next;
        }
        HeadTail.Tail = Temp;        // move Tail to 2nd last node
        HeadTail.Tail.Next = HeadTail.Head; // re-link back to Head
    }
}

// Delete at given position
function DeleteAtPosition(HeadTail, iPos) {
    console.log("\n\t\tIn DeleteAtPos");

    let iSize = Count(HeadTail);
    if (iPos < 1 || iPos > iSize) {
        return;
    }
    if (iPos === 1) {
        DeleteFirst(HeadTail);
    } else if (iPos === iSize) {
        DeleteLast(HeadTail);
    } else {
        let Temp = HeadTail.Head;
        for (let i = 1; i <= iPos - 2; i++) {
            Temp = Temp.Next;
        }
        let toDelete = Temp.Next;
        Temp.Next = toDelete.Next; // bypass node
    }
}

// -------- Main Simulation --------
function main() {
    let HeadTail = { Head: null, Tail: null };

    InsertFirst(HeadTail, 151); // Head -> 151
    InsertFirst(HeadTail, 51);  // Head -> 51 -> 151
    InsertFirst(HeadTail, 11);  // Head -> 11 -> 51 -> 151
    Display(HeadTail);

    InsertLast(HeadTail, 101);  // Add 101 at end
    Display(HeadTail);

    InsertAtPosition(HeadTail, 21, 2); // Insert 21 at position 2
    Display(HeadTail);

    DeleteFirst(HeadTail); // Remove first
    Display(HeadTail);

    DeleteLast(HeadTail); // Remove last
    Display(HeadTail);

    DeleteAtPosition(HeadTail, 2); // Remove at pos 2
    Display(HeadTail);

    let iRet = Count(HeadTail);
    console.log("\t\nTotal Count of Node is : " + iRet);
    console.log("\n-------------------------------------------------------");
}

main();