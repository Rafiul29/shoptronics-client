import Form from "./Form";

const AddProduct = () => {
  return (
    <section className="section-padding mt-20">
      <div className="wrapper">
        <div className="px-4 sm:px-0 pb-2">
          <h3 className="text-4xl mb-1 font-medium leading-6 text-gray-900">
            Add new product
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Please fillup the form to add new product
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
