const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  static insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        BinarySearchTree.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        BinarySearchTree.insertNode(node.right, newNode);
      }
    }
  }

  static searchTree(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchTree(node.left, data);
    } else if (data > node.data) {
      return this.searchTree(node.right, data);
    } else {
      return node;
    }
  }

  static searchTreeMin(node) {
    if (node === null) {
      return null;
    } else if (node.left !== null) {
      return this.searchTreeMin(node.left);
    }
    return node;
  }

  static searchTreeMax(node) {
    if (node === null) {
      return null;
    } else if (node.right !== null) {
      return this.searchTreeMax(node.right);
    }
    return node;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      BinarySearchTree.insertNode(this.rootNode, newNode);
    }
  }

  has(data) {
    return BinarySearchTree.searchTree(this.rootNode, data) ? true : false;
  }

  find(data) {
    return BinarySearchTree.searchTree(this.rootNode, data);
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    const minValue = BinarySearchTree.searchTreeMin(this.rootNode);
    return minValue ? minValue.data : null;
  }

  max() {
    const maxValue = BinarySearchTree.searchTreeMax(this.rootNode);
    return maxValue ? maxValue.data : null;
  }
}

module.exports = {
  BinarySearchTree,
};
