import router from "@/router/index.js";

export const buttonStyle = {
    BLUE: 0,
    YELLOW: 1,
    WHITE: 2,
    PAGINATE: 3
}

export const buttonClasses = ['blue', 'yellow', 'white', "paginate"]

export function routeTo(path) {
    return router.push(path)
}