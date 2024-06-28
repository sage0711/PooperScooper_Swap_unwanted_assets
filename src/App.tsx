import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {
  ConnectionProvider,
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

export default App;
