import { component$ } from "@builder.io/qwik"

interface SpacingProps {
  class: string
}

export default component$((props: SpacingProps) => {
  return <div class={props.class} />;
})