export default function TextInput({ title, ...attributes }) {
  return (
    <>
      <label className="block text-md   font-medium text-gray-700">
        {title}
      </label>
      <input
        required
        className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
        {...attributes}
      />
    </>
  );
}
