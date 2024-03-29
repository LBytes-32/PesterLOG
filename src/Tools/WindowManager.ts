import PageManager  from "@/Tools/PageManager"
import EventManager from "@/Tools/EventManager"
import Titlebar     from "@/UI/Generic/Titlebar/Titlebar"
import WelcomePage  from "@/UI/Pages/Welcome/Welcome"
import SettingsPage from "@/UI/Pages/Settings/Settings"

class WindowManager {
    pageman  : PageManager
    eventman : EventManager
    titlebar : Titlebar
    
    static Dispatch(event: string, detail: {}) {
        document.dispatchEvent(new CustomEvent(event, { detail: detail }))
    }
    
    constructor() {
        this.eventman = new EventManager()
        this.titlebar = new Titlebar()
        
        this.pageman = new PageManager(
            {
                'welcome': new WelcomePage(),
                'settings': new SettingsPage()
            },
            'welcome'
        )
        
        this.eventman.AddEvent(document, 'set-page', (e) => this.SetPageEvent(e))
    }
    
    private SetPageEvent(e: Event) {
        let page = (e as CustomEvent).detail.page
        console.log(page)
        this.pageman.Navigate(page)
    }
}

export default WindowManager