import { useContext } from 'react';
import { AppContext } from './AppContext';

export default function ConnectWallet() {
  const { connectWallet } = useContext(AppContext);

  return (
    <button
      type="button"
      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={connectWallet}
    >
      Connect Wallet
    </button>
  );
}
