function click1() {
  Dialog({
    title: 'dialog1',
    text: 'this is dialog1'
  });
}

function click2() {
  Dialog({
    title: 'dialog2',
    text: 'this is dialog2'
  });
}

function click3() {
  // 不传参数
  Dialog();
}

function click4() {
  // 参数不是obj类型
  Dialog(11111);
}