// src/pages/Home.jsx
import bgImg from "@/assets/homePic/bg.jpg";
import bgImg2 from "@/assets/homePic/bg2.jpg";
import Button from "@/components/Button";
import appImg from "@/assets/homePic/app.jpg";
import scan from "@/assets/homePic/scan.png";
import monstera2 from "@/assets/homePic/monstera2.jpg";
const Home = () => (
  <div className="">
    {/* banner pic */}
    <div
      className=" bg-cover bg-center bg-local bg-no-repeat h-screen w-full"
      style={{ backgroundImage: `url(${bgImg2})` }}
    >
      <div className="text-white text-2xl text-center pt-24">
        <div className="mt-40 text-black">
          <div>"Grow Smart, Anywhere!</div>
          <div>🌿 Snap, Scan, Thrive"</div>
          <p>Your Urban Garden Companion</p>
          <Button size="bannerBtn">explore</Button>
        </div>
      </div>
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
          UrbanGrow is revolutionizing urban farming with AI, making it easy for
          anyone to grow their own food. From snap a photo to a thriving
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
              1
            </Button>
          </div>
        </div>
      </div>
      {/* ai */}
      <div className="w-full flex justify-center lg:justify-end px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-8 w-fit">
          {/* pic part */}
          <img
            src={scan}
            alt="Scan"
            className="w-56 h-56 rounded-3xl object-cover"
          />

          {/* right side：text + button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-56">
            <h2 className="text-2xl font-bold mb-2">
              "Snap a Pic, Let AI Do the Rest!"
            </h2>
            <p className="mb-6">
              Instantly analyze your plant’s health with a simple scan.
            </p>
          </div>
        </div>
      </div>
      {/* ai 2 */}
      <div className="w-full flex px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 w-full">
          {/* pic part */}
          <img
            src={scan}
            alt="Scan"
            className="w-56 h-56 rounded-3xl object-cover"
          />

          {/* content part */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center h-56 w-full">
            <h2 className="text-2xl font-bold mb-2">
              "Snap a Pic, Let AI Do the Rest!"
            </h2>
            <p className="mb-6">
              Instantly analyze your plant’s health with a simple scan.
            </p>
            <Button size="introBtn" className="w-auto mx-auto lg:mx-0">
              1
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
              1
            </Button>
          </div>
        </div>
      </div>
      {/* ai */}
      <div className="w-full flex justify-center lg:justify-end px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-center gap-8 w-fit">
          {/* pic part */}
          <img
            src={scan}
            alt="Scan"
            className="w-56 h-56 rounded-3xl object-cover"
          />

          {/* right side：text + button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-56">
            <h2 className="text-2xl font-bold mb-2">
              "Snap a Pic, Let AI Do the Rest!"
            </h2>
            <p className="mb-6">
              Instantly analyze your plant’s health with a simple scan.
            </p>
          </div>
        </div>
      </div>
      {/* ai 2 */}
      <div className="w-full flex px-4 py-12">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 w-full">
          {/* pic part */}
          <img
            src={scan}
            alt="Scan"
            className="w-56 h-56 rounded-3xl object-cover"
          />

          {/* content part */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center h-56 w-full">
            <h2 className="text-2xl font-bold mb-2">
              "Snap a Pic, Let AI Do the Rest!"
            </h2>
            <p className="mb-6">
              Instantly analyze your plant’s health with a simple scan.
            </p>
            <Button size="introBtn" className="w-auto mx-auto lg:mx-0">
              1
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
