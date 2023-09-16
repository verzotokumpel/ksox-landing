import { component$ } from "@builder.io/qwik";
import NetworkDropdown from "../Token/networkDropdown";

interface WalletProps {
  class: string
}

export default component$((props: WalletProps) => {
  // TODO: (wallet) o co chodzi z tym? const wallet = useWallet();

  return (
    <div
      class={`grid grid-cols-[auto_auto] items-center justify-center gap-4 ${props.class}`}
    >
      <NetworkDropdown disabled={false} />
      <div
        class="token-linear-wipe-button cursor-pointer rounded-full px-4 py-2 text-center font-lexend font-medium text-text-1"
        //TODO: (wallet) onClick$={async () => {
        //   if (!wallet.walletClient) {
        //     await walletClientConnect();
        //   }
        // }}
      >
        {/*TODO: (wallet) {wallet.address == undefined
          ? "Connect"
          : firstLastChars(wallet.address, 6, 6)} */}
          Connect
      </div>
    </div>
  );
});