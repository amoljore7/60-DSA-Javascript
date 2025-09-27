// Node class represents a single element (node) in the linked list
class Node {
  constructor(Data) {
    this.Data = Data;   // Stores the data value of the node
    this.Next = null;   // Stores the reference/address of the next node
  }
}

// ---------------- INSERT OPERATIONS ----------------
function InsertFirst(HeadRef, iValue) {
  console.log("\n\t\tInsertFirst");
  const newNode = new Node(iValue);

  if (HeadRef.head === null) {
    // If list is empty, newNode becomes head
    HeadRef.head = newNode;
  } else {
    // Else, point newNode.Next to current head
    newNode.Next = HeadRef.head;
    // Update head to point to newNode
    HeadRef.head = newNode;
  }
  // Diagram:
  // head ──▶ [newNode.Data | Next ──▶ oldHead]
}

// Recursive Display Forward
function DisplayF(Head) {
  if (Head !== null) {
    process.stdout.write(` ${Head.Data} -->`);
    DisplayF(Head.Next);
  }
}

// Recursive Display Backward
function DisplayB(Head) {
  if (Head !== null) {
    DisplayB(Head.Next);
    process.stdout.write(` ${Head.Data} -->`);
  }
}

// Count nodes in linked list
function Count(Head) {
  console.log("\n\t\tIn Count");
  let iCnt = 0;
  while (Head !== null) {
    iCnt++;
    Head = Head.Next; // move to next node
  }
  return iCnt;
}

// Insert at last
function InsertLast(HeadRef, iValue) {
  console.log("\n\t\tInsertLast");
  const newNode = new Node(iValue);

  if (HeadRef.head === null) {
    // If list empty
    HeadRef.head = newNode;
  } else {
    // Traverse to last node
    let Temp = HeadRef.head;
    while (Temp.Next !== null) {
      Temp = Temp.Next;
    }
    // Connect last node's Next to newNode
    Temp.Next = newNode;
  }
  // Diagram: head ──▶ [..] ──▶ [..] ──▶ [newNode.Data | null]
}

// Delete first node
function DeleteFirst(HeadRef) {
  console.log("\n\t\tDeleteFirst");
  if (HeadRef.head === null) {
    console.log("\nIt is NULL\n");
    return;
  }
  // Just shift head to the next node
  HeadRef.head = HeadRef.head.Next;
}

// Delete last node
function DeleteLast(HeadRef) {
  console.log("\n\t\tDeleteLast");
  if (HeadRef.head === null) {
    return; // Empty list
  } else if (HeadRef.head.Next === null) {
    // Only one node
    HeadRef.head = null;
  } else {
    // Traverse to second last node
    let Temp = HeadRef.head;
    while (Temp.Next.Next !== null) {
      Temp = Temp.Next;
    }
    // Break link to last node
    Temp.Next = null;
  }
}

// Insert at given position
function InsertAtPosition(HeadRef, iValue, iPos) {
  console.log("\n\t\tInsertAtPosition");
  let iSize = Count(HeadRef.head);

  if (iPos < 1 || iPos > iSize + 1) {
    console.log("\nPlz Enter Valide Position");
    return;
  }

  if (iPos === 1) {
    InsertFirst(HeadRef, iValue);
  } else if (iPos === iSize + 1) {
    InsertLast(HeadRef, iValue);
  } else {
    const newNode = new Node(iValue);
    let Temp = HeadRef.head;

    // Traverse till node before position
    for (let i = 1; i <= iPos - 2; i++) {
      Temp = Temp.Next;
    }
    // Insert new node in between
    newNode.Next = Temp.Next;
    Temp.Next = newNode;
  }
  // Diagram: [PrevNode] ──▶ [newNode] ──▶ [NextNode]
}

// Delete at given position
function DeleteAtPosition(HeadRef, iPos) {
  console.log("\n\t\tDeleteAtPosition");
  let iSize = Count(HeadRef.head);

  if (iPos < 1 || iPos > iSize) {
    console.log("Plz Enter Valide Position\n");
    return;
  }

  if (iPos === 1) {
    DeleteFirst(HeadRef);
  } else if (iPos === iSize) {
    DeleteLast(HeadRef);
  } else {
    let Temp1 = HeadRef.head;
    for (let i = 1; i <= iPos - 2; i++) {
      Temp1 = Temp1.Next;
    }
    let Temp2 = Temp1.Next; // node to delete
    Temp1.Next = Temp2.Next; // bypass node
  }
  // Diagram: [PrevNode] ──▶ [DeletedNode] ──▶ [NextNode]
  // After deletion: [PrevNode] ──▶ [NextNode]
}

// ----------------- MAIN -----------------
function main() {
  console.log(
    "\n\tSingly Linear Linked List Display Forward AND Backward Direction\n"
  );
  console.log(
    "\n---------------------------------------------------------------------------\n\n"
  );

  // HeadRef is an object holding "head"
  // initially: head = null
  const HeadRef = { head: null };

  // Insert at beginning
  InsertFirst(HeadRef, 11); // head -> 11
  InsertFirst(HeadRef, 21); // head -> 21 -> 11
  InsertFirst(HeadRef, 51); // head -> 51 -> 21 -> 11
  InsertFirst(HeadRef, 101); // head -> 101 -> 51 -> 21 -> 11

  console.log("\n\t\tDisplay Forword");
  DisplayF(HeadRef.head);

  console.log("\n\t\tDisplay Backword\n");
  DisplayB(HeadRef.head);

  let iRet = Count(HeadRef.head);
  console.log(`\n\nTotal No.of Node is -> ${iRet}`);

  // Insert at end
  InsertLast(HeadRef, 121);

  console.log("\n\t\tDisplay Forword");
  DisplayF(HeadRef.head);
  console.log("\n\t\tDisplay Backword\n");
  DisplayB(HeadRef.head);

  // Delete first node
  DeleteFirst(HeadRef);

  console.log("\n\t\tDisplay Forword");
  DisplayF(HeadRef.head);
  console.log("\n\t\tDisplay Backword\n");
  DisplayB(HeadRef.head);

  // Delete last node
  DeleteLast(HeadRef);

  console.log("\n\t\tDisplay Forword");
  DisplayF(HeadRef.head);
  console.log("\n\t\tDisplay Backword\n");
  DisplayB(HeadRef.head);

  // Insert at specific position
  InsertAtPosition(HeadRef, 151, 2);

  console.log("\n\t\tDisplay Forword");
  DisplayF(HeadRef.head);
  console.log("\n\t\tDisplay Backword\n");
  DisplayB(HeadRef.head);

  // Delete at specific position
  DeleteAtPosition(HeadRef, 2);

  console.log("\n\t\tDisplay Forword");
  DisplayF(HeadRef.head);
  console.log("\n\t\tDisplay Backword\n");
  DisplayB(HeadRef.head);
}

main();