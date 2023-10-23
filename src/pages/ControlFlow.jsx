import { For, createSignal } from "solid-js";

const ControlFlow = () => {
    const [isLight, setIsLight] = createSignal(false)
    const [jsFrameWorks, setJsFrameWorks] = createSignal([
        { id: 1, name: 'Vanilla JS', img: '/images/vanilla.png' },
        { id: 2, name: 'Solid JS', img: '/images/solid.svg' },
        { id: 3, name: 'Vue JS', img: '/images/vue.svg' },
        { id: 4, name: 'React JS', img: '/images/react.svg' }
    ])

    return (
        <>
            <h1>Control Flow</h1>
            <Show
                when={!isLight()}
                fallback={<div>
                    <button onClick={() => setIsLight(false)}>Turn off the light</button>
                    <img src="/images/bulb-on.png" alt="The light on" width={50} height={70} />
                </div>}
            >
                <button onClick={() => setIsLight(true)}>Turn on the light</button>
                <img src="/images/bulb-off.png" alt="The light off" width={50} height={70} />
            </Show>

            <div class="for-card">
                <span class="text-focus">&#60;For&#62;</span> component
                <For each={jsFrameWorks()}>{(jsFrameWork, i) =>
                    <div class="grid-view">
                        <span style={'width: 330px'}>{i() + 1}. {jsFrameWork.name}</span><image width={25} height={20} src={jsFrameWork.img} />
                    </div>
                }</For>
            </div>

            <style>{`
                .text-focus {
                    color: #e17f7d;
                }
                .for-card {
                    text-align: left;
                    border: 1px solid #ffffff;
                    margin-top: 1rem;
                    padding: 10px;
                }
                
                .grid-view {
                    display: grid;
                    grid-template-columns: 85px auto;
                }
                .grid-view:first-of-type {
                    margin-top: 7px;
                }
            `}</style>
        </>
    )
}

export default ControlFlow