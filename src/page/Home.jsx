import Image from "../assets/profile.png";
import Card1 from "../assets/Cube.png";
import Card2 from "../assets/Website.png";
import Card3 from "../assets/Webapp.png";
import Works from "../assets/work.png";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
AOS.init();
export default function Home() {

  const [stars, setStars] = useState([]);
  useEffect(() => {
    const generatedStars = [];
    for (let i = 0; i < 200; i++) {
      generatedStars.push({
        id: i,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        animationDuration: `${Math.random() * 3 + 1}s`,
      });
    }
    setStars(generatedStars);
  }, []);

  const navigate = useNavigate();

  const onClickPage = () => {
    navigate("/work");
  };
  const onClickPage2 = () => {
    navigate("/aboutme");
  }
  return (
    <div className="relative">
      <div className="absolute w-full h-screen bg-black overflow-hidden flex items-center justify-center">
        <div className="absolute w-full h-screen bg-black overflow-hidden">
          {stars.map(({ id, left, top, animationDuration }) => (
            <div
              key={id}
              className="star"
              style={{
                left,
                top,
                animationDuration,
              }}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto text-center fade-up" data-aos="fade-up" data-aos-duration="1000">
        <div className="h-screen w-full flex justify-center items-center">
          <h2 className="z-10 p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
            Mblender3D
          </h2>
        </div>
        <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent" id="about">
          Aboutme
        </h2>
        <div className="max-w-5xl mx-auto mt-10 md:flex items-center justify-between gap-6 column-3 fade-up" data-aos="fade-up" data-aos-duration="1000">
          <img src={Image} alt="Profile" className="px-5 rounded-full md:w-1/2 md:h-1/2 object-cover aspect-square" />
          <div className="md:text-left md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-900">自己紹介</h3>
            <h4 className="">天野実来(早稲田大学人間科学部人間情報科学科1年)</h4>
            <p className="px-5 mt-2 text-base text-gray-600">
              N高等学校在籍時に培ったプログラミングや3DCGスキルを活かし、WebサイトやWebアプリケーションの制作等を個人で手がけながら法人化を目指している。また、高校時代にXRを活用した教育事例に強い関心を持ち、その経験を通じて教育格差のない社会を実現するための活動に注力している。
            </p>
            <button onClick={onClickPage2} className="mt-4 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
              詳しくはこちら</button>
          </div>
        </div>
        <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="skills">
          Skills
        </h2>
        <div className="container mx-auto px-4 mt-10 flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="my-2 max-w-sm mx-auto rounded overflow-hidden shadow-md flip-up" data-aos="flip-up" data-aos-duration="500">
            <img class="w-2/3 mx-auto" src={Card1} alt="Sunset in the mountains"></img>
            <div class="py-4">
              <div class="font-bold text-xl mb-2">3DCG、ゲーム制作</div>
              <p class="px-2 text-gray-700 text-base">
                高校一年生の時にBlenderで3DCG制作を始める。その後Booth,Clusterで3DCGデータ販売を始め、収益化を達成。
                Unityを使用してゲーム制作を行っている。
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Unity</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Blender</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
          <div class="my-2 mx-auto max-w-sm rounded overflow-hidden shadow-md flip-up" data-aos="flip-up" data-aos-duration="1000">
            <img class="w-2/3 mx-auto" src={Card2} alt="Sunset in the mountains"></img>
            <div class="py-4">
              <div class="font-bold text-xl mb-2">Webサイト制作</div>
              <p class="px-2 text-gray-700 text-base">
                高校1年生よりHTML/CSSでの開発を始める。<br></br>
                Wordpress等のCMSを使用したWebサイト制作やGithubの共同開発を行い、現在はReact＋Viteでの開発経験を積んでいる。
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JS</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#TailwindCSS</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Wordpress</span>
            </div>
          </div>
          <div class="my-2 mx-auto max-w-sm rounded overflow-hidden shadow-md flip-up" data-aos="flip-up" data-aos-duration="1500">
            <img class="w-2/3 mx-auto" src={Card3} alt="Sunset in the mountains"></img>
            <div class="py-4">
              <div class="font-bold text-xl mb-2">Webアプリケーション制作</div>
              <p class="px-2 text-gray-700 text-base">
                高校2年生よりReactAppを使用したWebアプリケーション制作を始める。
                現在はSupabaseを使用したデータベース管理や、APIを使用したアプリケーション開発を行っている。
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vite</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
            </div>
          </div>
        </div>
        <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10">
          Work
        </h2>
        <div className="max-w-5xl mx-auto my-10 md:flex items-center justify-between gap-6 column-3 fade-up" data-aos="fade-up" data-aos-duration="1000">
          <img src={Works} alt="Profile" className="md:w-1/2 md:h-1/2 object-cover aspect-square" />
          <div className="md:text-left md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-900 hidden md:block">Work</h3>
            <p className="mt-2 text-base text-gray-600">
              歴代の制作物をご覧いただけます。
            </p>
            <button onClick={onClickPage} className="mt-4 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed">
              一覧はこちら</button>
          </div>
        </div>
      </div>
    </div>
  )
}
