import { useMemo, FC } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  LedgerWalletAdapter,
  SolflareWalletAdapter,
  SolongWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./index.css";

function App() {
  const network =
    "https://attentive-frequent-darkness.solana-mainnet.quiknode.pro/5df866d1030f5bb9b9b95e95f1d5e3c41416ffcf/";
  const endpoint = useMemo(() => network, []);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolongWalletAdapter(),
      new TorusWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

const Content: FC = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  return (
    <div className="bg-gradient-to-b from-[#FC8E03] to-[#FFD302] p-4 sm:p-8 md:p-16 lg:p-24 min-h-screen relative">
      <div className="min-h-[30vh]">
        {wallet && connection && wallet.publicKey ? (
          1
        ) : (
          <div className="text-white text-center pt-4 font-bold text-2xl italic h-[30vh] flex items-center justify-center relative z-40">
            Connect your wallet to scoop up unwanted assets
          </div>
        )}
        <img
          src={`/images/bonk_logo_transparent.png`}
          width={500}
          className="absolute bottom-0 left-0"
          alt="$BONK Logo"
        />
      </div>
    </div>
  );
};

export default App;
