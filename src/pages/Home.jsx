// src/pages/Home.jsx
import bgImg2 from "@/assets/homePic/bg2.jpg";
import Button from "@/components/Button";
import appImg from "@/assets/homePic/app.jpg";
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
      <div>
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
        <div>
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
    <div>
      snap insgihts care
      <div className="flex">
        <div>pic</div>
        <div>text</div>
      </div>
      <div className="flex">
        <div>pic</div>
        <div>text</div>
      </div>
      <div className="flex">
        <div>pic</div>
        <div>text</div>
      </div>
    </div>
    {/* introduce part2 */}
    <div>
      alarm talk commuinty
      <div className="flex">
        <div>pic</div>
        <div>text</div>
      </div>
      <div className="flex">
        <div>pic</div>
        <div>text</div>
      </div>
      <div className="flex">
        <div>pic</div>
        <div>text</div>
      </div>
    </div>
  </div>
);
export default Home;
