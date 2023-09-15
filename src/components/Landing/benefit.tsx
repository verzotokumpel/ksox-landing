import { Slot, component$ } from "@builder.io/qwik";

interface BenefitProps {
  id?: string;
  class?: string;
}

export default component$((props: BenefitProps) => {
  return(
    <div
      class={`grid grid-cols-[auto_1fr] items-center justify-start gap-4 ${props.class}`}
    >
      <div>
        <img
          class="w-6"
          src="/gfx/sign.svg"
          elementtiming=""
          fetchpriority="high"
        />
      </div>

      <p class="text-left font-lexend text-hero-benefit font-normal text-text-1">
        <Slot/>
      </p>
    </div>
  )
})