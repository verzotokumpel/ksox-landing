/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import Divider from "../Divider/divider";
import ProgressBar from "./progressBar";
import AmountInput from "./amountInput";
import TokenDropdown from "./tokenDropdown";
import TimerTile from "./timerTile";

export default component$(() => {
  // TODO: to wszystko trzeba jakos ogarnac:
  // const crowdsale = useCrowdsale();

  // const [nowTimestamp, setNowTimestamp] = createSignal<number>(
  //   Math.floor(Date.now() / 1000),
  // );

  // const setTimer = (direction: boolean, duration: number) => {
  //   setCrowdsale("timer", () => ({
  //     direction,
  //     timerDays: Math.floor(duration / (60 * 60 * 24)),
  //     timerHours: Math.floor((duration % (60 * 60 * 24)) / (60 * 60)),
  //     timerMinutes: Math.floor((duration % (60 * 60)) / 60),
  //     timerSeconds: Math.floor(duration % 60),
  //   }));
  // };

  // createEffect(() => {
  //   if (crowdsale.phaseContract.isBucketActive) {
  //     const now = nowTimestamp();
  //     const bucketStart = Number(
  //       crowdsale.phaseContract.currentBucketStartTimestamp,
  //     );
  //     const bucketFinish = Number(
  //       crowdsale.phaseContract.currentBucketEndTimestamp,
  //     );

  //     if (now <= bucketStart) {
  //       setTimer(true, bucketStart - now);
  //     } else if (bucketStart < now && now <= bucketFinish) {
  //       setTimer(false, bucketFinish - now);
  //     } else {
  //       setCrowdsale("phaseContract", () => ({
  //         isBucketActive: false,
  //       }));
  //       setAmountInputStyle({});
  //     }
  //   }
  // });

  // let interval: NodeJS.Timer;

  // onMount(() => {
  //   interval = setInterval(() => {
  //     setNowTimestamp(Math.floor(Date.now() / 1000));
  //   }, 1000);
  // });

  // onCleanup(() => {
  //   clearInterval(interval);
  // });

  // const [amountInputStyle, setAmountInputStyle] =
  //   createSignal<JSX.CSSProperties>({});

  // const progressFill = createMemo(() => {
  //   return crowdsale.phaseContract.currentBucketCapacity
  //     ? Number(
  //         (crowdsale.phaseContract.currentBucketSoldAmount * 10000n) /
  //           crowdsale.phaseContract.currentBucketCapacity,
  //       ) / 10000
  //     : 0;
  // });

  return(
    <div class="grid grid-rows-[auto_auto] gap-24 font-lexend text-text-1">
      <div class="row-start-1 row-end-2 grid grid-rows-[auto_auto] gap-2 text-center font-medium">
        <div class="text-5xl">KSXT Crowdsale</div>
        {/* TODO: <div class="text-xl">
          {crowdsale.phaseContract.isPhaseActive
            ? crowdsale.phaseContract.name + " - active"
            : "inactive"}
        </div> */}
        <div class="text-xl">
          inactive
        </div>
      </div>

      <div
        // TODO: class={`row-start-2 row-end-3 grid grid-cols-[1fr_1fr] items-stretch gap-5 gap-y-16 max-md:grid-cols-1 max-md:grid-rows-2 ${
        //   crowdsale.phaseContract.isBucketActive
        //     ? "text-text-1"
        //     : "text-gray-700"
        // }`}
        class="row-start-2 row-end-3 grid grid-cols-[1fr_1fr] items-stretch
        gap-5 gap-y-16 max-md:grid-cols-1 max-md:grid-rows-2 text-gray-700"
      >
        <div class="col-start-1 col-end-2 grid grid-flow-col grid-rows-[auto_1fr] items-center gap-8 px-16 max-md:col-start-1 max-md:col-end-2 max-md:row-start-2 max-md:row-end-3 max-md:px-1">
          <div class="row-start-1 row-end-2 grid grid-cols-[auto_auto] items-center justify-center gap-2 px-8 text-center text-2xl font-medium">
            {/* TODO: {crowdsale.phaseContract.isBucketActive ? (
              <>
                BUCKET
                <div class="token-linear-wipe-text text-3xl font-extrabold">
                  {crowdsale.phaseContract.currentBucketId.toString()}
                </div>
              </>
            ) : (
              <>NO OPEN BUCKET</>
            )} */}
            <>NO OPEN BUCKET</>
          </div>

          <div class="row-start-2 row-end-3 grid grid-rows-[auto_auto] gap-8">
            <div class="px-8 text-center text-2xl font-medium">
              {/* TODO: SALE {crowdsale.timer?.direction ? "STARTS" : "ENDS"} IN */}
              SALE ENDS IN
            </div>

            <div class="grid grid-cols-4 items-start justify-around gap-4 text-center text-2xl font-medium max-md:gap-4">
              {/* TODO: <TimerTile
                disabled={!crowdsale.phaseContract.isBucketActive}
                higlighted={!crowdsale.timer.direction}
                name="days"
                value={crowdsale.timer.timerDays.toString()}
              />
              <TimerTile
                disabled={!crowdsale.phaseContract.isBucketActive}
                higlighted={!crowdsale.timer.direction}
                name="hrs"
                value={crowdsale.timer.timerHours.toString()}
              />
              <TimerTile
                disabled={!crowdsale.phaseContract.isBucketActive}
                higlighted={!crowdsale.timer.direction}
                name="mins"
                value={crowdsale.timer.timerMinutes.toString()}
              />
              <TimerTile
                disabled={!crowdsale.phaseContract.isBucketActive}
                higlighted={!crowdsale.timer.direction}
                name="secs"
                value={crowdsale.timer.timerSeconds.toString()}
              /> */}
              <TimerTile
                disabled={true}
                higlighted={true}
                name="days"
                value={""}
              />
              <TimerTile
                disabled={true}
                higlighted={true}
                name="hrs"
                value={""}
              />
              <TimerTile
                disabled={true}
                higlighted={true}
                name="mins"
                value={""}
              />
              <TimerTile
                disabled={true}
                higlighted={true}
                name="secs"
                value={""}
              />
            </div>
          </div>
        </div>

        <div class="col-start-2 col-end-3 grid grid-rows-[auto_auto_1fr] justify-items-stretch gap-12 px-16 max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-2 max-md:px-1">
          <div class="row-start-1 row-end-2 px-8 text-center text-2xl font-medium">
            KSXT Token Price ={" "}
            {/* TODO: {crowdsale.phaseContract.currentBucketRate?.toFixed(2) ?? "X"} USDC */}
            0.00 USDC
          </div>

          <div class="row-start-2 row-end-3 grid grid-rows-[auto_auto] gap-1 self-center">
            <div>Bucket supply</div>
            {/* TODO: <ProgressBar
              fill={progressFill()}
              disable={!crowdsale.phaseContract.isBucketActive}
            /> */}
            <ProgressBar
              fill = {0}
              disable={true}
            />
          </div>

          <div class="row-start-3 row-end-4 grid grid-rows-[auto_auto] items-center gap-4 self-end">
            <div class="grid grid-cols-[1fr_auto] items-stretch justify-center gap-2">
              {/* TODO: <AmountInput
                style={amountInputStyle()}
                disabled={!crowdsale.phaseContract.isBucketActive}
                onInput={(n) => setCrowdsale({ tokenAmount: n })}
              />
              <TokenDropdown
                disabled={!crowdsale.phaseContract.isBucketActive}
              /> */}
              <AmountInput
                disabled={true}
              />
              <TokenDropdown
                disabled={true}
              />
            </div>

            <div
              // TODO: class={`rounded-full p-[11px_32px] text-center font-lexend text-hero-button font-medium md:p-[16px_40px] ${
              //   crowdsale.phaseContract.isBucketActive &&
              //   !crowdsale.timer.direction
              //     ? "token-linear-wipe-button cursor-pointer text-text-1 transition-opacity duration-100 hover:opacity-90"
              //     : "bg-gray-900 text-gray-700"
              // }`}
              // onClick={async () => {
              //   if (
              //     crowdsale.phaseContract.isBucketActive &&
              //     !crowdsale.timer.direction
              //   ) {
              //     if (crowdsale.tokenAmount) {
              //       setAmountInputStyle({});
              //       if (
              //         wallet.walletClient == undefined ||
              //         wallet.address == undefined
              //       ) {
              //         await walletClientConnect();
              //       }
              //       setCrowdsale({ showModal: true });
              //     } else {
              //       setAmountInputStyle({ "border-color": "red" });
              //     }
              //   }
              // }}
              class="rounded-full p-[11px_32px] text-center font-lexend
              text-hero-button font-medium md:p-[16px_40px] bg-gray-900 text-gray-700"
            >
              Buy KSXT Token
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div class="grid grid-cols-[1fr_1fr] gap-12 max-md:grid-cols-[1fr] max-md:grid-rows-[auto_auto]">
        <div class="col-start-1 col-end-2 grid gap-4 max-md:col-start-1 max-md:col-end-2 max-md:row-start-1 max-md:row-end-2">
          <div class="text-xl">
            <div class="py-1 text-2xl font-bold">100% PUBLIC SALE</div>
            <div class="py-1">No vesting, no pre-allocation</div>
            <div class="py-1">
              Checkout{" "}
              <a
                href="/whitepaper/ksox-whitepaper.pdf#Tokenomics"
                target="_blank"
                class="text-links_new"
              >
                Tokenomics
              </a>{" "}
              section of{" "}
              <a
                href="/whitepaper/ksox-whitepaper.pdf"
                target="_blank"
                class="text-links_new"
              >
                Whitepaper
              </a>{" "}
              to learn more.
            </div>
          </div>
        </div>
        <div class="col-start-2 col-end-3 grid grid-flow-row gap-4 max-md:col-start-1 max-md:col-end-2 max-md:row-start-2 max-md:row-end-3">
          <div class="py-1 text-2xl font-bold">KSXT Token on chains:</div>
          {/* TODO: <For each={AVAILABLE_CHAINS}>
            {(item, index) => (
              <div
                data-index={index()}
                class="grid grid-cols-[auto_1fr_auto] items-center justify-start gap-4"
              >
                <div class="col-start-1 col-end-2">
                  <img
                    src={joinPaths(base, item.icon)}
                    width="30px"
                    elementtiming={""}
                    fetchpriority={"high"}
                  />
                </div>
                <div class="col-start-2 col-end-3 grid grid-cols-[auto_auto_105px] items-center justify-start gap-4">
                  <div class="col-start-1 col-end-2 overflow-hidden text-ellipsis">
                    coming up soon
                    TODO: tu tez bylo cos zakomentowane
                  </div>
                    TODO: tu bylo sporo zakomentowanych rzeczy
                </div>
              </div>
            )}
          </For> */}
          <div
            class="grid grid-cols-[auto_1fr_auto] items-center justify-start gap-4"
          >
            <div class="col-start-1 col-end-2">
              <img
                src="/gfx/asset_icons/eth.svg"
                width={30}
                data-elementtiming={""}
                data-fetchpriority={"high"}
              />
            </div>
            <div class="col-start-2 col-end-3 grid grid-cols-[auto_auto_105px] items-center justify-start gap-4">
              <div class="col-start-1 col-end-2 overflow-hidden text-ellipsis">
                coming up soon
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />
    </div>
  )
})