import WindowManager from "@/Tools/WindowManager"
import { appWindow } from "@tauri-apps/api/window"


namespace WindowEvents {
    export function SetPage(winman: WindowManager, e: Event) {
        winman.titlebar.Show()
        let page = (e as CustomEvent).detail.page
        winman.pageman.Navigate(page)
    }
    
    export function ShowPesterPrompt(winman: WindowManager, e: Event) {
        appWindow.center()
        winman.pageman.Navigate('pester')
        winman.titlebar.Hide()
    }
}

export default WindowEvents