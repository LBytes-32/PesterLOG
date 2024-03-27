import PageManager  from "@/Tools/PageManager"
import EventManager from "@/Tools/EventManager"
import Titlebar     from "@/UI/Generic/Titlebar/Titlebar"
import WelcomePage  from "@/UI/Pages/Welcome/Welcome"

class WindowManager {
    pageman  : PageManager
    eventman : EventManager
    titlebar : Titlebar
    
    constructor() {
        this.pageman = new PageManager(
            {
                'welcome': new WelcomePage()
            },
            'welcome'
        )
        this.eventman = new EventManager()
        
        this.titlebar = new Titlebar()
    }
}

export default WindowManager