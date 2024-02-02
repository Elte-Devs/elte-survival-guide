import { type Component, createSignal } from 'solid-js'

export const Switch: Component = () => {
  const [on, setOn] = createSignal(false)

  function click() {
    setOn(!on())
  }

  return (
    <button class="switch" onClick={click}>{on() ? 'ON' : 'OFF'}</button>
  )
}
