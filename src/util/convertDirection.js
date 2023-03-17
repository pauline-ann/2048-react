// Converts key code for WASD and arrow keys to integer from 0 - 3
const convertDirection = (keyCode) => {
    switch (keyCode) {
        case 65:
            return 0
        case 37:
            return 0
        case 87:
            return 1
        case 38:
            return 1
        case 68:
            return 2
        case 39:
            return 2
        case 83:
            return 3
        case 40:
            return 3
    }
}

export { convertDirection }