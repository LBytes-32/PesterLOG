import WindowManager from "@/Tools/WindowManager"
import Api from "@/Tools/Api"
import { LogicalPosition, LogicalSize, appWindow } from "@tauri-apps/api/window"

namespace WindowEvents {
    export function SetPage(winman: WindowManager, e: Event) {
        winman.titlebar.Show()
        let page = (e as CustomEvent).detail.page
        winman.pageman.Navigate(page)
    }
    
    export async function ShowPesterPrompt(winman: WindowManager, e: Event) {
        
        let desktopInfo    = await Api.GetDesktopInfo()
        let windowPosition = await appWindow.innerPosition()
        
        for (let monitor of desktopInfo) {
            
            const in_hor_bounds = windowPosition.x >= monitor.left && windowPosition.x <= monitor.right
            const in_ver_bounds = windowPosition.y >= monitor.top  && windowPosition.y <= monitor.bottom
            
            if (in_hor_bounds && in_ver_bounds) {
                
                const middle   = new LogicalPosition((monitor.width) / 2 + monitor.left, monitor.top)
                const size     = new LogicalSize(900, 40)
                const position = new LogicalPosition(middle.x - size.width / 2, middle.y - size.height / 2)
                
                winman.titlebar.Hide()
                winman.pageman.Navigate("pester")
                
                await appWindow.hide()
                await appWindow.setSize(size)
                await appWindow.show()
                await appWindow.setPosition(position)
                
                break
            }
        }
    }
    
    export async function HidePesterPrompt(winman: WindowManager, e: Event) {
        await appWindow.setSize(new LogicalSize(450, 600));
        await appWindow.center();
    }
}

export default WindowEvents