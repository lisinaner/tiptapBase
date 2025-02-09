import {
    EditorState, Plugin, PluginKey, Transaction,
  } from '@tiptap/pm/state'



  import { Editor } from '@tiptap/core';

// 初始化 Tiptap 编辑器
const editor = new Editor({
    extensions: [
    
    ],
    content: '<p>Hello, World!</p>', // 初始内容
  });


