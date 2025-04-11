import "./App.css";
import I1 from "./assets/foodman.png";
import I2 from "./assets/Vector (17).png";
import I3 from "./assets/pizza 1.png";
import I4 from "./assets/sandwich 1.png";
import I5 from "./assets/sandwich 1 (1).png";
import I6 from "./assets/dish 1.png";
import I7 from "./assets/item_01-480x480 1.png";
import I8 from "./assets/Star.png";
import I9 from "./assets/Burger.png";
import I10 from "./assets/Star (1).png";
import I11 from "./assets/item_01-480x480 1 (1).png";
import I12 from "./assets/item_01-480x480 1 (2).png";
import I13 from "./assets/item_01-480x480 1 (3).png";
import I14 from "./assets/food delivery 4.png";
import I15 from "./assets/Timer icon.png";
import I16 from "./assets/Delivery icon.png";
import I17 from "./assets/Resturent icon.png";
import I18 from "./assets/Rectangle 53.png";
import I19 from "./assets/Rectangle 53 (1).png";
import I20 from "./assets/Rectangle 53 (2).png";
import I21 from "./assets/Store=App Store, Style=Black.png";
import I22 from "./assets/Store=Google Play, Style=Black (1).png";
import I23 from "./assets/Group 178.png";
import I24 from "./assets/Rectangle 8 (2).png";
import I25 from "./assets/“ (1).png";
import I26 from "./assets/“ (2).png";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const App = () => {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [category, setCategory] = useState("burger");
    const API = `http://localhost:3000/${category}`;

    const API2 = `http://localhost:3000/restaurant`
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log(err.message));
  }, [category]);


  useEffect(() => {
    fetch(API2)
      .then((res2) => res2.json())
      .then((d2) => setData2(d2))
      .catch((err) => console.log(err.message));
  }, [category]);

  

  return (
    <div className="div">
      <header>
        <div className="head1">
          <div className="head_p">
            <p className="e">E</p>
            <p>Food</p>
          </div>
        </div>
        <div className="head1 ha">
          <ul>
            <li>
              <a className="home" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Top cities</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="head1 h2">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-solid fa-cart-shopping"></i>
          <button>Sign Up</button>
        </div>
      </header>

      <div className="food" >
        <div className="food1">
          <h1>
            Super Fast <span className="f">Food Delivery</span> Service
          </h1>
          <p>
            We provide super fast-delivery service. Let’s use our services right
            now and get discounts of up to 50%
          </p>
          <div className="btn">
            <button>Explore Food</button>
            <a href="">Dowland App</a>
          </div>
        </div>
        <div className="food2">
          <img src={I1} alt="" />
        </div>
      </div>

      <h1 className="our">
        Our Popular <span className="sc">Category</span>
      </h1>

      <div className="foods"  data-aos="fade-up">
        <div className="foods_i">
            <button  className="pizza" onClick={() => setCategory("burger")}>
            <img src={I2} alt="" />
            Burger
            </button>
            <button  className="pizza" onClick={() => setCategory("pizza")}>
            <img src={I3} alt="" />
            Pizza
            </button>

            <button  className="pizza" onClick={() => setCategory("sandwich")}>
            <img src={I4} alt="" />
            Sandwich
            </button>
            <button  className="pizza" onClick={() => setCategory("asian")}>
            <img src={I5} alt="" />
            Asian food
            </button>
            <button  className="pizza" onClick={() => setCategory("menu")}>
            <img src={I6} alt="" />
            All Menu
            </button>
        </div>

        <div className="fast_food">

          {data.length && data.map((d, i) => (
            <div className="burger" key={i}>
              <img src={d.image} alt="" />
              <img src={d.starImg} alt="" />
              <p>{d.description}</p>
              <p>${d.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}

        </div>
      </div>

     

      <div className="stay"  data-aos="fade-right">
        <div className="stay_img">
          <img src={I14} alt="" />
        </div>
        <div className="stay_text">
          <h1>
            <span>Stay</span> At Home, We Will Provide <span>Good Food</span>
          </h1>
          <p>
            We provide tasty food and superfast delivery at your home. Let’s use
            our services right now and get discounts of up to 50%.
          </p>

          <div className="st_t">
            <span>
              <img src={I15} alt="" />
              <p>Fasted Delivery in 30 Minutes</p>
            </span>

            <span className="del">
              <img src={I16} alt="" />
              <p>300+ delivery men</p>
            </span>

            <span>
              <img src={I17} alt="" />
              <p>500+ restaurant & cafe shop</p>
            </span>
          </div>
          <button>See More</button>
        </div>
      </div>

      <h1 className="our">
        Top Food<span className="sc">Restaurant</span>
      </h1>

      <div className="restaurant"  data-aos="fade-left">
        <div className="rest">
          {data2.length && data2.map((d,i) =>{
            return( 

             <div className="rest01" key={i}>
             <img src={d.image} alt="" />
             <p className="b">{d.resName}</p>
             <span>
               <i className="fa-regular fa-clock"></i>
               <p>{d.description}</p>
               <button style={{color:'white'}}>
                 <i className="fa-solid fa-arrow-right-long"></i>
               </button>
             </span>
           </div>
          )}) }
        </div>
      </div>

      <div className="app" data-aos="flip-up">
        <div className="app01">
          <h1>
            Download Our <span> Mobile App</span>
          </h1>
          <p>
            It's all at your fingertips -- the restaurants you love. Find the
            right food to suit your mood, and make the first bite last. Go
            ahead, download app and get 50% discount
          </p>
          <div className="image">
            <img src={I21} alt="" />
            <img src={I22} alt="" />
          </div>
        </div>

        <div className="app02">
          <img src={I23} alt="" />
        </div>
      </div>

      <h1 className="our">
        What Our Client Are <span className="sc">Saying</span>{" "}
      </h1>

      <div className="what" data-aos="zoom-in">
        <div className="what1">
          <img src={I24} alt="" />
        </div>
        <div className="what2">
          <p>
            <img src={I25} alt="" /> EFood has the most intriguing food order
            system in the country. UI in both their app and web Is very simple
            and easy to use, enhancing the UX. Their delivery men are also quite
            professional and knows the neighborhood well. Till now I never had
            to guide them to my address for delivery; <img src={I26} alt="" />
          </p>

          <div className="what02">
            <span>
              <p>Anglina Jole</p>
              <p>Food lover</p>
            </span>
            <span>
              <i className="fa-solid fa-arrow-left-long"></i>
              <i className="fa-solid fa-arrow-right-long"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="inputs">
        <h1>Subscribe to get the Latest Offer</h1>
        <p>
          Get our daily updates by subscribing to our newspaper, please drop
          your email below
        </p>
      </div>

      <footer>
        <div className="foot1">
          <p>
            <span className="fp">E</span>Food
          </p>
          <span className="f_i">
            <i className="fa-solid fa-location-dot"></i>
            <p>Dhaka, Bangladesh</p>
          </span>
          <span className="f_i">
            {" "}
            <i className="fa-solid fa-phone-volume"></i>
            <p>0943833399</p>
          </span>
          <span className="f_i">
            {" "}
            <i className="fa-regular fa-envelope"></i>
            <p>support@efood.com</p>
          </span>
          <span className="s_i">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-pinterest"></i>
          </span>
        </div>
        <div className="foot2">
          <p className="fp02">Service</p>
          <p>How it works</p>
          <p>Home deliver</p>
          <p>Prducts</p>
          <p>Menu</p>
        </div>
        <div className="foot2">
          <p className="fp02">Company</p>
          <p>About Us</p>
          <p>News</p>
          <p>Our trusted partner</p>
          <p>New users FAQ</p>
        </div>
        <div className="foot2">
          <p className="fp02">Supports</p>
          <p>Help center</p>
          <p>Feedbcak</p>
          <p>Contact Us</p>
          <p>Terms conditins</p>
        </div>
        <div className="foot2">
          <p className="fp02">Resources</p>
          <p>Dowland app</p>
          <p>Blog</p>
          <p>Wht's new</p>
          <p>Sitemap</p>
        </div>
      </footer>
      <hr />
      <footer className="footer">
        <div className="foot01">
          <p>© 2021 EFood - All rights reserved.</p>
        </div>
        <div className="foot02">
          <p>Privacy</p>
          <p>Security</p>
          <p>Terms</p>
        </div>
      </footer>
    </div>

    // </div>
  );
};

export default App;
