import WindowManager from '@/Tools/WindowManager'
import Dom from '@/Tools/Dom'
import Page from '@/UI/Pages/Page'
import CSS from './Welcome.module.css'

class WelcomePage extends Page {
    
    bigButton: HTMLButtonElement
    
    constructor() {
        super()
        this.bigButton = Dom.Create('button', 'TEST THE PESTER!', CSS.PesterButton)
        
        this.element.appendChild(this.bigButton)
        
        this.eventman.AddEvent(this.element, 'click', () => WindowManager.Dispatch('show-pester-prompt', {}))
    }
}

export default WelcomePage