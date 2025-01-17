import axios from "axios";
import Loading from "../loading";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ProductCategory from "./ProductCategory";

const ProductByCategory = () => {
  const [category, setCategory] = useState([]);
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  useEffect(() => {
    const getProductByCategory = async () => {
      await axios
        .get(`https://fakestoreapi.in/api/products/category?type=${type}`)
        .then((response) => {
          setCategory(response.data.products);
        });
    };
    getProductByCategory();
  }, [type]);
  console.log(category);
  return (
    <div>
      <div className="pt-8">
        <ProductCategory />
      </div>
      <div>
        {category ? (
          <div className="flex whitespace-normal gap-8 flex-wrap p-12 mx-10">
            {category.map((categories) => {
              return <Card key={categories.id} product={categories} />;
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

export default ProductByCategory;
