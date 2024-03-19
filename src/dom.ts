
namespace Dom {
    export function Div(text: string): HTMLDivElement {
        const div = document.createElement('div')
        div.textContent = text
        document.body.appendChild(div)
        return div
    }
}

export default Dom