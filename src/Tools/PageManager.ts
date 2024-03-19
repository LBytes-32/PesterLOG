import Page from '../UI/Pages/Page'

type PageMap = { [key: string]: Page }

class PageManager {
    pages       : PageMap
    currentPage : Page
    
    constructor(pages: PageMap, current: string) {
        this.pages = pages
        this.currentPage = this.GetPage(current)
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
}

export default PageManager