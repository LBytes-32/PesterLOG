import PageManager  from "./PageManager"
import EventManager from "./EventManager"
import Titlebar     from "../UI/Generic/Titlebar"
import WelcomePage  from "../UI/Pages/Welcome/Welcome"

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