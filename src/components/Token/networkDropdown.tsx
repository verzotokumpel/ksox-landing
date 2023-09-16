/* eslint-disable qwik/jsx-img */
import { component$, useSignal } from "@builder.io/qwik";

interface NetworkDropdownProps {
  disabled: boolean;
}

export default component$((props: NetworkDropdownProps) => {
  // TODO: const wallet = useWallet();
  const showDropdown = useSignal(false)
  return(
    <button
      class={`relative ${props.disabled ? "cursor-default" : "cursor-pointer"}`}
      onFocusout$={() => {
        showDropdown.value = false;
      }}
    >
      <div
        class="grid grid-cols-2 items-center justify-center gap-2 rounded-lg border-[1px] border-slate-600 px-2 py-2"
        onClick$={() => {
          if (!props.disabled) {
            showDropdown.value = !showDropdown.value;
          }
        }}
      >
        <div>
          <img
            // TODO: src={joinPaths(base, wallet.selected_network?.icon)}
            src = "/gfx/asset_icons/eth.svg"
            alt="network"
            width={25}
            height={25}
            data-elementtiming={""}
            data-fetchpriority={"high"}
            class={props.disabled ? "grayscale" : ""}
          />
        </div>
        <div>
          <img
            // TODO: src={joinPaths(base, "/gfx/down-arrow.svg")}
            src="/gfx/down-arrow.svg"
            alt="arrow"
            width={20}
            data-elementtiming={""}
            data-fetchpriority={"high"}
            class={props.disabled ? "grayscale" : ""}
          />
        </div>
      </div>
      {showDropdown.value && 
        <div class="md-max:left-0 absolute top-[50px] grid w-[300px] grid-flow-row gap-2 rounded-lg border border-gray-500 p-2 backdrop-blur-md max-md:w-auto md:right-0">
        <div class="rounded-lg px-4 py-2 font-semibold text-text-1">
          Select Network
        </div>
        <div class="border-[1px] border-solid border-gray-500" />
        {/*TODO: <For each={AVAILABLE_CHAINS}>
            {(item, index) => (
              <div
                data-index={index()}
                class="grid grid-cols-[40px_1fr] items-center gap-2 rounded-lg px-4 py-2 font-semibold text-text-1 transition-colors duration-100 hover:bg-buttonbg_new"
                onClick={async () => {
                  try {
                    await wallet.walletClient?.addChain({
                      chain: unwrap(item.network),
                    });
                  } catch (error) {
                    console.log(error);
                  }

                  try {
                    await wallet.walletClient?.switchChain({
                      id: unwrap(item.network).id,
                    });
                  } catch (error) {
                    console.log(error);
                  }

                  setShowDropdown(false);
                }}
              >
                <div class="col-start-1 col-end-2">
                  <img
                    src={joinPaths(base, item.icon)}
                    width="30px"
                    elementtiming={""}
                    fetchpriority={"high"}
                  />
                </div>
                <div class="col-start-2 col-end-3 text-left">
                  {item.network.name}
                </div>
              </div>
            )}
          </For> */}
      </div>
      }
    </button>
  )
})