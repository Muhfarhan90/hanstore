import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Detail from "../components/Detail";
import Loading from "../loading";
const ProductDetail = () => {
  const { id } = useParams();
  const [produk, setProduk] = useState(null);

  useEffect(() => {
    try {
      axios
        .get(`https://fakestoreapi.in/api/products/${id}`)
        .then((response) => {
          setProduk(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  console.log(produk);
  return (
    <div>
      {produk ? (
        <Detail
          gambar={produk.product.image}
          title={produk.product.title}
          price={produk.product.price}
          desc={produk.product.description}
          warna={produk.product.color}
        />
      ) : (
        <div className="text-center justify-center flex mt-20">
          <Loading type={"spin"} color={"#000"} />
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
