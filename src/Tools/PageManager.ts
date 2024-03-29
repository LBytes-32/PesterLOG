import Page from '@/UI/Pages/Page'

type PageMap = { [key: string]: Page }

class PageManager {
    pages        : PageMap
    currentPage? : Page
    
    constructor(pages: PageMap, current: string) {
        this.pages = pages
        this.Navigate(current)
    }
    
    GetPage(pageName: string) {
        return this.pages[pageName]
    }
    
    Navigate(pageName: string): void {
        if (this.currentPage)
            this.currentPage.Hide()
        
        const page = this.GetPage(pageName)
        
        if (page) {
            page.Show()
            this.currentPage = page
        }
    }
}

export default PageManager