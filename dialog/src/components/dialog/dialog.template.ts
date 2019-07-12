// dialog 元素的 html 模板
export const dialogTemplate = `
  <div id="dialog-container" class="dialog-container">
    <div id="dialog" class="dialog" draggable="true" >
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