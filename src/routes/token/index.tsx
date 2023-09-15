import { component$ } from "@builder.io/qwik";
import Crowdsale from "~/components/Token/crowdsale";
import TermsModal from "~/components/Token/termsModal";

export default component$(() => {
  // TODO: const crowdsale = useCrowdsale();
  
  return(
    <>
      <Crowdsale />
      {/* TODO: switch to this {crowdsale.showModal && 
        <TermsModal />
      } */}
      <TermsModal />
    </>
  )
})