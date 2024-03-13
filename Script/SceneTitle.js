function loopTitle() {
    moveProjectile()
    displayTitle()
}

function displayTitle() {
    context.clearRect(0, 0, 1280, 720)
    context.font = '32px Opensans'
    context.fillText(`Num ${projectileList.length}`, 8, 32)
    
    for (let i = 0; i < projectileList.length; i++) {
        context.drawImage(img.smile, Math.floor(projectileList[i]['Position'][0] - 40), Math.floor(projectileList[i]['Position'][1] - 40))
    }
}

function moveProjectile() {
    for (let i = 0; i < projectileList.length; i++) {
        tempPosition = [projectileList[i]['Position'][0], projectileList[i]['Position'][1]]
        tempPosition[0] += projectileList[i]['Velocity'][0] * delta / 1000
        tempPosition[1] += projectileList[i]['Velocity'][1] * delta / 1000

        if (tempPosition[0] < 0) {
            tempPosition[0] = 1
            projectileList[i]['Velocity'][0] *= -1
        }

        if (tempPosition[0] > 1280) {
            tempPosition[0] = 1279
            projectileList[i]['Velocity'][0] *= -1
        }

        if (tempPosition[1] < 0) {
            tempPosition[1] = 1
            projectileList[i]['Velocity'][1] *= -1
        }

        if (tempPosition[1] > 720) {
            tempPosition[1] = 719
            projectileList[i]['Velocity'][1] *= -1
        }

        projectileList[i]['Position'] = [tempPosition[0], tempPosition[1]]
    }
}

function mouseUpTitle(x, y, button) {
    if (button === 0) {
        if (state === '') {
            createProjectile(x, y)
        }
    }
}

function createProjectile(x, y) {
    projectileList.push({'Position' : [x, y], 'Velocity' : [200 + Math.random() * 200, 200 + Math.random() * 200]})
}