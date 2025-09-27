// Node of BST
class Node {
  constructor(data) {
    this.data = data;
    this.lchild = null;
    this.rchild = null;
  }
}

// Binary Search Tree
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let temp = this.root;
    while (true) {
      if (value > temp.data) {
        if (temp.rchild === null) {
          temp.rchild = newNode;
          break;
        }
        temp = temp.rchild;
      } else if (value < temp.data) {
        if (temp.lchild === null) {
          temp.lchild = newNode;
          break;
        }
        temp = temp.lchild;
      } else {
        // duplicate value
        break;
      }
    }
  }

  search(value) {
    let temp = this.root;
    while (temp !== null) {
      if (value === temp.data) return true;
      else if (value > temp.data) temp = temp.rchild;
      else temp = temp.lchild;
    }
    return false;
  }

  count(node = this.root) {
    if (node === null) return 0;
    return 1 + this.count(node.lchild) + this.count(node.rchild);
  }

  countLeaf(node = this.root) {
    if (node === null) return 0;
    if (node.lchild === null && node.rchild === null) return 1;
    return this.countLeaf(node.lchild) + this.countLeaf(node.rchild);
  }

  countEven(node = this.root) {
    if (node === null) return 0;
    let cnt = node.data % 2 === 0 ? 1 : 0;
    return cnt + this.countEven(node.lchild) + this.countEven(node.rchild);
  }

  countOdd(node = this.root) {
    if (node === null) return 0;
    let cnt = node.data % 2 !== 0 ? 1 : 0;
    return cnt + this.countOdd(node.lchild) + this.countOdd(node.rchild);
  }

  inorder(node = this.root) {
    if (node !== null) {
      this.inorder(node.lchild);
      process.stdout.write(node.data + "\t");
      this.inorder(node.rchild);
    }
  }

  preorder(node = this.root) {
    if (node !== null) {
      process.stdout.write(node.data + "\t");
      this.preorder(node.lchild);
      this.preorder(node.rchild);
    }
  }

  postorder(node = this.root) {
    if (node !== null) {
      this.postorder(node.lchild);
      this.postorder(node.rchild);
      process.stdout.write(node.data + "\t");
    }
  }

  // pretty print the tree
  printTreePretty() {
    const root = this.root;
    if (!root) return;

    const getHeight = (node) => {
      if (!node) return 0;
      return 1 + Math.max(getHeight(node.lchild), getHeight(node.rchild));
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
        levelNodes.push(node ? node.data : null);
        if (node) {
          queue.push(node.lchild);
          queue.push(node.rchild);
        } else {
          queue.push(null);
          queue.push(null);
        }
      }

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
}

// ---------------- DEMO ----------------
const tree = new BST();

tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log("\nTree Structure:\n");
tree.printTreePretty();

console.log("\nInorder Traversal  (Left → Root → Right) :");
tree.inorder();

console.log("\n\nPreorder Traversal (Root → Left → Right) :");
tree.preorder();

console.log("\n\nPostorder Traversal (Left → Right → Root):");
tree.postorder();

console.log("\nTotal Nodes = " + tree.count());
console.log("Leaf Nodes = " + tree.countLeaf());
console.log("Even Nodes = " + tree.countEven());
console.log("Odd Nodes = " + tree.countOdd());

console.log("\nSearch 60 => " + (tree.search(60) ? "Found" : "Not Found"));
console.log("Search 100 => " + (tree.search(100) ? "Found" : "Not Found"));