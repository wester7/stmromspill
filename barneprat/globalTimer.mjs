
const FPS = 30;
const TIME_DELTA = 4000 / FPS;//var 1000

const listeners = new Set();
const persistentListeners = new Set();

let isPaused = false;

const onTick = () => {
    if (!isPaused) {
        persistentListeners.forEach(listener => {
            listener["update"]();
        });
        listeners.forEach(listener => {
            listener["update"]();
        });
    }
}

const addPersistentListener = (listener) => {
    persistentListeners.add(listener);
}

const addListener = (listener) => {
    listeners.add(listener);
}

const removeListener = (listener) => {
    listeners.delete(listener);
}

const toggleGlobalPause = () => {
    isPaused = !isPaused;
}

const removeAll = () => {
    listeners.clear();
}

const globalInterval = setInterval(onTick, TIME_DELTA);

export { addListener, removeListener, toggleGlobalPause, removeAll, TIME_DELTA, addPersistentListener }

