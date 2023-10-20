import { createSignal } from "solid-js";

const ControlFlow = () => {
    const [isLight, setIsLight] = createSignal(false)

    return (
        <>
            <h1>Control Flow</h1>
            <Show
                when={!isLight()}
                fallback={<div>
                    <button onClick={() => setIsLight(false)}>Turn off the light</button>
                    <img src="/images/bulb-on.png" alt="The light on" width={50} height={70}/>
                </div>}
            >
                <button onClick={() => setIsLight(true)}>Turn on the light</button>
                <img src="/images/bulb-off.png" alt="The light off" width={50} height={70}/>
            </Show>
        </>
    )
}

export default ControlFlow