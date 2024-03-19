import Titlebar from '../UI/Generic/Titlebar'
import Page from '../UI/Pages/Page'

type PageMap = { [key: string]: Page }

class PageManager {
    pages: PageMap
    currentPage: Page
    titlebar: Titlebar
    
    constructor(pages: PageMap, current: string) {
        this.pages = pages
        this.currentPage = this.GetPage(current)
        this.titlebar = new Titlebar()
    }
    
    GetPage(pageName: string) {
        return this.pages[pageName]
    }
    
    Navigate(pageName: string) {
        const page = this.pages[pageName]
        this.currentPage.Hide()
        
        if (page) {
            page.Show()
            this.currentPage = page
        }
    }
    
    ShowTitlebar() {
        this.titlebar.Show()
    }
    
    HideTitlebar() {
        this.titlebar.Hide()
    }
}

export default PageManager