import ElementUI from '@/UI/ElementUI'
import CSS from './Page.module.css'

class Page extends ElementUI {
    constructor() {
        super()
        this.element.classList.add(CSS.Container)
        this.Hide()
    }
}

export default Page