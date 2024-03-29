import { appWindow } from "@tauri-apps/api/window"
import ElementUI     from "@/UI/ElementUI"
import Dom           from "@/Tools/Dom"
import CSS           from "./Titlebar.module.css"

class Titlebar extends ElementUI {
    closeButton : HTMLButtonElement
    textArea    : HTMLSpanElement
    
    constructor() {
        super()
        this.AddStyle(CSS.Titlebar)
        
        this.textArea = Dom.Create('span', 'PesterLOG', CSS.TextArea)
        this.element.appendChild(this.textArea)
        
        this.closeButton = Dom.Create('button', '&times;', CSS.CloseButton)
        this.element.appendChild(this.closeButton)
        
        this.eventman.AddEvent(this.textArea, 'mousedown', () => {
            appWindow.startDragging()
        })
        
        this.eventman.AddEvent(this.closeButton, 'click', () => {
            appWindow.close()
        })
    }
}

export default Titlebar