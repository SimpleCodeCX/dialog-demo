(function (window) {

  // dialog 元素的 html 模板
  const dialogTemplate = `
  <div id="dialog-container" class="dialog-container">
    <div id="dialog" class="dialog" draggable="true" ondragstart="dragDialogStart(event)" ondragend="dragDialogEnd(event)">
      <div class="dialog-bar"></div>
      <div id="dialog-title" class="dialog-title"></div>
      <div id="dialog-text" class="dialog-text"></div>
      <div class="dialog-btn-box">
        <button id="dialog-cancel-btn" class="dialog-btn">取消</button>
        <button id="dialog-confirm-btn" class="dialog-btn">确定</button>
      </div>
    </div>
  </div>
`;

  let dialogLeft = 0; // 鼠标距离 dialog 左边框的距离
  let dialogTop = 0; // 鼠标距离 dialog 上边框的距离

  function Dialog(options = {}) {

    dialogLeft = 0;
    dialogTop = 0;

    // 创建 dialog 元素
    const dialogContainer = document.createElement('div');
    dialogContainer.innerHTML = dialogTemplate;
    document.getElementsByTagName('body')[0].appendChild(dialogContainer);

    options = Object.prototype.toString.call(options) !== '[object Object]' ? {} : options;
    options.title = options.title || 'react';
    options.text = options.text || 'hello-world';
    options.size = options.size || 'normal' || 'small' || 'large'; // 定义 dialog 的大小
    options.top = options.top || '200px';
    options.left = options.left;

    const dialogContainerEl = document.getElementById('dialog-container');
    const dialogEl = document.getElementById('dialog');
    const dialogTitleEl = document.getElementById('dialog-title');
    const dialogTextEl = document.getElementById('dialog-text');
    const dialogCancelBtnEl = document.getElementById('dialog-cancel-btn');
    const dialogConfirmBtnEl = document.getElementById('dialog-confirm-btn');

    dialogTitleEl.innerText = options.title;
    dialogTextEl.innerText = options.text;

    // 确定按钮事件
    dialogConfirmBtnEl.addEventListener('click', function (e) {
      dialogContainerEl.style['display'] = 'none';
      dialogContainerEl.style['background-color'] = "#fff";
      // console.log('你点击了确定按钮');
    });

    // 取消按钮事件
    dialogCancelBtnEl.addEventListener('click', function (e) {
      dialogContainerEl.style['display'] = 'none';
      dialogContainerEl.style['background-color'] = "#fff";
      // console.log('你点击了取消按钮');
    });

    dialogContainerEl.style['background-color'] = "#888888";
    dialogContainerEl.style['display'] = "block";

    let width = '380px';
    switch (options.size) {
      case 'small': {
        width = '228px';
        break;
      }
      case 'normal': {
        width = '388px';
        break;
      }
      case 'large': {
        width = '488px';
        break;
      }
      default: {
        width = '380px';
      }
    }
    dialogEl.style['width'] = width;
    dialogEl.style['top'] = '200px';
    options.left ? (dialogEl.style['margin-left'] = options.left)
      : (dialogEl.style['margin'] = 'auto');

  }

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

