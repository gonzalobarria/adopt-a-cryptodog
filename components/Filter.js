import { ContractContext } from 'components/ContractContext';
import Link from 'next/link';
import { useContext } from 'react';
import { CONTRACT_STATUS } from 'utils/enums';

export default function Filter() {
  const { escrows, setFilteredContracts } = useContext(ContractContext);
  const { APPROVED, REJECTED, WAITING } = CONTRACT_STATUS;

  const filterContacts = (status) => {
    setFilteredContracts(
      !status ? escrows : escrows.filter((e) => e.status === status)
    );
  };

  return (
    <div className="w-full md:max-w-xs p-5  text-sm px-3">
      <div className="text-gray-200">
        <Link href="/">
          <p className="underline text-sm text-gray-300 pb-5">
            Back to Adoption
          </p>
        </Link>
        <h2 className="text-xl font-bold pb-4">Filter Contracts</h2>
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li
              onClick={() => filterContacts()}
              className="underline cursor-pointer"
            >
              All
            </li>
            <li
              onClick={() => filterContacts(APPROVED)}
              className="underline cursor-pointer"
            >
              Approved
            </li>
            <li
              onClick={() => filterContacts(REJECTED)}
              className="underline cursor-pointer"
            >
              Rejected
            </li>
            <li
              onClick={() => filterContacts(WAITING)}
              className="underline cursor-pointer"
            >
              Pending
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
