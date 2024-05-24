import React ,{useEffect} from "react";
import "./main.css";
import { CiLocationOn } from "react-icons/ci";
import { BsClipboardCheckFill } from "react-icons/bs";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";
import img11 from "../../Assets/img11.jpg";
import img12 from "../../Assets/img12.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';
        


const Data = [
  {
    id: 1,
    imgSrc: img1,
    desTitle: "قلعه بابک ",
    location: "تبریز",
    fees: "2میلیون تومان",
    description: ` این قلعه در ارتفاعی بین ۲۳۰۰ تا ۲۶۰۰ متری واقع شده و به وسیله دره‌های عمیقی احاطه شده است. در گذشته، قلعه بابک به عنوان یک قلعه حفاظتی در نبردها و
         جنگ‌هایی بین رهبران خرمدینان و عباسیان بنا شد.`,
  },

  {
    id: 2,
    imgSrc: img2,
    desTitle: "سیستم هیدرولیکی آبرسانی ",
    location: "شوشتر",
    fees: "3میلیون تومان",
    description: `سیستم آبرسانی باستانی شوشتر یکی از شاهکارهای مهندسی دوره هخامنشیان است. `,
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "چک چک",
    location: "اردکان",
    fees: "2میلیون تومان",
    description: `چک چک یا چکچکو معبدی زرتشتی در اردکان یزد است. این معبد مهم‌ترین زیارتگاه زرتشتیان در ایران محسوب می‌شود. بسیاری از زرتشتیان هر ساله از ۲۴ خرداد به مدت چهارده روز در این معبد جمع می‌شوند و به نیایش می‌پردازند. معابد زرتشتی بسیاری در یزد وجود دارند، اما معبد چک چک در میان زرتشیان شهرت فراوانی دارد.`,
  },

  {
    id: 4,
    imgSrc: img4,
    desTitle: "مقبره حافظ",
    location: "شیراز",
    fees: "4میلیون تومان",
    description: `اگر قصد دارید به دیدن مقبره یکی از شاعران ایران بروید، بدون شک آن شاعر، حافظ خواهد بود. در بهترین زمان سفر به شیراز، می‌توانید هنگام عصر اطراف مقبره و باغ پیرامون آن قدم بزنید و به جمع گردشگرانی که برای ادای احترام به این شاعر بلند آوازه ایرانی شعرهای حافظ را می‌خوانند بپیوندید و از بودن در این جمع لذت ببرید.`,
  },

  {
    id: 5,
    imgSrc: img5,
    desTitle: "خانه‌های تاریخی کاشان",
    location: "کاشان",
    fees: "4.5میلیون تومان",
    description: `سقف‌های زیبا، نقاشی‌های دیواری باشکوه، و حیاط‌های مملو از درختان انار همگی دلایل خوبی هستند تا شما را به خانه‌های تاریخی و باشکوه شهر کویری کاشان بکشانند. می‌توانید فصل بهار و قبل از گرم شدن هوا به کاشان سفر کنید و در فستیوال گلاب‌گیری این شهر نیز شرکت کنید.`,
  },

  {
    id: 6,
    imgSrc: img6,
    desTitle: "کویر",
    location: "لوت",
    fees: "5میلیون تومان",
    description: `کویر لوت نخستین جاذبه طبیعی ایران است که به ثبت میراث جهانی یونسکو رسیده و به مدت هفت سال گرم‌ترین نقطه جهان شناخته شد. این دشت لم یزرع و خالی از سکنه آرامشی غیرعادی و ژرف به همراه دارد.`,
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: "میدان نقش جهان",
    location: "اصفهان",
    fees: "3میلیون تومان",
    description: `میدان نقش جهان اصفهان که زمانی زمین چوگان خانواده سلطنتی بوده است، کاخ عالی قاپو، مسجد امام (مسجد شاه عباس)، مسجد شیخ لطف الله و بازار سلطنتی را در برگرفته. قطعا برای بازدید از این همه جاذبه تاریخی در کنار هم حداقل به یک روز زمان احتیاج خواهید داشت`,
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: " مسجد نصیر الملک",
    location: "شیراز",
    fees: "4میلیون تومان",
    description: `قدم زدن در مسجد نصیرالملک مانند قدم زدن در شهر فرنگ است. شیشه‌های رنگی پنجره‌های این مسجد همراه با تلالوء آفتاب فضایی مملو از نور و رنگ در این مسجد زیبا پدید می‌آورند. مسجد نصیرالملک که با نام مسجد صورتی نیز شناخته می‌شود با زوایای پنهانی که در هر گوشه خود دارد قطعا مکانی جذاب برای گردشگران است. مسجد نصیرالملک را می‌توان زیباترین مسجد ایران دانست.`,
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: " تخت جمشید",
    location: "شیراز",
    fees: "4میلیون تومان",
    description: `وصیه می‌شود که در سفر به ایران، اولین اولویت‌تان بازدید از تخت جمشید، به‌عنوان نخستین پایتخت امپراطوری و مهد فرهنگ ایران، باشد. این مکان بی‌نظیر به‌عنوان نمادی از افتخارات تاریخی کشور شناخته می‌شود. اگر این فرصت را از دست دهید و به دیدن تخت جمشید نروید و در ویرانه‌های این مکان باستانی قدم نگذارید، به‌طور قطع از زیبایی‌ها و تاریخ ایران بهره مند نخواهید شد.

`,
  },
  {
    id: 10,
    imgSrc: img10,
    desTitle: "برج‌ کبوترخانه",
    location: "میبد",
    fees: "2میلیون تومان",
    description: `با وجودی که بیشتر مردم به خصوص شهرنشینان، کبوتر را مایه دردسر می‌دانند، اما این پرنده حدود ۵ قرن پیش حیوانی کاملا ارزشمند در ایران بوده است، به خصوص فضولات این حیوان! برج‌های کبوترخانه به عنوان خانه این کبوتران ساخته می‌شد و در هر یک از این برج‌ها بیش از ۱۴۰۰۰ کبوتر نگهداری می‌شدند.`,
  },
  {
    id: 11,
    imgSrc: img11,
    desTitle: "قلعه رودخان",
    location: "رشت",
    fees: " 1.5میلیون تومان",
    description: `این مجموعه نظامی ابتدا در عصر ساسانی بنا شد و ساخت آن دو ماه طول کشید. اما چندین قرن بعد این قلعه دوباره بازسازی شد. قلعه رودخان به “قلعه هزار پله” نیز شهرت دارد چرا که برای رسیدن به بالای این قلعه باید پله‌های بسیاری را طی کنید، اما دیدن این قلعه زیبا در طبیعتی بی نظیر ارزش این پله نوردی را دارد.`,
  },
  {
    id: 12,
    imgSrc: img12,
    desTitle: "خانقاه و بقعه شیخ صفی الدین اردبیلی",
    location: "اردبیل",
    fees: "2.5میلیون تومان",
    description: `بقعه شیخ صفی الدین، عارف و پایه گذار خانقاه صفوی در شهر اردبیل قرار دارد. مقبره شیخ صفی الدین، کتابخانه، مسجد و مدرسه این سازه را تشکیل می‌دهند و معماری این بنا در تعامل کامل با اصول تصوف است. این مقبره یکی از میراث جهانی یونسکو محسوب می‌شود.`,
  },
];

const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">جاهای دیدنی بیشتر</h3>
      </div>
      <div className=" secContent grid">
        {Data.map(({ id, imgSrc, desTitle, location, fees, description }) => {
          return (
            <div data-aos="fade-up" key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={desTitle} />
              </div>

              <div className="cardInfo">
                <div className="desTitle">{desTitle}</div>s
                <span className="place">
                  <CiLocationOn className="icon" />
                  <span className="name">{location}</span>
                </span>
                <div className="fees flex">
                  <span>هزینه سفر :</span>
                  <h5>{fees}</h5>
                </div>
                <div className="desc">
                  <p>{description}</p>
                </div>
                <button className="btn flex">
                  جزییات <BsClipboardCheckFill className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
