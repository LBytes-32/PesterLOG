import WindowManager from '@/Tools/WindowManager'
import Dom from '@/Tools/Dom'
import Page from '@/UI/Pages/Page'

class WelcomePage extends Page {
    constructor() {
        super()
        this.element.appendChild(Dom.Create('button', 'Click to view settings!'))
        
        this.eventman.AddEvent(this.element, 'click', () => WindowManager.Dispatch('set-page', { page: 'settings' }))
    }
}

export default WelcomePage