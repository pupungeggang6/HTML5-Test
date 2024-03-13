window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

function main() {
    canvas = document.getElementById('Screen')
    context = canvas.getContext('2d')

    window.addEventListener('mouseup', mouseUp, false)

    imageLoad()

    frameCurrent = Date.now()
    framePrevious = Date.now() - 16

    programInstance = requestAnimationFrame(loop)
}

function loop() {
    frameCurrent = Date.now()
    delta = frameCurrent - framePrevious

    if (scene === 'Title') {
        loopTitle()
    }

    framePrevious = Date.now()
    programInstance = requestAnimationFrame(loop)
}

function mouseUp(event) {
    let canvasRect = canvas.getBoundingClientRect()
    let x = event.clientX - canvasRect.left
    let y = event.clientY - canvasRect.top
    let button = event.button

    if (scene == 'Title') {
        mouseUpTitle(x, y, button)
    }
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(programInstance)
    }
}

function rightClick() {

}