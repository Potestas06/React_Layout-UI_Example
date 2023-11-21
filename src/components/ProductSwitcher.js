import React, { useState } from "react";

const ProductSelection = () => {
  const [selectedProduct, setSelectedProduct] = useState("none");

  const handleChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  const getImageForProduct = (product) => {
    switch (product) {
      case "tech":
        return "https://www.brookings.edu/wp-content/uploads/2017/11/metro_20171121_tech-empowers-tech-polarizes-mark-muro.jpg";
      case "art":
        return "https://history-of-art.osu.edu/sites/default/files/styles/slideshow_image/public/2021-03/ha3521_image.jpg?h=0ab7973a&itok=anmqM0fS";
      case "travel":
        return "https://media.istockphoto.com/id/1042534060/de/vektor/flugzeuglinie-pfad-vektor-symbol-der-flugroute-des-flugzeugs-mit-startpunkt-und-strichlinie.jpg?s=612x612&w=0&k=20&c=GsJOqpZabnILCAzce6YLawz0ZgfmI9ZsdnRb0yfgQoY=";
      default:
        return;
    }
  };

  return (
    <div>
      <form className="max-w-xs mx-auto mt-6 p-4 bg-white shadow-md rounded">
        <p className="mb-2 font-semibold">Wähle deine Interessen:</p>
        <label className="block mb-2">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            name="interests[]"
            value="tech"
            checked={selectedProduct === "tech"}
            onChange={handleChange}
          />
          <span className="text-sm">Technologie</span>
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            name="interests[]"
            value="art"
            checked={selectedProduct === "art"}
            onChange={handleChange}
          />
          <span className="text-sm">Kunst</span>
        </label>
        <label className="block mb-4">
          <input
            type="checkbox"
            className="mr-2 leading-tight"
            name="interests[]"
            value="travel"
            checked={selectedProduct === "travel"}
            onChange={handleChange}
          />
          <span className="text-sm">Reisen</span>
        </label>
      </form>
      {selectedProduct !== "none" && (
        <div className="max-w-xs mx-auto mt-6 p-4 bg-white shadow-md rounded">
          <p>Das ausgewählte Produkt: {selectedProduct}</p>
          <img
            src={getImageForProduct(selectedProduct)}
            alt="Produktbild"
            className="mt-4"
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default ProductSelection;
