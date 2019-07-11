function Dialog(options = {}) {
  options = Object.prototype.toString.call(options) !== '[object Object]' ? {} : options;
  options.title = options.title || 'dialog-title';
  options.text = options.text || 'dialog-text';
  // options.color
  // options.backgroundColor
  const dialogEl = document.getElementById('dialog-template');
  const dialogTitleEl = document.getElementById('dialog-title');
  const dialogTextEl = document.getElementById('dialog-text');
  const dialogCancelBtnEl = document.getElementById('dialog-cancel-btn');
  const dialogConfirmBtnEl = document.getElementById('dialog-confirm-btn');

  dialogTitleEl.innerText = options.title;
  dialogTextEl.innerText = options.text;
  dialogCancelBtnEl.addEventListener('click', function (e) {
    dialogEl.style = 'display:none;';
    document.getElementsByTagName('body')[0].style = "background-color: #fff;"
    console.log('你点击了取消按钮');
  });

  dialogConfirmBtnEl.addEventListener('click', function (e) {
    dialogEl.style = 'display:none;';
    document.getElementsByTagName('body')[0].style = "background-color: #fff;"
    console.log('你点击了确定按钮');
  });
  document.getElementsByTagName('body')[0].style = "background-color: #BFB7B7;"
  dialogEl.style = 'display:block;';
}

let dialogLeft = 0;
let dialogTop = 0;
function dragDialogStart(e) {
  const dialogEl = document.getElementById('dialog-template');
  if (e.clientX === 0) {
    return;
  }
  console.log(e.clientX);
  console.log(e.x);
  dialogEl.offsetLeft = e.clientX;
  dialogLeft = e.clientX - e.target.getBoundingClientRect().x;
  dialogTop = e.clientX - e.target.getBoundingClientRect().x;

}

function dragDialogEnd(e) {
  const dialogEl = document.getElementById('dialog-template');
  if (e.clientX === 0) {
    return;
  }
  dialogEl.offsetLeft = e.clientX;
  dialogEl.style['margin-left'] = `${e.clientX - dialogLeft}px`
  dialogEl.style['margin-top'] = `${e.clientY - dialogTop}px`
}


