const Products = async () => {
  const response = await fetch("https://dummyjson.com/carts");
  const data = await response.json();
  return data;
};

const ProductsList = async () => {
  const service = await Products();
  console.log(service);

  
  if (!service?.carts?.length) {
    return (
      <div className="text-center py-10 text-xl font-semibold text-gray-600">
        No carts found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Carts List</h1>

   
      <div className="space-y-10">
        {service.carts.map((cart) => (
          <div key={cart.id} className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Cart #{cart.id}
            </h2>

        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cart.products.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl shadow-sm p-4 hover:shadow-md transition bg-gray-50"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />

                  <h3 className="font-semibold text-lg text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-1">
                    Price: <span className="font-medium">${item.price}</span>
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    Qty: <span className="font-medium">{item.quantity}</span>
                  </p>
                  <p className="text-gray-700 font-medium mb-1">
                    Total: ${item.total}
                  </p>

                  <p className="text-sm text-green-700 font-semibold">
                    Discount: {item.discountPercentage}% → ${item.discountedTotal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
