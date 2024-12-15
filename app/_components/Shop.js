"use client";
import { useState } from "react";

export default function ElectronicsRental() {
  // Predefined categories and products
  const categories = {
    Cameras: [
      { name: "Canon EOS R5", price: 1500, image: "/camera.png" },
      { name: "Nikon Z6 II", price: 1200, image: "/camera.png" },
      { name: "Sony Alpha A7 III", price: 1300, image: "/camera.png" },
      { name: "Fujifilm X-T4", price: 1400, image: "/camera.png" },
      { name: "Panasonic Lumix S5", price: 1600, image: "/camera.png" },
      { name: "Olympus OM-D E-M1", price: 1100, image: "/camera.png" },
      { name: "Leica SL2", price: 2500, image: "/camera.png" },
      { name: "GoPro Hero 12", price: 400, image: "/camera.png" },
      { name: "DJI Pocket 2", price: 350, image: "/camera.png" },
      { name: "Blackmagic Pocket Cinema", price: 2000, image: "/camera.png" },
    ],
    Laptops: [
      { name: "MacBook Pro M2", price: 2000, image: "/laptop.png" },
      { name: "Dell XPS 13", price: 1500, image: "/laptop.png" },
      { name: "HP Spectre x360", price: 1400, image: "/laptop.png" },
      { name: "Asus ROG Zephyrus G14", price: 1700, image: "/laptop.png" },
      { name: "Lenovo ThinkPad X1", price: 1600, image: "/laptop.png" },
      { name: "Microsoft Surface Laptop 5", price: 1800, image: "/laptop.png" },
      { name: "Acer Predator Helios", price: 2000, image: "/laptop.png" },
      { name: "Razer Blade 15", price: 2200, image: "/laptop.png" },
      { name: "LG Gram 17", price: 1300, image: "/laptop.png" },
      { name: "Samsung Galaxy Book3", price: 1400, image: "/laptop.png" },
    ],
    Smartphones: [
      { name: "iPhone 15 Pro", price: 1200, image: "/phone.png" },
      { name: "Samsung Galaxy S23", price: 1000, image: "/phone.png" },
      { name: "OnePlus 12", price: 900, image: "/phone.png" },
      { name: "Google Pixel 8", price: 950, image: "/phone.png" },
      { name: "Xiaomi Mi 13", price: 800, image: "/phone.png" },
      { name: "Oppo Find X6", price: 850, image: "/phone.png" },
      { name: "Sony Xperia 1 V", price: 1100, image: "/phone.png" },
      { name: "Asus ROG Phone 7", price: 1200, image: "/phone.png" },
      { name: "Huawei P60 Pro", price: 980, image: "/phone.png" },
      { name: "Motorola Edge 40", price: 870, image: "/phone.png" },
    ],
    Tablets: [
      { name: "iPad Pro M2", price: 1500, image: "/tablet.png" },
      { name: "Samsung Galaxy Tab S9", price: 1100, image: "/tablet.png" },
      { name: "Microsoft Surface Pro 9", price: 1200, image: "/tablet.png" },
      { name: "Lenovo Tab P12 Pro", price: 900, image: "/tablet.png" },
      { name: "Xiaomi Pad 6", price: 800, image: "/tablet.png" },
      { name: "Amazon Fire HD 10", price: 400, image: "/tablet.png" },
      { name: "Huawei MatePad Pro", price: 1000, image: "/tablet.png" },
      { name: "Asus ROG Flow Z13", price: 2000, image: "/tablet.png" },
      { name: "Realme Pad X", price: 600, image: "/tablet.png" },
      { name: "Google Pixel Tablet", price: 700, image: "/tablet.png" },
    ],
    Projectors: [
      { name: "Epson EH-TW9400", price: 2500, image: "/projector.png" },
      { name: "BenQ TK850", price: 2000, image: "/projector.png" },
      { name: "Optoma UHD38", price: 1700, image: "/projector.png" },
      { name: "Sony VPL-VW590ES", price: 3000, image: "/projector.png" },
      { name: "LG HU85LA", price: 2800, image: "/projector.png" },
      { name: "Xiaomi Mi Smart Projector2", price: 900, image: "/projector.png" },
      { name: "Anker Nebula Capsule II", price: 500, image: "/projector.png" },
      { name: "ViewSonic PX747", price: 1500, image: "/projector.png" },
      { name: "Samsung The Premiere", price: 3500, image: "/projector.png" },
      { name: "Barco G60", price: 5000, image: "/projector.png" },
    ],
    // Add more categories similarly...
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortOption, setSortOption] = useState("Price: Low to High");


  // Filter products based on selected category and price range
  const filteredProducts = Object.entries(categories)
    .filter(([category]) => selectedCategory === "All" || category === selectedCategory)
    .flatMap(([_, products]) =>
      products.filter(
        (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
      )
    );
// Sorting logic
const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return a.price - b.price;
    } else if (sortOption === "Price: High to Low") {
      return b.price - a.price;
    }
    return 0; // Default case
  });
  
  return (
    <section className="p-24">
      <header className="text-center">
        <h2 className="text-3xl font-bold">Electronics Rentals</h2>
        <p className="mt-2 text-gray-600">
          Choose from a wide range of electronic items available for rent.
        </p>
      </header>

      {/* Filters */}
      <div className="my-4 flex flex-col md:flex-row items-center gap-4">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded text-black"
        >
          <option value="All" className="text-black">All Categories</option>
          {Object.keys(categories).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
  className="p-2 border rounded text-black"
>
  <option value="Price: Low to High">Price: Low to High</option>
  <option value="Price: High to Low">Price: High to Low</option>
</select>



        {/* Price Range Filter */}
        <div className="flex items-center gap-2">
          <label>Price Range:</label>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-48"
          />
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
            <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Rent now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
