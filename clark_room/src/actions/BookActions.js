import Dispatcher from "../Dispatcher";

export function openBook(book_number) {
    Dispatcher.dispatch({
        type: "OPEN_BOOK",
        book_number,
    });
}
