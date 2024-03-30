import { invoke } from '@tauri-apps/api/tauri'

namespace Api {
    type DesktopInfo = {
        left   : number
        right  : number
        top    : number
        bottom : number
        width  : number
        height : number
    }

    export async function GetDesktopInfo(): Promise<DesktopInfo[]> {
        return await invoke('get_desktop_info')
    }
}

export default Api