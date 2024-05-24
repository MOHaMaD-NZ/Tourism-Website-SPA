import React,{useEffect}  from "react";
import "./footer.css";
import video from "../../Assets/v1.mp4";
import { FiSend } from "react-icons/fi";
import { MdCardTravel } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import Aos from 'aos';
import 'aos/dist/aos.css';
        


const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small>ایده آل ترین و مقرون به صرفه ترین</small>
            <h2>با ما سفر کنید</h2>
          </div>
          <div className="inputDiv flex">
            <input type="email" placeholder="    ایمیل ت رو وارد کن...." />
            <button className="btn flex" type="submit  ">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div data-aos="fade-up"  className="footerBottom">
          <div className="logoDiv">
            <a href="#">
              <MdCardTravel className="icon" />
              <span>NZ</span>
            </a>
          </div>

          <div className="footerP">
            <div className="pTitle">درباره ما</div>
            <div className="p">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد،
              </p>
            </div>
          </div>
          <div className="footerSocials">
            <FaInstagram className="icon" />
            <PiTelegramLogoLight className="icon" />
            <CiTwitter className="icon" />
            <CiLinkedin className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
