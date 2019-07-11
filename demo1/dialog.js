(function (window) {

  // dialog 元素的 html 模板
  const dialogTemplate = `
  <div id="dialog-container" class="dialog-container">
    <div id="dialog" class="dialog" draggable="true" ondragstart="dragDialogStart(event)" ondragend="dragDialogEnd(event)">
      <div id="dialog-title" class="dialog-title"></div>
      <div id="dialog-text" class="dialog-text"></div>
      <div>
        <button id="dialog-cancel-btn" class="dialog-btn">取消</button>
        <button id="dialog-confirm-btn" class="dialog-btn">确定</button>
      </div>
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

    const dialogContainerEl = document.getElementById('dialog-container');
    const dialogTitleEl = document.getElementById('dialog-title');
    const dialogTextEl = document.getElementById('dialog-text');
    const dialogCancelBtnEl = document.getElementById('dialog-cancel-btn');
    const dialogConfirmBtnEl = document.getElementById('dialog-confirm-btn');

    dialogTitleEl.innerText = options.title;
    dialogTextEl.innerText = options.text;

    dialogCancelBtnEl.addEventListener('click', function (e) {
      dialogContainerEl.style['display'] = 'none';
      dialogContainerEl.style['background-color'] = "#fff";
      // console.log('你点击了取消按钮');
    });

    dialogConfirmBtnEl.addEventListener('click', function (e) {
      dialogContainerEl.style['display'] = 'none';
      dialogContainerEl.style['background-color'] = "#fff";
      // console.log('你点击了确定按钮');
    });

    dialogContainerEl.style['background-color'] = "#888888";
    dialogContainerEl.style['display'] = "block";
  }

  let dialogLeft = 0; // 鼠标距离 dialog 左边框的距离
  let dialogTop = 0; // 鼠标距离 dialog 上边框的距离

  function dragDialogStart(e) {
    let boundingClientRect = e.target.getBoundingClientRect();
    dialogLeft = e.clientX - boundingClientRect.x;
    dialogTop = e.clientY - boundingClientRect.y;
  }

  function dragDialogEnd(e) {
    const dialogEl = document.getElementById('dialog');
    dialogEl.style['margin-left'] = `${e.clientX - dialogLeft}px`;
    dialogEl.style['top'] = `${e.clientY - dialogTop}px`;
  }

  window.Dialog = Dialog;
  window.dragDialogStart = dragDialogStart;
  window.dragDialogEnd = dragDialogEnd;
})(window);

