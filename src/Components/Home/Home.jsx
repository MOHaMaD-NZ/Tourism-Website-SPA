import React ,{useEffect}from "react";
import "./home.css";
import video from "../../Assets/v2.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="home">
      <div className="overlay"></div>

      <video src={video} autoPlay loop muted type="video/mp4"></video>

      <div className="homeContent container">
        <div data-aos="fade-up" className="textDiv">
          <span className="smallText">پکیج های ما</span>
          <h1 className="homeTitle">جاهای دیدنی ایران</h1>
        </div>
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">کجا دوست داری بری :</label>
            <div className="input flex">
              <input
                type="text"
                placeholder="      اسمش  رو  اینجا  وارد  کن...."
              />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">تاریخ مدنظر تو انتخاب کن :</label>
            <div className="input flex">
              <input type="date" name="" id="" />
            </div>
          </div>

          <div className="duz">
          <div className="label-total flex">
            <label className="price">حداکثر هزینه:</label>
            <h3 className="total">5میلیون تومان</h3>
            </div>
           <div className="input flex">
            <input  type="range" min="1میلیون تومان" max="5میلیون تومان" />
          </div>
          </div>
           
          <div className="searchOptions">
            <span>فیلتر های بیشتر</span>
            <HiFilter className="icon" />
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="leftIcons">
            <FaListUl className="icon" />
            <TbAppsFilled className="icon" />
          </div>

          <div className="rightIcons">
            <FiFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
