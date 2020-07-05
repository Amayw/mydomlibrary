window.dom = {
  // 创建节点
  create(tag) {
    const container = document.createElement("template");
    container.innerHTML = tag.trim();
    return container.content.firstChild;
  },
  //新增弟弟
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSiblings);
  },
  //新增哥哥
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  //新增儿子
  append(parent, child) {
    parent.appendChild(child);
  },
  //新增父亲
  wrap(tag, parent) {
    dom.before(tag, parent);
    dom.append(parent, tag);
  },
  //删除节点
  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  //删除后代
  empty(node) {
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(x));
      x = node.firstChild;
    }
    return array;
  },
  //set,get属性
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  //设置文本内容
  text(node, content) {
    if (arguments.length === 2) {
      if ("innerText" in node) {
        node.innerText = content;
      } else {
        node.innerContent = content;
      }
    } else if (arguments.length === 1) {
      if ("innerText" in node) {
        return node.innerText;
      } else {
        return node.innerContent;
      }
    }
  },
  //设置html内容
  html(node, content) {
    if (arguments.length === 2) {
      node.innerHTML = content;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  //设置样式
  style(node, name, value) {
    if (arguments.length === 3) {
      node.style[name] = value;
    } else if (arguments.length === 2) {
      if (typeof name === "string") {
        return node.style;
      } else if (name instanceof Object) {
        const object = name;
        for (let key in object) {
          node.style[key] = object[key];
        }
      }
    }
  },
  //设置class
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    contains(node, className) {
      return node.classList.contains(className);
    },
  },
  //事件
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },
  //获取
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  //下一个节点
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType == 3) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType == 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    let x = dom.children(node.parentNode);
    let i = 0;
    for (i = 0; i < x.length; i++) {
      if (x[i] === node) {
        break;
      }
    }
    return i;
  },
};
