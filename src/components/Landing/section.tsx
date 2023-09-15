import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Spacing from "../Spacing/spacing";

interface SectionProps {
  id?: string;
  class?: string;
  sectionId?: string;
  sectionToId?: string;
  imagePath: string;
}

export default component$((props: SectionProps) => {
  return (
    <section id={props.sectionId} class="scroll-mt-36">
      <div class={`flex flex-col items-center justify-between ${props.class}`}>
        <div class="flex-1">
          <img
            src={props.imagePath}
            alt="about"
            elementtiming={""}
            fetchpriority={"high"}
          />
        </div>

        <Spacing class="h-8 md:w-5" />

        <div class="flex flex-1 flex-col items-start gap-7">
          <Slot/>

          <Link
            href={`#${props.sectionToId}`}
            class="text-section-button font-bold text-links transition-colors hover:text-text-1"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  )
})

// TODO: ogarnij te sciezki do zdjec - w solid bylo uzywane to base czesto