import classNames from 'classnames';
import toast from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { HiLightningBolt } from 'react-icons/hi';

export const notify = ({ title, msg, type }) =>
  toast.custom(
    (t) => (
      <div
        className={classNames([
          'flex flex-row items-center justify-between w-96 bg-gradient-to-r hover:bg-gradient-to-br px-4 py-6 text-white shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out',
          type === 'error'
            ? 'from-red-400 via-red-500 to-red-600'
            : 'from-green-400 via-green-500 to-green-600',
          t.visible ? 'top-0' : '-top-96',
        ])}
      >
        <div className="text-xl">
          <HiLightningBolt />
        </div>
        <div className="flex flex-col items-start justify-center ml-4 cursor-default">
          <h1 className="text-base text-white font-semibold leading-none tracking-wider">
            {title}
          </h1>
          <p className="text-sm text-white mt-2 leading-relaxed tracking-wider">
            {msg}
          </p>
        </div>
        <div
          className="absolute top-2 right-2 cursor-pointer text-lg"
          onClick={() => toast.dismiss(t.id)}
        >
          <MdOutlineClose />
        </div>
      </div>
    ),
    { id: 'unique-notification', position: 'top-center' }
  );
