class Node {
  constructor(Data) {
    this.Data = Data;
    this.LChild = null;
    this.RChild = null;
  }
}

function Insert(RootRef, iValue) {
  const newNode = new Node(iValue);

  if (RootRef.root === null) {
    RootRef.root = newNode;
  } else {
    let Temp = RootRef.root;
    while (true) {
      if (iValue > Temp.Data) {
        if (Temp.RChild === null) {
          Temp.RChild = newNode;
          break;
        }
        Temp = Temp.RChild;
      } else if (iValue < Temp.Data) {
        if (Temp.LChild === null) {
          Temp.LChild = newNode;
          break;
        }
        Temp = Temp.LChild;
      } else {
        // Duplicate value -> ignore
        break;
      }
    }
  }
}

function Search(Root, iValue) {
  while (Root !== null) {
    if (iValue === Root.Data) return true;
    else if (iValue > Root.Data) Root = Root.RChild;
    else Root = Root.LChild;
  }
  return false;
}

function Count(Root) {
  if (Root === null) return 0;
  return 1 + Count(Root.LChild) + Count(Root.RChild);
}

function CountLeafNode(Root) {
  if (Root === null) return 0;
  if (Root.LChild === null && Root.RChild === null) return 1;
  return CountLeafNode(Root.LChild) + CountLeafNode(Root.RChild);
}

function Inorder(Root) {
  if (Root !== null) {
    Inorder(Root.LChild);
    process.stdout.write(Root.Data + "\t");
    Inorder(Root.RChild);
  }
}

function Preorder(Root) {
  if (Root !== null) {
    process.stdout.write(Root.Data + "\t");
    Preorder(Root.LChild);
    Preorder(Root.RChild);
  }
}

function Postorder(Root) {
  if (Root !== null) {
    Postorder(Root.LChild);
    Postorder(Root.RChild);
    process.stdout.write(Root.Data + "\t");
  }
}

function CountEvenNode(Root) {
  if (Root === null) return 0;
  let count = (Root.Data % 2 === 0 ? 1 : 0);
  return count + CountEvenNode(Root.LChild) + CountEvenNode(Root.RChild);
}

function CountOddNode(Root) {
  if (Root === null) return 0;
  let count = (Root.Data % 2 === 1 ? 1 : 0);
  return count + CountOddNode(Root.LChild) + CountOddNode(Root.RChild);
}

// -------- Print Tree as Structure --------
function printTreePretty(root) {
  if (!root) return;

  const getHeight = (node) => {
    if (!node) return 0;
    return 1 + Math.max(getHeight(node.LChild), getHeight(node.RChild));
  };

  const height = getHeight(root);
  const maxWidth = Math.pow(2, height) - 1;

  const queue = [root];
  let level = 0;

  while (level < height) {
    const levelNodes = [];
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      levelNodes.push(node ? node.Data : null);
      if (node) {
        queue.push(node.LChild);
        queue.push(node.RChild);
      } else {
        queue.push(null);
        queue.push(null);
      }
    }

    // Print nodes
    const spacesBetween = Math.floor(maxWidth / Math.pow(2, level));
    const spacesBefore = Math.floor(spacesBetween / 2);

    let line = " ".repeat(spacesBefore);
    line += levelNodes
      .map((val) => (val === null ? " " : val.toString()))
      .join(" ".repeat(spacesBetween));
    console.log(line);

    level++;
  }
}

// ---------------- MAIN ----------------
function main() {
  console.log("\n\t\tBinary Search Tree\n");
  console.log("\t---------------------------------------\n");

  const RootRef = { root: null };

  Insert(RootRef, 50);
  Insert(RootRef, 30);
  Insert(RootRef, 70);
  Insert(RootRef, 20);
  Insert(RootRef, 40);
  Insert(RootRef, 60);
  Insert(RootRef, 80);


  console.log("\nTree Structure:\n");
  printTreePretty(RootRef.root);

  console.log("\nInorder Traversal  (Left → Root → Right) :");
  Inorder(RootRef.root);

  console.log("\n\nPreorder Traversal (Root → Left → Right) :");
  Preorder(RootRef.root);

  console.log("\n\nPostorder Traversal (Left → Right → Root):");
  Postorder(RootRef.root);

  console.log("\n\nTotal Nodes = " + Count(RootRef.root));
  console.log("Leaf Nodes = " + CountLeafNode(RootRef.root));
  console.log("Even Nodes = " + CountEvenNode(RootRef.root));
  console.log("Odd Nodes = " + CountOddNode(RootRef.root));

  console.log("\nSearch 60 => " + (Search(RootRef.root, 60) ? "Found" : "Not Found"));
  console.log("Search 100 => " + (Search(RootRef.root, 100) ? "Found" : "Not Found"));

}

main();
/*
   BST?

A Binary Search Tree is a special type of binary tree where:
	1.	Each node has at most two children (left and right).
	2.	The tree follows this BST property:
	•	Left Subtree: All values are smaller than the parent.
	•	Right Subtree: All values are greater than the parent.
Your tree after insertions

You inserted: 50, 30, 70, 20, 40, 60, 80

         50
       /    \
     30      70
    /  \    /  \
  20   40  60   80



  1️⃣ Inorder Traversal (Left → Root → Right)

Steps:
	1.	Go all the way left.
	2.	Print the node.
	3.	Then go right.

Execution:
	•	Start at 50
	•	Left → 30
	•	Left → 20 → print 20
	•	Back to 30 → print 30
	•	Right → 40 → print 40
	•	Back to 50 → print 50
	•	Right → 70
	•	Left → 60 → print 60
	•	Back to 70 → print 70
	•	Right → 80 → print 80

👉 Output: 20   30   40   50   60   70   80
⚡ Always sorted order for BST.

2️⃣ Preorder Traversal (Root → Left → Right)

Steps:
	1.	Print root.
	2.	Visit left.
	3.	Visit right.

Execution:
	•	Start at 50 → print 50
	•	Left → 30 → print 30
	•	Left → 20 → print 20
	•	Back → Right → 40 → print 40
	•	Back → Right → 70 → print 70
	•	Left → 60 → print 60
	•	Right → 80 → print 80

👉 Output:50   30   20   40   70   60   80

3️⃣ Postorder Traversal (Left → Right → Root)

Steps:
	1.	Visit left.
	2.	Visit right.
	3.	Print root last.

Execution:
	•	Left → 30
	•	Left → 20 → print 20
	•	Right → 40 → print 40
	•	Then print 30
	•	Right → 70
	•	Left → 60 → print 60
	•	Right → 80 → print 80
	•	Then print 70
	•	Finally print 50

👉 Output:20   40   30   60   80   70   50
  */