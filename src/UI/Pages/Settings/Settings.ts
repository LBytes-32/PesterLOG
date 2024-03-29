import WindowManager from "@/Tools/WindowManager"
import Dom from "@/Tools/Dom"
import Page from "@/UI/Pages/Page"

class SettingsPage extends Page {
    constructor() {
        super()
        this.element.appendChild(Dom.Create('div', 'Welcome to settings'))
        this.eventman.AddEvent(this.element, 'click', () => WindowManager.Dispatch('set-page', { page: 'welcome' }))
    }
}

export default SettingsPage