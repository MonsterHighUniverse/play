if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/studio/sw.js', {
            scope: '/studio/'
        })
    })
}