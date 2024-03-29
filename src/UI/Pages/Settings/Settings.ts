import WindowManager from "@/Tools/WindowManager"
import Dom from "@/Tools/Dom"
import Page from "@/UI/Pages/Page"

class SettingsPage extends Page {
    pesterTest: HTMLButtonElement
    backToHome: HTMLButtonElement
    
    constructor() {
        super()
        this.pesterTest = Dom.Create('button', 'TEST THE PESTER!')
        this.backToHome = Dom.Create('button', 'Back to home')
        
        this.element.appendChild(Dom.Create('div', 'Welcome to settings'))
        this.element.appendChild(this.pesterTest)
        this.element.appendChild(this.backToHome)
        
        this.eventman.AddEvent(this.backToHome, 'click', () => WindowManager.Dispatch('set-page', { page: 'welcome' }))
        this.eventman.AddEvent(this.pesterTest, 'click', () => WindowManager.Dispatch('show-pester-prompt', {}))
    }
}

export default SettingsPage