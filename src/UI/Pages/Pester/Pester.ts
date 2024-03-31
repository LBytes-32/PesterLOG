import WindowManager from "@/Tools/WindowManager"
import Dom from "@/Tools/Dom"
import Page from "@/UI/Pages/Page"
import CSS from "./Pester.module.css"

class PesterPage extends Page {
    
    inputField  : HTMLInputElement
    enterButton : HTMLButtonElement
    backButton  : HTMLButtonElement
    
    constructor() {
        super()
        this.element.classList.add(CSS.Container)
        
        this.inputField  = Dom.Input(CSS.InputBox)
        this.backButton  = Dom.Button('Back', CSS.Button)
        this.enterButton = Dom.Button('Submit', CSS.Button)
        
        this.element.appendChild(this.inputField)
        this.element.appendChild(this.enterButton)
        this.element.appendChild(this.backButton)
        
        this.eventman.AddEvent(this.backButton, 'click', () => this.HidePesterPrompt())
    }
    
    HidePesterPrompt() {
        WindowManager.Dispatch('hide-pester-prompt', {})
        WindowManager.Dispatch('set-page', { page: 'welcome' })
    }
}

export default PesterPage