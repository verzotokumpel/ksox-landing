
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface LogoProps {
    class: string
}

export default component$((props: LogoProps) => {
  return (
    <div class={`flex justify-between ${props.class}`}>
      <Link href="/" class="flex items-center gap-[16px]">
        <div>
            <img width="48" height="48" src="/gfx/logo.svg" alt="logo" />
        </div>
        <div class="font-inter text-logo text-white max-sm:hidden">KSOX</div>
      </Link>
    </div>
  );
});