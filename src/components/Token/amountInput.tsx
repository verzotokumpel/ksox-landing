import { PropFunction, component$ } from "@builder.io/qwik";

export interface AmountInputProps {
  // TODO: style?: JSX.CSSProperties;
  disabled: boolean;
  onInput?: PropFunction<(e: number) => void>;
}

export default component$((props: AmountInputProps) => {
  // TODO: let inputDOM!: HTMLInputElement;

  // TODO: const id = createUniqueId();

  return (
    <div
      class="bg-gray-1 grid grid-cols-[auto_1fr] items-center rounded-lg border-[1px] border-slate-600"
      // TODO: style={props.style}
    >
      <label
        // TODO: for={id}
        class="text-submit-sublabel text-gray-4 col-start-1 col-end-2 min-w-[50px] px-[8px] text-left"
      >
        Amount:
      </label>
      <div class="col-start-2 col-end-3 text-right">
        <input
          // TODO: id={id}
          class={
            "number_input w-full appearance-none bg-transparent p-1 px-3 text-right outline-none"
          }
          type="number"
          spellcheck={true}
          // TODO: ref={inputDOM}
          disabled={props.disabled}
          // TODO: onInput$={(e) => {
          //   props.onInput(e.target!.valueAsNumber);
          // }}
        />
      </div>
    </div>
  );
})