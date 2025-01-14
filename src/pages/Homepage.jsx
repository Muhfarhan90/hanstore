import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";

const Homepage = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://fakestoreapi.in/api/products?limit=10"
      );
      const data = await response.json();
      setProduk(data.products);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex whitespace-normal gap-8 overflow-x-auto p-20">
        {produk.map((products) => {
          return <Card key={products.id} product={products} />;
        })}
      </div>
      <div className="flex justify-center mt-4">
        <Button btnName="View All Products" className="text-center" />
      </div>
    </div>
  );
};

export default Homepage;
