const dialogTemplate = `
  <div id="dialog-container" class="dialog-container" draggable="true" ondragstart="dragDialogStart(event)" ondragend="dragDialogEnd(event)">
  <div id="dialog-title" class="dialog-title">react</div>
  <div id="dialog-text" class="dialog-text">hello world</div>
  <div>
    <button id="dialog-cancel-btn" class="dialog-btn">取消</button>
    <button id="dialog-confirm-btn" class="dialog-btn">确定</button>
  </div>
  </div>
`;
function Dialog(options = {}) {
  // 创建 dialog 元素
  const dialogContainer = document.createElement('div');
  dialogContainer.innerHTML = dialogTemplate;
  document.getElementsByTagName('body')[0].appendChild(dialogContainer);

  options = Object.prototype.toString.call(options) !== '[object Object]' ? {} : options;
  options.title = options.title || 'dialog-title';
  options.text = options.text || 'dialog-text';
  // options.color
  // options.backgroundColor
  const dialogEl = document.getElementById('dialog-container');
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
  dialogLeft = e.clientX - e.target.getBoundingClientRect().x;
  dialogTop = e.clientY - e.target.getBoundingClientRect().y;
}

function dragDialogEnd(e) {
  const dialogEl = document.getElementById('dialog-container');
  dialogEl.style['margin-left'] = `${e.clientX - dialogLeft}px`;
  dialogEl.style['top'] = `${e.clientY - dialogTop}px`;
}


