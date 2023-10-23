import { mergeProps } from "solid-js";

export function HelloWorldComponent(props) {
    const merged = mergeProps({ name: 'SolidJS' }, props)
    const style = { "background-color": "#2c4f7c", color: "#FFF" };

    return <div style={style}>Hello World Component<br />
    <span>Hi {merged.name}</span></div>
}