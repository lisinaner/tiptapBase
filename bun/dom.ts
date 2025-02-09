import { JSDOM } from 'jsdom';
// 创建一个模拟的浏览器环境
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="editor"></div></body></html>');

// 将 jsdom 环境的 document 和 window 挂载到全局对象
global.document = dom.window.document;
global.window = dom.window;