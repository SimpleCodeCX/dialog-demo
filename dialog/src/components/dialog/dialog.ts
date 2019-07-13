import './dialog.scss';
import { dialogTemplate } from './dialog.template';

// 定义 Dialog 配置参数
interface DialogOptions {
  title?: string;
  text?: string;
  size?: string; // 'normal' || 'small' || 'large';
  top?: string;
  left?: string;
}

export class Dialog {

  dialogLeft = 0; // 鼠标距离 dialog 左边框的距离
  dialogTop = 0; // 鼠标距离 dialog 上边框的距离
  options: DialogOptions;
  dialogElement: HTMLElement;

  constructor(options: DialogOptions = {}) {
    this.options = Object.prototype.toString.call(options) !== '[object Object]' ? {} : options;
    this.options.title = this.options.title || 'react';
    this.options.text = this.options.text || 'hello-world';
    this.options.size = this.options.size || 'normal' || 'small' || 'large'; // 定义 dialog 的大小
    this.options.top = this.options.top || '220px';
    this.options.left = this.options.left;
    this.initDialog();
  }

  /**
   * 初始化 dialog
   */
  initDialog() {
    // 创建 dialog 元素
    this.dialogElement = document.createElement('div');
    this.dialogElement.setAttribute('id', 'simple-dialog');
    this.dialogElement.innerHTML = dialogTemplate;
    document.getElementsByTagName('body')[0].appendChild(this.dialogElement);

    const dialogContainerEl = document.getElementById('dialog-container');
    const dialogEl = document.getElementById('dialog');
    const dialogTitleEl = document.getElementById('dialog-title');
    const dialogTextEl = document.getElementById('dialog-text');
    const dialogCancelBtnEl = document.getElementById('dialog-cancel-btn');
    const dialogConfirmBtnEl = document.getElementById('dialog-confirm-btn');

    dialogTitleEl.innerText = this.options.title;
    dialogTextEl.innerText = this.options.text;

    // 绑定确定按钮事件
    dialogConfirmBtnEl.addEventListener('click', (e) => {
      dialogContainerEl.style['display'] = 'none';
      dialogContainerEl.style['background-color'] = "#fff";
      document.getElementsByTagName('body')[0].removeChild(this.dialogElement);
    });

    // 绑定取消按钮事件
    dialogCancelBtnEl.addEventListener('click', (e) => {
      dialogContainerEl.style['display'] = 'none';
      dialogContainerEl.style['background-color'] = "#fff";
      document.getElementsByTagName('body')[0].removeChild(this.dialogElement);
    });

    // 拖拽开始
    dialogEl.addEventListener('dragstart', (e) => {
      let boundingClientRect = e.target['getBoundingClientRect']();
      this.dialogLeft = e.clientX - boundingClientRect.x;
      this.dialogTop = e.clientY - boundingClientRect.y;
    });

    // 拖拽结束
    dialogEl.addEventListener('dragend', (e) => {
      const dialogEl = document.getElementById('dialog');
      dialogEl.style['margin-left'] = `${e.clientX - this.dialogLeft}px`;
      dialogEl.style['top'] = `${e.clientY - this.dialogTop}px`;
    });

    dialogContainerEl.style['background-color'] = "#888888";

    let width = '380px';

    const screenWidth = screen.width; // 获取屏幕宽度
    const isMobile = screenWidth < 400; // 是否为小屏幕设备

    switch (this.options.size) {
      case 'small': {
        width = isMobile ? `${screenWidth - 60}px` : '228px';
        break;
      }
      case 'normal': {
        width = isMobile ? `${screenWidth - 40}px` : '388px';
        break;
      }
      case 'large': {
        width = isMobile ? `${screenWidth - 20}px` : '488px';
        break;
      }
      default: {
        width = isMobile ? `${screenWidth - 40}px` : '388px';
      }
    }

    dialogEl.style['width'] = width;
    dialogEl.style['top'] = this.options.top;

    this.options.left ? (dialogEl.style['margin-left'] = this.options.left)
      : (dialogEl.style['margin'] = 'auto');

  }

  open() {
    let dialogContainerEl = document.getElementById('dialog-container');
    dialogContainerEl.style['display'] = "block";
  }

  close() {
    document.getElementsByTagName('body')[0].removeChild(this.dialogElement);
  }

}

