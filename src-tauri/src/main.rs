// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use winit::event_loop::EventLoop;
use serde::Serialize;

#[derive(Serialize)]
struct DesktopInfo {
    top    : i32,
    bottom : i32,
    left   : i32,
    right  : i32,
    width  : u32,
    height : u32,
}

#[tauri::command]
fn get_desktop_info() -> Vec<DesktopInfo> {
    let event_loop = EventLoop::new();
    let mut desktop_infos = Vec::new();
    
    for monitor in event_loop.available_monitors() {
        let position = monitor.position();
        let size     = monitor.size();
        
        let desktop_info = DesktopInfo {
            top    : position.y,
            bottom : position.y + size.height as i32,
            left   : position.x,
            right  : position.x + size.width as i32,
            width  : size.width,
            height : size.height,
        };
        
        desktop_infos.push(desktop_info);
    }
    
    return desktop_infos;
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_desktop_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
