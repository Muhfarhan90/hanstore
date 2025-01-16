import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import axios from "axios";
import Loading from "../loading";

const Homepage = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.in/api/products?limit=10")
      .then((response) => {
        setProduk(response.data.products);
      });
  }, []);

  console.log(produk);
  return (
    <div>
      <div>
        {produk ? (
          <div className="flex whitespace-normal gap-8 overflow-x-auto p-20">
            {produk.map((products) => {
              return <Card key={products.id} product={products} />;
            })}
          </div>
        ) : (
          <Loading />
        )}

        <div className="flex justify-center mt-4">
          <Button
            btnName="View All Products"
            jenis="primary"
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
