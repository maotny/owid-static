const embedSnippet = () => {
const link = document.createElement('link')
link.type = 'text/css'
link.rel = 'stylesheet'
link.href = 'https://ourworldindata.org/assets/commons.css'
document.head.appendChild(link)

let loadedScripts = 0;
const checkReady = () => {
    loadedScripts++
    if (loadedScripts === 4)
        window.MultiEmbedderSingleton.embedAll()
}

const coreScripts = [
    'https://polyfill.io/v3/polyfill.min.js?features=es6,fetch,URL,IntersectionObserver,IntersectionObserverEntry,ResizeObserver',
    'https://ourworldindata.org/assets/commons.js',
    'https://ourworldindata.org/assets/vendors.js',
    'https://ourworldindata.org/assets/owid.js'
]

coreScripts.forEach(url => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = checkReady
    script.src = url
    document.head.appendChild(script)
})
}
embedSnippet()
