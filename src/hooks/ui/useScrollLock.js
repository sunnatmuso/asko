export function useScrollLock(burger){
    const html = document.getElementsByTagName('html')[0]
    burger ? html.style.overflowY = 'hidden' : html.style.overflowY = 'scroll'
}
