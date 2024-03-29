import WindowManager from "@/Tools/WindowManager"
import { LogicalPosition, LogicalSize, appWindow } from "@tauri-apps/api/window"

namespace WindowEvents {
    export function SetPage(winman: WindowManager, e: Event) {
        winman.titlebar.Show()
        let page = (e as CustomEvent).detail.page
        winman.pageman.Navigate(page)
    }
    
    export async function ShowPesterPrompt(winman: WindowManager, e: Event) {
        winman.pageman.Navigate('pester');
        winman.titlebar.Hide();
        await appWindow.setSize(new LogicalSize(800, 40));
        await appWindow.center();
        let x = (await appWindow.innerPosition()).x;
        await appWindow.setPosition(new LogicalPosition(x, 0));
    }
    
    export function HidePesterPrompt(winman: WindowManager, e: Event) {
        winman.pageman.Navigate('welcome')
        winman.titlebar.Show()
    }
}

export default WindowEvents