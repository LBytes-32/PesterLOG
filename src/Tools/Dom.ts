
namespace Dom {
    
    export function Create<K extends keyof HTMLElementTagNameMap>(tag: K, text?: string, style?: string): HTMLElementTagNameMap[K] {
        const element = document.createElement(tag)
        
        element.innerHTML = text ? text : ""
        element.className = style!
        document.body.appendChild(element)
        
        return element
    }
    
    export function Button(text: string, style?: string): HTMLButtonElement {
        return Create('button', text, style)
    }
    
    export function Input(style?: string): HTMLInputElement {
        return Create('input', '', style)
    }
}

export default Dom