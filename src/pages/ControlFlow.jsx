import { For, Index, Switch, Match, createSignal } from "solid-js";
import "./ControlFlow.css";

const ControlFlow = () => {
    const [isLight, setIsLight] = createSignal(false)
    const [jsFrameWorks, setJsFrameWorks] = createSignal([
        { name: 'Vanilla JS', img: '/images/vanilla.png' },
        { name: 'Solid JS', img: '/images/solid.svg' },
        { name: 'Vue JS', img: '/images/vue.svg' },
        { name: 'React JS', img: '/images/react.svg' }
    ])
    const [bmis] = createSignal([
        { name: 'Underweight', score: '<18.5', img: '/images/underweight.png' },
        { name: 'Healthy', score: '18.5-24.9', img: '/images/healthy.png' },
        { name: 'Overweight', score: '25-29.9', img: '/images/overweight.png' },
        { name: 'Obesity', score: '>30', img: '/images/obesity.png' },
    ])
    const [weight, setWeighht] = createSignal('')
    const [height, setHeight] = createSignal('')
    const [bmi, setBmi] = createSignal(null)
    const [bmiScore, setBmiScore] = createSignal(null)
    const [isErrorInput, setIsErrorInput] = createSignal(false)

    const getBMI = () => {
        if (weight() === '' || height() === '') {
            setIsErrorInput(true);
            return;
        }
        setIsErrorInput(false);
        setBmiScore(weight() / (height() * height()))
        var bmiTemp = bmiScore()

        switch (true) {
            case (bmiTemp < 18.5):
                // Underweight
                setBmi(0)
                break
            case (bmiTemp >= 18.5 && bmiTemp <= 24.9):
                // Normal weight
                setBmi(1)
                break
            case (bmiTemp >= 25 && bmiTemp <= 29.9):
                // Overweight
                setBmi(2)
                break
            case (bmiTemp >= 30):
                //Obesity
                setBmi(3)
                break
            default:
                setBmi(null)
        }
    }

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

            <div class="for-card">
                <span class="text-focus">&#60;Switch&#62;</span> component <br />
                Get Body Mass Index (BMI)
                <div style={'margin-top:7px'}>
                    <label style={'margin-top: 5px'} for="username">Weight (kg)</label><br />
                    <input type="text" onChange={(e) => setWeighht(e.target.value)} /><br />
                    <label for="username">Height (m)</label><br />
                    <input type="text" onChange={(e) => setHeight(e.target.value)} /><br />
                    <div style={isErrorInput() ? '' : 'display:none'}><span class="error-text">👉Please enter the weight & the height.</span></div>
                    <button style={'margin-top:7px'} onClick={() => getBMI()}>Excute</button>
                </div>
                <div>
                    <div className="header-body-mass">
                        BODY MASS INDEX
                    </div>
                    <div class="grid-container">
                        <Index each={bmis()}>{(bmiEle, i) =>
                            <div class={bmi() === i ? 'active-body-mass' : ''}>
                                <img src={bmiEle().img} width={92} height={200} />
                                <div class="card-body-mass">{bmiEle().score}</div>
                                <div class="text-body-mass">{bmiEle().name}</div>
                            </div>
                        }</Index>
                    </div>
                    <br />
                </div>
                <Switch>
                    <Match when={bmi() === 0}>👉Your BMI is {bmiScore().toFixed(2)} You're underweight.</Match>
                    <Match when={bmi() === 1}>👉Your BMI is {bmiScore().toFixed(2)} You're healthy.</Match>
                    <Match when={bmi() === 2}>👉Your BMI is {bmiScore().toFixed(2)} You're overweight.</Match>
                    <Match when={bmi() === 3}>👉Your BMI is {bmiScore().toFixed(2)} You're obesity</Match>
                </Switch>
            </div>
        </>
    )
}

export default ControlFlow