import { appWindow } from "@tauri-apps/api/window"
import UI from "../UI"
import CSS from "./Titlebar.module.css"
import Dom from "../../Tools/Dom"

class Titlebar extends UI {
    closeButton : HTMLButtonElement
    textArea    : HTMLSpanElement
    
    constructor() {
        super()
        this.AddStyle(CSS.Titlebar)
        
        this.textArea = Dom.Create('span', 'PesterLOG', CSS.TextArea)
        this.element.appendChild(this.textArea)
        
        this.closeButton = Dom.Create('button', '&times;', CSS.CloseButton)
        this.element.appendChild(this.closeButton)
        
        this.eventman.AddEventOn(this.textArea, 'mousedown', () => {
            appWindow.startDragging()
        })
        
        this.eventman.AddEventOn(this.closeButton, 'click', () => {
            appWindow.close()
        })
    }
}

export default Titlebar