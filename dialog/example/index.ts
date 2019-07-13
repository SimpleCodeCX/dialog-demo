import { Dialog } from '../src/components/components.module';
import './style.scss';

const clickFns = {
  'click1': click1,
  'click2': click2,
  'click3': click3,
  'click4': click4,
  'click5': click5,
  'click6': click6,
  'click7': click7,
  'click8': click8,
  'click9': click9,
  'click10': click10
}

const btnEls = document.querySelectorAll('.demo-box button');
for (let i = 0, len = btnEls.length; i < len; i++) {
  btnEls[i].addEventListener('click', clickFns[`click${i + 1}`]);
}

function click1(e) {
  // 不传参数
  const dialog = new Dialog();
  dialog.open();
}

function click2(e) {
  const dialog = new Dialog({
    title: 'dialog2 title',
    text: 'this is dialog2'
  });
  dialog.open();
}

function click3(e) {
  // 参数不是obj类型
  const dialog = new Dialog(null);
  dialog.open();
}

function click4(e) {
  const dialog = new Dialog({
    title: 'normal dialog4',
    text: 'this is dialog4',
    size: 'normal'
  });
  dialog.open();
}

function click5(e) {
  const dialog = new Dialog({
    title: 'small dialog5',
    text: 'this is dialog5',
    size: 'small'
  });
  dialog.open();
}

function click6(e) {
  const dialog = new Dialog({
    title: 'large dialog6',
    text: 'this is dialog6',
    size: 'large'
  });
  dialog.open();
}

function click7(e) {
  const dialog = new Dialog({
    title: 'large dialog7',
    text: 'this is dialog7',
    left: '100px'
  });
  dialog.open();
}

function click8(e) {
  setTimeout(() => {
    const dialog = new Dialog({
      title: '通过定时器打开和关闭 dialog8',
      text: 'this is dialog8'
    });
    dialog.open();
    setTimeout(() => {
      dialog.close();
    }, 500);
  }, 200);
}

function click9(e) {
  const dialog = new Dialog({
    title: 'dialog9 title ',
    text: 'this is dialog9. this is dialog9. this is dialog9. this is dialog9. this is dialog9. this is dialog9. this is dialog9. this is dialog9.'
  });
  dialog.open();
}

function click10(e) {
  const dialog = new Dialog({
    title: 'dialog10 title dialog10 title dialog10 title dialog10 title',
    text: 'this is dialog10'
  });
  dialog.open();
}
