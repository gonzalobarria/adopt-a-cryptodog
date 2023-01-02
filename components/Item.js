import { CONTRACT_STATUS } from 'utils/enums';
import { miniAddress } from 'utils/utils';

export default function Item(item) {
  const { race, owner, url, price, isAvailableToBuy, filtra, isShown, status } =
    item;
  const { APPROVED, WAITING } = CONTRACT_STATUS;

  const statusMap = {
    [`${APPROVED}`]: 'Adopted!',
    [`${WAITING}`]: 'Waiting Contract!',
  };

  return (
    <div className="max-w-sm  border rounded-lg shadow-lg-invert bg-gray-800 border-gray-600">
      <a href="#">
        <img className="rounded-t-lg" src={url} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-xl font-bold tracking-tight text-white">
            {race}
          </h5>
        </a>
        <p className="mb-2 text-xs text-white">Owner: {miniAddress(owner)}</p>
        <p className="mb-3 text-white font-bold">Price: {price} ether</p>
        {isShown && (
          <button
            onClick={() => filtra(item)}
            className={`${
              isAvailableToBuy
                ? 'from-purple-300 to-pink-600'
                : 'from-blue-900 to-blue-600 ring-purple-300 ring-2 ring-white-300 '
            } text-white bg-gradient-to-r from-purple-300 to-pink-600 hover:bg-gradient-to-br focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
          >
            Adopt Me!
          </button>
        )}
        {status && (
          <p className="mb-3 text-white font-bold">{statusMap[status]}</p>
        )}
      </div>
    </div>
  );
}
