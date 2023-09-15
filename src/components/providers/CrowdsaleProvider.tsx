import { mainnet, bsc, polygon } from "@wagmi/chains";
import type { Address } from "viem";
import { PHASE_CONTRACT_ABI } from "~/contracts/abi/phaseContract";
import { WETH_CONTRACT_ABI } from "~/contracts/abi/wethContract";
import { TOKEN_TICKET_CONTRACT_ABI } from "~/contracts/abi/tokenTicketContract";
// import { component$, createContextId, useContextProvider, useStore } from "@builder.io/qwik";


export interface Token {
    icon: string;
    name: string;
    symbol: string;
  }
  
  export interface phaseContract {
    address: Address;
    abi: typeof PHASE_CONTRACT_ABI;
  }
  
  export interface wethContract {
    address: Address;
    abi: typeof WETH_CONTRACT_ABI;
  }
  
  export interface tokenTicketContract {
    address: Address;
    abi: typeof TOKEN_TICKET_CONTRACT_ABI;
  }
  
  export interface PhaseContract {
    name: string;
    isPhaseActive: boolean;
    isBucketActive: boolean;
    // bucket info
    currentBucketId: bigint;
    currentBucketStartTimestamp: bigint;
    currentBucketEndTimestamp: bigint;
    currentBucketCapacity: bigint;
    currentBucketRate: number;
    currentBucketSoldAmount: bigint;
  }
  
  export interface Timer {
    direction: boolean;
    timerDays: number;
    timerHours: number;
    timerMinutes: number;
    timerSeconds: number;
  }
  
  export interface CrowdsaleProvider {
    selected_token: Token;
    phaseContract: PhaseContract;
    showModal: boolean;
    timer: Timer;
    tokenAmount: number;
  }
  
  export interface Contract {
    tokens: Token[];
    phaseContract: phaseContract;
    wethContract: wethContract;
    tokenTicketContract: tokenTicketContract;
  }
  
  export const CONTRACT_ON_CHAIN: Map<string, Contract> = new Map([
    [
      mainnet.name,
      {
        phaseContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: PHASE_CONTRACT_ABI,
        },
        wethContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: WETH_CONTRACT_ABI,
        },
        tokenTicketContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: TOKEN_TICKET_CONTRACT_ABI,
        },
        tokens: [
          { icon: "/gfx/asset_icons/eth.svg", name: "Ethereum", symbol: "ETH" },
          {
            icon: "/gfx/asset_icons/eth.svg",
            name: "Wrapped Ethereum",
            symbol: "WETH",
          },
          { icon: "/gfx/asset_icons/usdc.svg", name: "USD Coin", symbol: "USDC" },
          { icon: "/gfx/asset_icons/usdt.svg", name: "Tether", symbol: "USDT" },
        ],
      },
    ],
    [
      polygon.name,
      {
        phaseContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: PHASE_CONTRACT_ABI,
        },
        wethContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: WETH_CONTRACT_ABI,
        },
        tokenTicketContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: TOKEN_TICKET_CONTRACT_ABI,
        },
        tokens: [
          { icon: "/gfx/asset_icons/eth.svg", name: "Ethereum", symbol: "ETH" },
          {
            icon: "/gfx/asset_icons/eth.svg",
            name: "Wrapped Ethereum",
            symbol: "WETH",
          },
          { icon: "/gfx/asset_icons/usdc.svg", name: "USD Coin", symbol: "USDC" },
          { icon: "/gfx/asset_icons/usdt.svg", name: "Tether", symbol: "USDT" },
        ],
      },
    ],
    [
      bsc.name,
      {
        phaseContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: PHASE_CONTRACT_ABI,
        },
        wethContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: WETH_CONTRACT_ABI,
        },
        tokenTicketContract: {
          address: "0x0000000000000000000000000000000000000000",
          abi: TOKEN_TICKET_CONTRACT_ABI,
        },
        tokens: [
          { icon: "/gfx/asset_icons/eth.svg", name: "Ethereum", symbol: "ETH" },
          {
            icon: "/gfx/asset_icons/eth.svg",
            name: "Wrapped Ethereum",
            symbol: "WETH",
          },
          { icon: "/gfx/asset_icons/usdc.svg", name: "USD Coin", symbol: "USDC" },
          { icon: "/gfx/asset_icons/usdt.svg", name: "Tether", symbol: "USDT" },
        ],
      },
    ],
  ]);


//   const CrowdsaleContext = createContextId<CrowdsaleProvider>(crowdsale);

//   export default component$(() => {

//     return (
//         useContextProvider(CrowdsaleContext)
//         // <CrowdsaleContext.Provider value={crowdsale}>
//         //   {props.children}
//         // </CrowdsaleContext.Provider>
//       )
//   })
