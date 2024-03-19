
class EventManager {
    private listeners: { [key: string]: { listener: EventListener, element: HTMLElement } }
    
    constructor() {
        this.listeners = {}
    }
    
    AddEventOn(element: HTMLElement, event: string, listener: EventListener) {
        this.listeners[event] = { listener: listener, element: element }
        element.addEventListener(event, listener)
    }
    
    RemoveEvent(event: string) {
        const listener = this.listeners[event]
        
        if (listener) {
            listener.element.removeEventListener(event, listener.listener)
            delete this.listeners[event]
        }
    }
    
    RemoveAllEvents() {
        for (let event in this.listeners) {
            this.RemoveEvent(event)
        }
    }
}

export default EventManager