import { component$ } from "@builder.io/qwik";
import BigText from "./bigText";
import Spacing from "../Spacing/spacing";
import SmallText from "./smallText";
import Benefits from "./benefits";
import Buttons from "./buttons";

export default component$(() => {
  return(
    <div class="grid grid-cols-[0.8fr_1fr] items-center gap-8 text-white max-md:grid-cols-[1fr]">
      <div class="grid grid-flow-row">
        <BigText />
        <Spacing class="h-8" />
        <SmallText />
        <Spacing class="h-8" />
        <Benefits />
        <Spacing class="h-12" />
        <Buttons />
      </div>

      <div class="max-md:hidden">
        <img
          src="/gfx/laptop.png"
          class="mx-auto"
          elementtiming=""
          fetchpriority="high"
        />
      </div>
    </div>
  )
})