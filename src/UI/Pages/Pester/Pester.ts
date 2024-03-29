import WindowManager from "@/Tools/WindowManager"
import Dom from "@/Tools/Dom"
import Page from "@/UI/Pages/Page"

class PesterPage extends Page {
    constructor() {
        super()
        this.element.appendChild(Dom.Create('a', 'You\'ve been pestered! Back to home'))
        this.eventman.AddEvent(this.element, 'click', () => WindowManager.Dispatch('set-page', { page: 'welcome' }))
    }
}

export default PesterPage