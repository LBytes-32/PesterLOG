
namespace Dom {
    
    export function Create<K extends keyof HTMLElementTagNameMap>(tag: K, text?: string, style?: string): HTMLElementTagNameMap[K] {
        const element = document.createElement(tag)
        
        element.innerHTML = text ? text : ""
        element.className = style!
        document.body.appendChild(element)
        
        return element
    }
}

export default Dom