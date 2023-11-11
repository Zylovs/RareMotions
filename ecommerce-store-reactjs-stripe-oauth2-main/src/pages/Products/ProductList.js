import React from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import AddToCart from "../../components/Cart/AddToCart";
import PageHero from "../../components/PageHero/PageHero";
import "../../App.css";

const ProductList = () => {
  const { products } = useProductsContext();
  return (
    <>
      <PageHero item={products.length} name="PRODUCTS" />
      <div className="cocktails-center">
        {products.map((product) => {
          const { id, image, name, price } = product;
          return (
            <article key={id} className="cocktail">
              <div className="img-container">
                <img src={image} alt={name} />
              </div>
              <div className="cocktail-footer">
                <div className="product">
                  <h4>{name}</h4>
                  <h4 className="price">${price}</h4>
                </div>
                
                <AddToCart product={product} />
                <Link
                  to={`/products/${id}`}
                  className="add-cart"
                  style={{
                    color: "#17252A",
                    background: "#fff",
                    border: "2px solid #17252A",
                  }}
                >
                  {/*className="prod-details">*/}
                  View
                </Link>
              </div>
            </article>
            
          );
        })}
      </div>

      <footer className="section-p1">
        <div className="col">
          <img src="https://cdn.discordapp.com/attachments/999453454026158170/1157059860895125646/1AD10FDC-DF55-4F1A-BB1A-6CC734BBDEDE.jpg?ex=655fbdf7&is=654d48f7&hm=9705b4a5917acd3340b99438c18257e53c74ba54d8d9796fe6bdf795fd4731a7&" alt="Logo" className="Logo" />
          <h4>Contact</h4>
          <div className="follow">
            <h4>Follow US</h4>
            <div className="icon">
              <i className="fa fa-facebook-f"></i>
              <i className="fa fa-twitter"></i>
              <a href="https://instagram.com/raremotions.stwr?igshid=MzRlODBiNWFlZA=="><i className="fa fa-instagram"></i></a>
              <i className="fa fa-pinterest-p"></i>
              <i className="fa fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="col">
          <h4>About US</h4>
          <a href="#">About US</a>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact US</a>
        </div>

        <div className="col install">
          <p>Secured Payment Gateways</p>
          <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172921613650509824/pay.png?ex=65621360&is=654f9e60&hm=8578c143c20f275b5ccb6827563b8e81ec58b6c423da68c19666866afec7909c&" alt="pay" />
        </div>

        <div className="copyright">
          <p> © 2023 RareMotions</p>
        </div>
      </footer>
    </>
  );
};
export default ProductList;
