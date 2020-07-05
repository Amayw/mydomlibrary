// const res = dom.create("<ul><li>1</li><li>2</li><li>3</li></ul>");
// const res1 = dom.create("<div>新建div1</div>");
// const res2 = dom.create("<div>新建div2</div>");
// const res3 = dom.create("<div>新建div3</div>");
// console.log(res);
// dom.after(test, res);
// // dom.after(test, res2);
// // dom.after(test, res3);
// // dom.before(test, res1);
// const newdiv = dom.create('<div id="parent"></div>');
// dom.wrap(test, newdiv);
// // const r = dom.empty(window.empty);
// // console.log(r);
// dom.attr(empty, "title", "hello");
// console.log(dom.attr(empty, "title"));

// dom.text(test, "这是新的内容");
// dom.style(test, { border: "1px solid red", color: "pink" });

// dom.class.add(test, "ccc");
// console.log(dom.class.contains(test, "ccc"));
// dom.class.remove(test, "ccc");
// console.log(dom.class.contains(test, "ccc"));
// const fn = () => {
//   console.log("点击了");
// };
// dom.on(test, "click", fn);
// // dom.off(test, "click", fn);
// dom.find("#empty")[0];
// const re = dom.find(".red", window.test)[0];
// console.log(re);
// const sib = dom.siblings(dom.find("#s2")[0]);
// console.log(sib);
const t = dom.find("#as")[0];
console.log(dom.children(t));
dom.each(dom.children(t), (n) => {
  dom.style(n, "color", "pink");
});
// console.log(dom.index(window.s1));
