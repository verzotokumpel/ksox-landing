import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  // TODO: const crowdsale = useCrowdsale();
  return (
    <div class="grid grid-cols-2 grid-rows-2 gap-6 max-md:grid-cols-1 max-md:grid-rows-3">
      <a
        href="https://app.ksox.finance"
        class="col-start-1 col-end-2 row-start-1 row-end-2 max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-2"
      >
        <div class="rounded-full bg-primary p-[11px_32px] text-center font-lexend text-hero-button font-medium text-text-1 hover:bg-text-1 hover:text-buttonbg_new md:p-[16px_40px]">
          Launch App
        </div>
      </a>
      <a
        href="#safety"
        class="col-start-2 col-end-3 row-start-1 row-end-2 max-md:col-start-1 max-md:col-end-2 max-md:row-start-2 max-md:row-end-3"
      >
        <div class="rounded-full border-2 border-solid border-text-1 p-[10px_32px] text-center font-lexend text-hero-button font-medium text-text-1 hover:bg-buttonbg_new md:p-[16px_40px]">
          Learn More
        </div>
      </a>
      <Link
        href="/token"
        class="col-start-1 col-end-3 row-start-2 row-end-3 max-md:col-start-1 max-md:col-end-2 max-md:row-start-3 max-md:row-end-4"
      >
        {/* TODO: co z tym? <div
          class={`rounded-full p-[11px_32px] text-center font-lexend text-hero-button font-medium md:p-[16px_40px] ${
            crowdsale.phaseContract.isPhaseActive
              ? "token-linear-wipe-button"
              : "bg-gray-900 text-gray-700"
          }`}
        >
          Buy Token
        </div> */}

        <div
          class="rounded-full p-[11px_32px] text-center font-lexend text-hero-button
          font-medium md:p-[16px_40px] bg-gray-900 text-gray-700"
        >
          Buy Token
        </div>
      </Link>
    </div>
  )
})