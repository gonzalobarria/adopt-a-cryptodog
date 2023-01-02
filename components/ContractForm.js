import { arbiters } from 'mocks/arbiters';
import Link from 'next/link';
import { useContext } from 'react';
import { miniAddress } from 'utils/utils';
import { AppContext } from './AppContext';
import ConnectWallet from './ConnectWallet';
import { ContractContext } from './ContractContext';
import PendingContracts from './PendingContracts';

export default function ContractForm() {
  const { account } = useContext(AppContext);
  const {
    beneficiary,
    amount,
    arbiter,
    setArbiter,
    newContract,
    clearForm,
    escrows,
  } = useContext(ContractContext);

  return (
    <div className="p-5 border rounded border-gray-400 shadow-lg-invert text-sm px-3">
      {!account ? (
        <div className="flex items-center justify-center py-10">
          <ConnectWallet />
        </div>
      ) : (
        <>
          <div className="text-center">
            <h1 className="sm:text-2xl font-bold pb-2 text-white">
              New Contract
            </h1>
          </div>
          <div className="m-4 grid gap-2 items-center">
            <div className="flex flex-row">
              <label className="text-gray-300 py-2.5 pr-4">Arbiter:</label>
              <select
                id="arbiter"
                value={arbiter}
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  text-gray-300  border-gray-200 focus:bg-gray-800 hover:bg-gray-800  focus rounded focus:outline-none focus:ring-0 focus:border-gray-200 peer focus:text-gray-300 transition ease-in-out delay-150"
                onChange={(e) => setArbiter(e.currentTarget.value)}
              >
                <option defaultValue="0x0">Choose an Arbiter</option>
                {arbiters.map((address) => (
                  <option value={address} key={address}>
                    {miniAddress(address)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-row">
              <label className="text-gray-300 py-2.5  w-16">Owner:</label>
              <div className="text-gray-300 py-2.5">
                {beneficiary !== '' ? miniAddress(beneficiary) : ''}
              </div>
            </div>
            <div className="flex flex-row font-bold">
              <label className="text-gray-300 py-2.5 pr-5 w-16 ">Price:</label>
              <div className="text-gray-300 py-2.5 ">
                {amount !== '' ? `${amount} ether` : ''}
              </div>
            </div>
            <button
              // className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              // className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-10 mt-4"
              onClick={newContract}
            >
              Let's Adopt!
            </button>
            <button
              className="underline text-gray-200 pt-2 w-fit self-center mx-auto"
              onClick={clearForm}
            >
              Clear
            </button>
            <Link
              href="/contracts"
              className="underline text-gray-200 pt-5 text-center w-fit mx-auto"
            >
              See Contracts ({escrows.length})
            </Link>
            <PendingContracts />
          </div>
        </>
      )}
    </div>
  );
}
