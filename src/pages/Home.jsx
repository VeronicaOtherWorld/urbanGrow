// src/pages/Home.jsx
import bgImg2 from "@/assets/homePic/bg2.jpg";
import Button from "@/components/Button";
import appImg from "@/assets/homePic/app.png";
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
    <div className="flex">
      <div>
        left side
        <div>UrbanGrow: </div>
        <div>Smart Sustainable</div>
        <div>Innovation</div>
        <div className="text-xs">
          UrbanGrow is revolutionizing urban farming with AI, making it easy for
          anyone to grow their own food. From snap a photo to a thriving
          community, we help you nurture healthy plants— whether indoors or
          outdoors. Start growing smarter with UrbanGrow today!
        </div>
      </div>
      <div>
        right side
        <div>
          <img src={appImg} />
        </div>
        <div>four clove</div>
        <div>pot plant</div>
        <div>flower</div>
      </div>
    </div>
    {/* text */}
    <div>DISCOVER INSIGHTFUL REASONS TO CHOOSE URBANGROW</div>
    {/* introduce part1 */}
    <div>snap insgihts care</div>
    {/* introduce part2 */}
    <div>alarm talk commuinty</div>
  </div>
);
export default Home;
