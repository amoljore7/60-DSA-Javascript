// Doubly Circular Linked List in JavaScript
// Each node contains: Data | Next (address of next node) | Prev (address of previous node)

class Node {
  constructor(data) {
    this.Data = data;
    this.Next = null;
    this.Prev = null;
  }
}

// Insert node at beginning
function InsertFirst(refs, iValue) {
  console.log("\t\tInsert First");
  let { Head, Tail } = refs;
  let newNode = new Node(iValue);

  if (Head === null || Tail === null) {
    // If list is empty -> Head & Tail both point to newNode
    Head = newNode;
    Tail = newNode;
  } else {
    // Link new node with current Head
    newNode.Next = Head;
    Head.Prev = newNode;
    Head = newNode; // Move Head to new node
  }
  // Maintain circular connection
  Tail.Next = Head;
  Head.Prev = Tail;

  refs.Head = Head;
  refs.Tail = Tail;
}

// Insert node at end
function InsertLast(refs, iValue) {
  console.log("\t\tInsert Last");
  let { Head, Tail } = refs;
  let newNode = new Node(iValue);

  if (Head === null && Tail === null) {
    Head = newNode;
    Tail = newNode;
  } else {
    Tail.Next = newNode;
    newNode.Prev = Tail;
    Tail = newNode; // Update Tail
  }
  // Maintain circular connection
  Tail.Next = Head;
  Head.Prev = Tail;

  refs.Head = Head;
  refs.Tail = Tail;
}

// Insert at position
function InsertAtPos(refs, iValue, iPos) {
  console.log("\t\tInsert At Position");
  let { Head, Tail } = refs;
  let iSize = Count(Head, Tail);

  if (iPos < 1 || iPos > iSize + 1) return;

  if (iPos === 1) {
    InsertFirst(refs, iValue);
  } else if (iPos === iSize + 1) {
    InsertLast(refs, iValue);
  } else {
    let newNode = new Node(iValue);
    let Temp = Head;

    // Traverse to node before desired position
    for (let iCnt = 1; iCnt <= iPos - 2; iCnt++) {
      Temp = Temp.Next;
    }

    newNode.Next = Temp.Next;
    Temp.Next.Prev = newNode;
    Temp.Next = newNode;
    newNode.Prev = Temp;

    // Maintain circular connection
    Tail.Next = Head;
    Head.Prev = Tail;

    refs.Head = Head;
    refs.Tail = Tail;
  }
}

// Delete first node
function DeleteFirst(refs) {
  console.log("\t\tDelete First");
  let { Head, Tail } = refs;

  if (Head === null && Tail === null) {
    console.log("No Node Present");
    return;
  } else if (Head === Tail) {
    // Only one node
    Head = null;
    Tail = null;
  } else {
    Head = Head.Next; // Move Head to 2nd node
    Head.Prev = Tail;
    Tail.Next = Head; // Maintain circular link
  }

  refs.Head = Head;
  refs.Tail = Tail;
}

// Delete last node
function DeleteLast(refs) {
  console.log("\t\tDelete Last");
  let { Head, Tail } = refs;

  if (Head === null && Tail === null) {
    console.log("NO Node");
    return;
  } else if (Head === Tail) {
    Head = null;
    Tail = null;
  } else {
    Tail = Tail.Prev; // Move Tail back
    Tail.Next = Head; // Maintain circular link
    Head.Prev = Tail;
  }

  refs.Head = Head;
  refs.Tail = Tail;
}

// Delete at position
function DeleteAtPos(refs, iPos) {
  console.log("\t\tDelete At Position");
  let { Head, Tail } = refs;
  let iSize = Count(Head, Tail);

  if (iPos < 1 || iPos > iSize) {
    console.log("Plz Enter Valid Position");
    return;
  }
  if (iPos === 1) {
    DeleteFirst(refs);
  } else if (iPos === iSize) {
    DeleteLast(refs);
  } else {
    let Temp = Head;

    // Traverse till (pos - 1)
    for (let iCnt = 1; iCnt <= iPos - 2; iCnt++) {
      Temp = Temp.Next;
    }

    // Skip the node at pos
    Temp.Next = Temp.Next.Next;
    Temp.Next.Prev = Temp;
  }

  refs.Head = Head;
  refs.Tail = Tail;
}

// Display list Forward
function DisplayF(Head, Tail) {
  console.log("\n\n\t\tInside Display Forward\n");
  if (Head === null || Tail === null) {
    console.log("No Any Node In Linked List");
    return;
  }
  let Temp = Head;
  do {
    process.stdout.write(Temp.Data + " ");
    Temp = Temp.Next;
  } while (Temp !== Tail.Next);
  console.log("\n--------------------------------------------------------------");
}

// Display list Backward
function DisplayB(Head, Tail) {
  console.log("\n\n\t\tInside Display Backward\n");
  if (Head === null || Tail === null) {
    console.log("No Any Node In Linked List");
    return;
  }
  let Temp = Tail;
  do {
    process.stdout.write(Temp.Data + " ");
    Temp = Temp.Prev;
  } while (Temp !== Head.Prev);
  console.log("\n--------------------------------------------------------------");
}

// Count number of nodes
function Count(Head, Tail) {
  let iCnt = 0;
  console.log("\n\n\t\tInside Count\n");
  if (Head === null || Tail === null) {
    console.log("No Any Node In Linked List");
    return -1;
  }
  let Temp = Head;
  do {
    iCnt++;
    Temp = Temp.Next;
  } while (Temp !== Tail.Next);
  return iCnt;
}

// ----------------- DEMO RUN -----------------
(function main() {
  console.log("\n\t\tDoubly Circular Linked List\n\n");
  console.log("-----------------------------------------------------------------------------\n");

  let refs = { Head: null, Tail: null };

  // InsertFirst keeps adding at beginning
  InsertFirst(refs, 11);
  InsertFirst(refs, 21);
  InsertFirst(refs, 51);
  InsertFirst(refs, 101);
  InsertFirst(refs, 111);

  // Current list (circular):
  // Head -> 111 <-> 101 <-> 51 <-> 21 <-> 11 <-> (back to Head)

  DisplayF(refs.Head, refs.Tail);
  DisplayB(refs.Head, refs.Tail);

  // Delete node at position 4
  DeleteAtPos(refs, 4);
  DisplayF(refs.Head, refs.Tail);
  DisplayB(refs.Head, refs.Tail);

  let iRet = Count(refs.Head, refs.Tail);
  console.log("\nCount Of Node is = " + iRet);
  console.log("\n--------------------------------------------------------------");
})();