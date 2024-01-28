export default function Error({ message }) {
  return (
      <div className="flex items-center ">
          <div className="relative bg-red-200  px-4 py-2 text-red-800 rounded shadow w-full">
              <span className="block text-md">{message}</span>
          </div>
      </div>
  );
}