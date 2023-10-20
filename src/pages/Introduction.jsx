import { HelloWorldComponent } from "../components/HelloWorldComponent";
import { createSignal, createEffect, createMemo } from "solid-js";

const Introduction = () => {
    const HelloWorld = () => {
        return <div>Hello World!</div>
    }

    const [count, setCount]     = createSignal(0)
    const [countSd, setCountSd] = createSignal(0)

    const countMemo = createMemo(() => {
        console.log('Memos event')
        return count() + 1
    })

    createEffect(() => {
        console.log('Effect event: onChange any signal')
        console.log('count', count())
        console.log('countSd', countSd())
    })

    return (
        <>
            <h1>This is a Header</h1>
            <HelloWorld />
            <HelloWorldComponent />
            <button style={'margin-top: 1rem'} onClick={() => setCount(count() + 1)}>
                count is {count()}
            </button>
            <button style={'margin-top: 1rem;margin-left: 1rem;'} onClick={() => setCountSd(c => c + 1)}>
                second count is {countSd()}
            </button>
            <p>Memos: {countMemo()}</p>
            <p>Memos: {countMemo()}</p>
            <p>Memos: {countMemo()}</p>
        </>
    )
}

export default Introduction