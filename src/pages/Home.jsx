// src/pages/Home.jsx
import bgImg from "@/assets/homePic/bg.jpg";
import bgImg2 from "@/assets/homePic/bg2.jpg";
import Button from "@/components/Button";
import appImg from "@/assets/homePic/app.jpg";
import scan from "@/assets/homePic/scan.png";
import monstera2 from "@/assets/homePic/monstera2.jpg";
import soil from "@/assets/homePic/soil.png";
import plant from "@/assets/homePic/plant.png";
import writing from "@/assets/homePic/writing.png";
import specialist from "@/assets/homePic/specialist.png";
import planting from "@/assets/homePic/planting.png";
import edibleFlower from "@/assets/homePic/3.jpg";

const Home = () => {
  return (
    <div className="">
      {/* banner pic */}
      <div
        className=" bg-cover bg-center bg-local bg-no-repeat h-screen w-full"
        style={{ backgroundImage: `url(${edibleFlower})` }}
      >
        <div className="relative z-20 text-white text-5xl text-center pt-24 drop-shadow-lg">
          <div className="mt-40 text-white hadow-sm">
            <div className="tracking-widest">"Grow Smart, Anywhere!</div>
            <div className="tracking-widest">🌿 Snap, Scan, Thrive"</div>
            <p className="tracking-widest">Your Urban Garden Companion</p>
            <Button className="mt-8" size="bannerBtn">
              explore
            </Button>
            <div className="mt-8">
              <input
                className="inline-block border-black border-2 rounded-lg h-12 w-60 text-base mr-2 placeholder:text-sm"
                placeholder="enter your Email to keep in touch"
              ></input>
              <Button size="introBtn">Get Newsletter</Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      </div>
      {/* mobile app */}
      <div className="flex text-white bg-[#24401a] py-20">
        <div className=" ml-12">
          <div className="text-6xl">
            <div className="py-2">UrbanGrow: </div>
            <div className="py-2">Smart Sustainable</div>
            <div className="py-2">Innovation</div>
          </div>
          <div className="text-xs">
            UrbanGrow is revolutionizing urban farming with AI, making it easy
            for anyone to grow their own food. From snap a photo to a thriving
            community, we help you nurture healthy plants— whether indoors or
            outdoors. Start growing smarter with UrbanGrow today!
          </div>
        </div>
        <div>
          <div className="mr-12">
            <img src={appImg} />
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* text */}
      <div className="text-center text-sm bg-[#3c5f2b] py-6">
        DISCOVER INSIGHTFUL REASONS TO CHOOSE URBANGROW
      </div>
      {/* introduce part1 */}
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${monstera2})` }}
      >
        {/* snap */}
        <div className="w-full flex justify-start px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 w-full">
            {/* pic part */}
            <img
              src={scan}
              alt="Scan"
              className="w-56 h-56 rounded-3xl object-cover"
            />

            {/* right side：text + button */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-56 w-full">
              <h2 className="text-2xl font-bold mb-2">
                "Snap a Pic, Let AI Do the Rest!"
              </h2>
              <p className="mb-6">
                Instantly analyze your plant’s health with a simple scan.
              </p>
              <Button size="introBtn" className="w-auto">
                SCAN A PLANT
              </Button>
            </div>
          </div>
        </div>
        {/* ai */}
        <div className="w-full flex justify-center lg:justify-end px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-8 w-fit">
            {/* pic part */}
            <img
              src={plant}
              alt="plant"
              className="w-56 h-56 rounded-3xl object-cover"
            />

            {/* right side：text + button */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-56">
              <h2 className="text-2xl font-bold mb-2">
                "Smart Insights for Healthier Plants!"
              </h2>
              <p className="mb-6">
                Get instant AI-powered analysis to detect diseases, pests, and
                deficiencies.
              </p>
            </div>
          </div>
        </div>
        {/* ai 2 */}
        <div className="w-full flex px-4 py-12">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 w-full">
            {/* pic part */}
            <img
              src={soil}
              alt="soil"
              className="w-56 h-56 rounded-3xl object-cover"
            />

            {/* content part */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center h-56 w-full">
              <h2 className="text-2xl font-bold mb-2">
                "The Right Care, Right Away!"
              </h2>
              <p className="mb-6">
                Personalized product suggestions to keep your plants thriving
              </p>
              <Button size="introBtn" className="w-auto mx-auto lg:mx-0">
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------introduce part2------------ */}
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* snap */}
        <div className="w-full flex justify-start px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-8 w-full">
            {/* pic part */}
            <img
              src={writing}
              alt="writing"
              className="w-56 h-56 rounded-3xl object-cover"
            />

            {/* right side：text + button */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-56 w-full">
              <h2 className="text-2xl font-bold mb-2">
                "Never Forget to Water Again!"
              </h2>
              <p className="mb-6">
                Set smart reminders for watering, fertilizing, and temperature
                checks.
              </p>
              <Button size="introBtn" className="w-auto mx-auto lg:mx-0">
                SET REMINDER
              </Button>
            </div>
          </div>
        </div>
        {/* ai */}
        <div className="w-full flex justify-center lg:justify-end px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-8 w-fit">
            {/* pic part */}
            <img
              src={specialist}
              alt="specialist"
              className="w-56 h-56 rounded-3xl object-cover"
            />

            {/* right side：text + button */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-56">
              <h2 className="text-2xl font-bold mb-2">
                "Talk to Plant Gurus!"
              </h2>
              <p className="mb-6">
                Get real advice from horticulturists and plant experts when you
                need it.
              </p>
              <Button size="introBtn" className="w-auto mx-auto lg:mx-0">
                CONSULT AN EXPERT
              </Button>
            </div>
          </div>
        </div>
        {/* ai 2 */}
        <div className="w-full flex px-4 py-12">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 w-full">
            {/* pic part */}
            <img
              src={planting}
              alt="planting"
              className="w-56 h-56 rounded-3xl object-cover"
            />

            {/* content part */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center h-56 w-full">
              <h2 className="text-2xl font-bold mb-2">
                "Grow Together, Learn Together!"
              </h2>
              <p className="mb-6">
                Share experiences, tips, and plant love with fellow urban
                gardeners
              </p>
              <Button size="introBtn" className="w-auto mx-auto lg:mx-0">
                JOIN NOW!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
