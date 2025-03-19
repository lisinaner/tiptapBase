import { GlobalRegistrator } from "@happy-dom/global-registrator";
GlobalRegistrator.register();
import {html_beautify} from "js-beautify"
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import UniqueID from "@tiptap/extension-tiptap-unique-id"
import { getDebugJSON } from "@tiptap/core";
document.body.innerHTML = `<div id="element"></div>`;
// console.log(UniqueID)
const element=document.querySelector('#element');

if(element){
    let editor=new Editor({
        element:element,
        extensions: [StarterKit,  UniqueID.configure({
            types: ['heading', 'paragraph'],
          })],
        content: `
        
         <ul>
          <li>This is a bullet list.</li>
          <li>And it has three list items.</li>
          <li>Here is the third one.</li>
        </ul>
        `,
      })
     
      setTimeout(()=>{
        console.log(html_beautify(element.innerHTML))
      },0)
    // 
    console.log(getDebugJSON(editor.state.doc),'调试值')
    editor.commands.setTextSelection(3)
    // editor.commands.sinkListItem("listItem")
    editor.chain().focus().splitListItem('listItem').run()
     setTimeout(()=>{
      console.log(html_beautify(element.innerHTML))
    },10)
    
      

}




