
import "./dom"
import { Editor } from '@tiptap/core';




// 初始化 Tiptap 编辑器
const editor = new Editor({
  extensions: [
    
  ],
  content: '<p>Hello, World!</p>', // 初始内容
});

// 获取初始的文档内容
console.log('Initial Document:', editor.getJSON());

// 创建一个事务，插入新的文本
const transaction = editor.state.tr.insertText(' This is a new text!', editor.state.doc.content.size);
editor.view.dispatch(transaction);

// 查看修改后的文档内容
console.log('Updated Document:', editor.getJSON());

// 获取当前文档内容并输出 HTML 格式
const htmlContent = editor.getHTML();
console.log('Editor HTML Output:', htmlContent);
