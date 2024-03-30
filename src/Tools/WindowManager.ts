import PageManager  from "@/Tools/PageManager"
import EventManager from "@/Tools/EventManager"
import Titlebar     from "@/UI/Generic/Titlebar/Titlebar"

import WelcomePage  from "@/UI/Pages/Welcome/Welcome"
import SettingsPage from "@/UI/Pages/Settings/Settings"
import WindowEvents from "@/Tools/WindowEvents"
import PesterPage   from "@/UI/Pages/Pester/Pester"

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
                'welcome'  : new WelcomePage(),
                'settings' : new SettingsPage(),
                'pester'   : new PesterPage()
            },
            'welcome'
        )
        
        const EVENTS = [
            { name: 'set-page',            handler: WindowEvents.SetPage },
            { name: 'show-pester-prompt',  handler: WindowEvents.ShowPesterPrompt },
            { name: 'hide-pester-prompt',  handler: WindowEvents.HidePesterPrompt }
        ]
        
        for (let event of EVENTS)
            this.eventman.AddEvent(document, event.name, (e) => event.handler(this, e))
    }
}

export default WindowManager