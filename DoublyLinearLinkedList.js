// Doubly Linear Linked List in JavaScript
// Each node has 3 parts: Data | Next (address of next node) | Prev (address of previous node)

class Node {
  constructor(data) {
    this.Data = data; // stores actual data
    this.Next = null; // stores reference of next node
    this.Prev = null; // stores reference of previous node
  }
}

// Insert node at beginning
function InsertFirst(HeadRef, iValue) {
  console.log("\t\tInsert First Node");
  let newNode = new Node(iValue);

  if (HeadRef.Head === null) {
    // If list empty -> Head points to newNode
    HeadRef.Head = newNode;
  } else {
    // New node points to old head
    newNode.Next = HeadRef.Head;
    // Old head points back to new node
    HeadRef.Head.Prev = newNode;
    // Update Head to newNode
    HeadRef.Head = newNode;
  }
}

// Insert node at end
function InsertLast(HeadRef, iValue) {
  console.log("\t\tInsert Last Node");
  let newNode = new Node(iValue);

  if (HeadRef.Head === null) {
    HeadRef.Head = newNode;
  } else {
    let Temp = HeadRef.Head;
    while (Temp.Next !== null) {
      Temp = Temp.Next; // Traverse till last node
    }
    Temp.Next = newNode; // Last node points to newNode
    newNode.Prev = Temp; // newNode points back to last node
  }
}

// Delete first node
function DeleteFirst(HeadRef) {
  console.log("\t\tDelete First Node");
  if (HeadRef.Head === null) return; // No nodes

  if (HeadRef.Head.Next === null) {
    // Only one node
    HeadRef.Head = null;
  } else {
    // Head moves to 2nd node
    HeadRef.Head = HeadRef.Head.Next;
    HeadRef.Head.Prev = null; // Remove back reference
  }
}

// Delete last node
function DeleteLast(HeadRef) {
  console.log("\t\tDelete Last Node");
  if (HeadRef.Head === null) return;

  if (HeadRef.Head.Next === null) {
    // Only one node
    HeadRef.Head = null;
  } else {
    let Temp = HeadRef.Head;
    while (Temp.Next !== null) {
      Temp = Temp.Next; // Traverse till last
    }
    // Break connection of last node
    Temp.Prev.Next = null;
  }
}

// Insert at specific position
function InsertAtPosition(HeadRef, iValue, iPos) {
  console.log("\t\tInsert At Position");
  let iSize = Count(HeadRef.Head);
  if (iPos < 1 || iPos > iSize + 1) return;

  if (iPos === 1) {
    InsertFirst(HeadRef, iValue);
  } else if (iPos === iSize + 1) {
    InsertLast(HeadRef, iValue);
  } else {
    let newNode = new Node(iValue);
    let Temp = HeadRef.Head;

    // Traverse to (pos-1)
    for (let iCnt = 1; iCnt <= iPos - 2; iCnt++) {
      Temp = Temp.Next;
    }

    // Connect new node
    newNode.Next = Temp.Next;
    Temp.Next.Prev = newNode;
    Temp.Next = newNode;
    newNode.Prev = Temp;
  }
}

// Delete node at position
function DeleteAtPosition(HeadRef, iPos) {
  console.log("\t\tDelete At Position");
  let iSize = Count(HeadRef.Head);
  if (iPos < 1 || iPos > iSize) {
    console.log("\t\tPlz Enter Valid Position");
    return;
  }

  if (iPos === 1) {
    DeleteFirst(HeadRef);
  } else if (iPos === iSize) {
    DeleteLast(HeadRef);
  } else {
    let Temp1 = HeadRef.Head;

    // Reach node before target
    for (let iCnt = 1; iCnt <= iPos - 2; iCnt++) {
      Temp1 = Temp1.Next;
    }

    let Temp2 = Temp1.Next; // Target node
    Temp1.Next = Temp2.Next; // Skip Temp2
    Temp2.Next.Prev = Temp1; // Link back
  }
}

// Display list Forward
function DisplayF(Head) {
  console.log("\nElements in Linked List Are Forward Direction\n");
  let Temp = Head;

  // Traverse till NULL
  while (Temp !== null) {
    process.stdout.write(" " + Temp.Data + " -->");
    Temp = Temp.Next;
  }
  console.log(" NULL");
  console.log("-------------------------------------------------------");
}

// Display list Backward
function DisplayB(Head) {
  console.log("\nElements in Linked List Are Backward Direction\n");
  if (Head === null) return;

  let Temp = Head;

  // Traverse to last node
  while (Temp.Next !== null) {
    Temp = Temp.Next;
  }

  // Traverse back
  while (Temp !== null) {
    process.stdout.write(" " + Temp.Data + " -->");
    Temp = Temp.Prev;
  }
  console.log(" NULL");
  console.log("-------------------------------------------------------");
}

// Count number of nodes
function Count(Head) {
  let iCnt = 0;
  let Temp = Head;
  while (Temp !== null) {
    iCnt++;
    Temp = Temp.Next;
  }
  return iCnt;
}

// ----------------- MAIN -----------------
(function main() {
  let HeadRef = { Head: null };
  console.log("\n-------------------------------------------------------");

  // Head -> [11] <-> [21] <-> [51] <-> [101]
  InsertFirst(HeadRef, 101);
  InsertFirst(HeadRef, 51);
  InsertFirst(HeadRef, 21);
  InsertFirst(HeadRef, 11);

  DisplayF(HeadRef.Head);
  DisplayB(HeadRef.Head);

  // InsertLast -> adds [111] at end
  InsertLast(HeadRef, 111);
  DisplayF(HeadRef.Head);

  // Delete first -> removes [11]
  DeleteFirst(HeadRef);
  DisplayF(HeadRef.Head);
  DisplayB(HeadRef.Head);

  // Delete last -> removes [111]
  DeleteLast(HeadRef);
  DisplayF(HeadRef.Head);
  DisplayB(HeadRef.Head);

  // Insert 71 at pos=2
  InsertAtPosition(HeadRef, 71, 2);
  DisplayF(HeadRef.Head);
  DisplayB(HeadRef.Head);

  // Delete node at pos=2 (removes [71])
  DeleteAtPosition(HeadRef, 2);
  DisplayF(HeadRef.Head);
  DisplayB(HeadRef.Head);

  let iRet = Count(HeadRef.Head);
  console.log("\nCount Of Node Is : " + iRet);
  console.log("\n-------------------------------------------------------");
})();