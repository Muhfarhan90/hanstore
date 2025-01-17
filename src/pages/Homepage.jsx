import { useEffect, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import axios from "axios";
import Loading from "../loading";
import { Link } from "react-router";
import ProductCategory from "../components/ProductCategory";
// import ProductByCategory from "../components/ProductByCategory";

const Homepage = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get("https://fakestoreapi.in/api/products?limit=10")
        .then((response) => {
          setProduk(response.data.products);
        });
    };
    getProducts();
  }, []);

  return (
    <div className="">
      <div className="pt-8">
        <ProductCategory />
      </div>
      <div className="">
        {produk ? (
          <div className="flex whitespace-normal gap-8 overflow-x-auto p-12">
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
      <Link to={"/products"} className="flex justify-center mt-4">
        <Button
          btnName="View All Products"
          jenis="primary"
          className="text-center"
        />
      </Link>
    </div>
  );
};

export default Homepage;
