import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import Footer from "~/components/Footer/footer";

import Header from "~/components/Header/header";
import Spacing from "~/components/Spacing/spacing";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="[background-image:linear-gradient(180deg,#000033_0%,#00001d_24%,#00001d_76%,#000033_100%)]">
      {/* TODO: wrap the component with this??? <CrowdsaleProvider> */}
        <Header/>
        <div class="m-auto flex min-h-screen max-w-7xl flex-col p-6">
          <Spacing class="h-24" />
          <Slot />
          <Spacing class="h-12" />
          <Footer />
          <Spacing class="h-20" /> 
        </div>
      {/* TODO: wrap the component with this??? </CrowdsaleProvider> */}
    </div>
  );
});
