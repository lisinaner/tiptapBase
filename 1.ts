import { GlobalRegistrator } from "@happy-dom/global-registrator";
GlobalRegistrator.register();
import {html_beautify} from "js-beautify"
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
document.body.innerHTML = `<div id="element"></div>`;
console.log(Editor)
const element=document.querySelector('#element');

if(element){
    let editor=new Editor({
        element:element,
        extensions: [StarterKit],
        content: '<h1> <b>Hello</b> World1!</h1>',
      })
      console.log(html_beautify(element.innerHTML))
}




