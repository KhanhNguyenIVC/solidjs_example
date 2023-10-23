import { createSignal, onMount, onCleanup, createEffect } from "solid-js";

const Lifecycles = () => {
    const [photos, setPhotos] = createSignal([])
    const [counter, setCounter] = createSignal(0)

    const getPhotos = () => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=8')
            .then((response) => response.json())
            .then((json) => { setPhotos(json); console.log(json) });
    }

    const timer = setInterval(() => {
        console.log('setInterval event', counter());
        setCounter(counter() + 1)
    }, 1000)

    onCleanup(() => {
        console.log('onCleanup');
        clearInterval(timer)
    });

    onMount(() => {
        getPhotos()
    })
    return (
        <>
            <h1>Lifecycles</h1>
            <div class="lifecycles-grid-container">
                <Index each={photos()}>{(photo, i) =>
                    <div>
                        <p class="txt-over">{photo().title}</p>
                        <img src={photo().url} width={200} height={200} /><br />
                    </div>
                }</Index>
            </div>

            <div class="for-card">
                <span class="text-focus">&#60;onCleanup&#62;</span><br />
                <a link href="/">Go to Home page</a><br />
                ⏲️counter: {counter()}
            </div>
        </>
    )
}

export default Lifecycles