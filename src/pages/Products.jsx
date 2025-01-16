import { useEffect, useState } from "react";
import Card from "../components/Card";
// import Button from "../components/Button";
import axios from "axios";
import Loading from "../loading";

const Products = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.in/api/products").then((response) => {
      setProduk(response.data.products);
    });
  }, []);

  return (
    <div>
      <div>
        {produk ? (
          <div className="flex flex-wrap whitespace-normal gap-8 p-20">
            {produk.map((products) => {
              return <Card key={products.id} product={products} />;
            })}
          </div>
        ) : (
          <div className="text-center justify-center flex mt-20">
            <Loading type={"spin"} color={"#000"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
