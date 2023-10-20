import Swal from "sweetalert2";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const brandImage = form.brandImage.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newProduct = {
      image,
      brandImage,
      name,
      brand,
      category,
      price,
      rating,
      description,
    };
    console.log(newProduct);
    fetch("https://electro-server-1l9t58aag-amimul211-gmailcom.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: true,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div data-aos="zoom-out-up" className="text-center px-4 py-8 bg-[#232323]">
      <h3 className="font-young text-[#eee] mb-8 font-semibold lg:text-3xl text-xl">
        Add New Product
      </h3>
      <form
        onSubmit={handleAddProduct}
        className="bg-[#F4F3F0] p-4 sm:p-8 rounded shadow-lg w-full sm:max-w-md mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Product Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="brandImage"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Brand image (optional)
          </label>
          <input
            type="text"
            id="brandImage"
            name="brandImage"
            placeholder="Enter image URL"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
          />
        </div>

        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="w-full sm:w-1/2 px-2">
            <label
              htmlFor="brand"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Brand Name
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              placeholder="Enter brand name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            defaultValue="" 
          >
            <option value="" > 
              Select Category
            </option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="headPhone">HeadPhone</option>
            <option value="smart Watch">Smart Watch</option> 
            <option value="camera">Camera</option>
            <option value="google Devices">Smart Devices</option>
          </select>
        </div>
        <div className="mb-4 flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
            <label
              htmlFor="price"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              $ Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              placeholder="Enter price"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="w-full sm:w-1/2 px-2">
            <label
              htmlFor="rating"
              className="block text-left text-gray-700 text-sm font-bold mb-2"
            >
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              placeholder="Enter rating"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-left text-gray-700 text-sm font-bold mb-2"
          >
            Short Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="bg-[#f33f3f] text-[#eee]  font-young py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline-green"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
