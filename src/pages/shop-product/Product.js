import React, { Fragment,useState,useEffect } from "react"; 
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";

const Product = () => {
  let { pathname } = useLocation();
  // let { id } = useParams();
  // const { products } = useSelector((state) => state.product);
  // const product = products.find(product => product.id === id);

// api code
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);


useEffect(() => {
  fetch(`https://fakestoreapi.com/products`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(()=>{
      setLoading(false);
    })
}, []);

console.log(data)
  

  return (
    <Fragment>
      <SEO
        titleTemplate="Product Page"
        description="Product Page of flone react minimalist eCommerce template."
      />

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb 
          pages={[
            {label: "Home", path: process.env.PUBLIC_URL + "/" },
            {label: "Shop Product", path: process.env.PUBLIC_URL + pathname }
          ]} 
        />

        {/* product description with image */}
        <ProductImageDescription
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          product={data.image}
        />

        {/* product description tab */}
        <ProductDescriptionTab
          spaceBottomClass="pb-90"
          productFullDesc={data.description}
        />

        {/* related product slider */}
        <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={data.category[0]}
        />
      </LayoutOne>
    </Fragment>
  );
};

export default Product;
