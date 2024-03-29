import Dom from "@/Tools/Dom"
import EventManager from "@/Tools/EventManager"

class ElementUI {
    element  : HTMLDivElement
    eventman : EventManager
    
    constructor() {
        this.element = Dom.Create('div')
        this.eventman = new EventManager()
    }
    
    SetText(text: string) {
        this.element.innerText = text
    }
    
    AddStyle(style: string) {
        this.element.classList.add(style)
    }
    
    Show() {
        this.element.style.visibility = 'visible'
        this.element.style.display = ''
    }
    
    Hide() {
        this.element.style.display = 'none'
    }
    
    Ghost() {
        this.element.style.visibility = 'hidden'
    }
}

export default ElementUI