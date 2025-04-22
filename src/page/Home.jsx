import Image from "../assets/profile.png";
import Card1 from "../assets/Cube.png";
import Card2 from "../assets/Website.png";
import Card3 from "../assets/Webapp.png";
import Works from "../assets/work.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Home() {
  const navigate = useNavigate();

  const onClickPage = () => {
    navigate("/work");
  };
  return (
    <div className="relative">
      <div className="area w-full h-screen absolute bg-gradient-to-l from-[#8f94fb] to-[#4e54c8] -z-10">
        <ul className="circles relative w-full h-full overflow-hidden">
          <li className="circle circle1"></li>
          <li className="circle circle2"></li>
          <li className="circle circle3"></li>
          <li className="circle circle4"></li>
          <li className="circle circle5"></li>
          <li className="circle circle6"></li>
          <li className="circle circle7"></li>
          <li className="circle circle8"></li>
          <li className="circle circle9"></li>
          <li className="circle circle10"></li>
        </ul>
      </div>
      <div className="mx-auto text-center fade-in" data-aos="fade-up" data-aos-duration="1000">
        <div className="h-screen w-full flex justify-center items-center">
          <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent">
            Mblender3D
          </h2>
        </div>
        <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent" id="about">
          Aboutme
        </h2>
        <div className="max-w-5xl mx-auto mt-10 flex items-center justify-between gap-6 column-3" data-aos="fade-up" data-aos-duration="1000">
          <img src={Image} alt="Profile" className="rounded-full w-1/2 h-1/2" />
          <div className="text-left w-1/2">
            <h3 className="text-lg font-semibold text-gray-900">自己紹介</h3>
            <h4 className="">天野実来(早稲田大学人間科学部人間情報科学科1年)</h4>
            <p className="mt-2 text-base text-gray-600">
              N高等学校在籍時に培ったプログラミングや3DCGスキルを活かし、WebサイトやWebアプリケーションの制作等を個人で手がけながら法人化を目指している。また、高校時代にXRを活用した教育事例に強い関心を持ち、その経験を通じて教育格差のない社会を実現するための活動に注力している。
            </p>
          </div>
        </div>
        <h2 className="p-3 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-6xl font-bold tracking-tight text-transparent mt-10" id="skills">
          Skills
        </h2>
        <div className="w-100 max-w-6xl mx-auto mt-10 flex items-center justify-evenly columns-3">
          <div class="w-[30%] max-w-sm rounded overflow-hidden shadow-lg" data-aos="flip-up" data-aos-duration="500">
            <img class="w-2/3 mx-auto" src={Card1} alt="Sunset in the mountains"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">3DCG、ゲーム制作</div>
              <p class="text-gray-700 text-base">
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
          <div class="w-[30%] max-w-sm rounded overflow-hidden shadow-lg" data-aos="flip-up" data-aos-duration="1000">
            <img class="w-2/3 mx-auto" src={Card2} alt="Sunset in the mountains"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Webサイト制作</div>
              <p class="text-gray-700 text-base">
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
          <div class="w-[30%] max-w-sm rounded overflow-hidden shadow-lg" data-aos="flip-up" data-aos-duration="1500">
            <img class="w-2/3 mx-auto" src={Card3} alt="Sunset in the mountains"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Webアプリケーション制作</div>
              <p class="text-gray-700 text-base">
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
        <div className="max-w-5xl mx-auto mt-10 flex items-center justify-between gap-6 column-3" data-aos="fade-up" data-aos-duration="1000">
          <img src={Works} alt="Profile" className=" w-1/2 h-1/2" />
          <div className="text-left w-1/2">
            <h3 className="text-lg font-semibold text-gray-900">Work</h3>
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
