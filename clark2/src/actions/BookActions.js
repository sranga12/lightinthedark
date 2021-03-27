import Dispatcher from "../Dispatcher";

export function openBook(book_number) {
    Dispatcher.dispatch({
        type: "OPEN_BOOK",
        book_number,
    });
}

export function lights_change(lights_on){
    Dispatcher.dispatch({
        type:"LIGHTS_CHANGE",
        lights_on,
    })
}
