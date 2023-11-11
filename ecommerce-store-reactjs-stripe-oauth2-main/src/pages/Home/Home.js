import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://kit.fontawesome.com/4bc7eacd5b.js" crossOrigin="anonymous"></script>
      <link rel="stylesheet" href="/Server/public/index.html" />
      <title>RareMotions Store</title>
    </head>

    <body>
      <section id="hero">
        <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172919747420110938/red-lightning.gif?ex=656211a3&is=654f9ca3&hm=d84368e7846c84a04f025f7d582141229254e9765ba7c4c117caf2959f47e7ae&" alt="" className="gif" />
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <div className="pro-container">
          {/* Product 1 */}
          <div className="pro">
            <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172907876164055152/product1.jpg?ex=65620695&is=654f9195&hm=165ded8fb54b731ecf8e600fcb9485f5910b15df6366c39f997c3efb5524f7ee&" alt="" />
            <div className="des">
              <span>RareMotions</span>
              <h5>White with black letters Hoodie</h5>
              <h4>Coming Soon...</h4>
            </div>
          </div>
          {/* Product 2 */}
          <div className="pro">
            <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172907876587687996/product2.jpg?ex=65620695&is=654f9195&hm=b0b3f7108a95cdc9a8cab99e5962a0e47a5c3ead99cd3a2d80a9145e15e97a16&
" alt="" />
            <div className="des">
              <span>RareMotions</span>
              <h5>Black with white letters Hoodie</h5>
              <h4>Coming Soon...</h4>
            </div>
          </div>

          {/* Product 3 */}
          <div className="pro">
            <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172907876956782682/product3.jpg?ex=65620695&is=654f9195&hm=02a5a2343aa350b065578ddbd17951b5a13b13e8a19fd6e922703796dfb827af&" alt="" />
            <div className="des">
              <span>RareMotions</span>
              <h5>Pink with black letters</h5>
              <h4>Coming Soon...</h4>
            </div>
          </div>

          {/* Product 4 */}
          <div className="pro">
            <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172907875660746803/product4.jpg?ex=65620695&is=654f9195&hm=93b280ef6f626be88620d58227a4bd7d1e258f54b4cea2e9f5798bd8e58c1609&" alt="" />
            <div className="des">
              <span>RareMotions</span>
              <h5>White with red letters Hoodie</h5>
              <h4>Coming Soon...</h4>
            </div>
          </div>
        </div>
      </section>
        
      <section id="product1" className="section-p1">
      <h2>Pictures</h2>
      <div className="pro-container">
        <div className="pro">
          <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172957928446246953/blacknwhite.jpg?ex=65623532&is=654fc032&hm=f134311fcbd61e3e8dc2702dd3ce93074398c3276e37c72bed44e652031f808c&" alt="" />
        </div>
        <div className="pro">
          <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172957925908684901/blacknwhite2.jpg?ex=65623532&is=654fc032&hm=3e79e34c5ff35644cc26f1341149f357a1c3b1f5d95efc49cdbf6d0467ae2ccc&" alt="" />
        </div>
        <div className="pro">
          <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172957926533644358/blacknwhite3.jpg?ex=65623532&is=654fc032&hm=9765b20deea13da889d753a815e63149cb38b3ef093a5d627b2496c9ede4bd4e&" alt="" />
        </div>
        <div className="pro">
          <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172957926948872263/groupPic.jpg?ex=65623532&is=654fc032&hm=96f071ec2625b4375ff50bb14150cb83cc3267bd02b21e8988fc31fdf63ade6f&" alt="" />
        </div>
        <div className="pro">
          <img src="https://cdn.discordapp.com/attachments/999453454026158170/1172957927586418798/groupPic2.jpg?ex=65623532&is=654fc032&hm=e02918b55263cc516a2ab9b57dc6c046451ab52d3aaaf34530d01c8e469a53a4&" alt="" />
        </div>
      </div>
    </section>



      {/* Add sections for "New Arrivals" and "Pictures" similarly */}

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
          <p> &copy; 2023 RareMotions</p>
        </div>
      </footer>
    </body>
  </div>
  );
}
