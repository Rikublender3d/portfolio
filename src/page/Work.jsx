import One from '../assets/works/one.png';
import Two from '../assets/works/two.png';
import Three from '../assets/works/three.png';
import Four from '../assets/works/four.png';
import Five from '../assets/works/five.png';
import Six from '../assets/works/six.png';
import Seven from '../assets/works/seven.png';
import Eight from '../assets/works/eight.png';
import Nine from '../assets/works/nine.png';
import Ten from '../assets/works/ten.png';
export default function Work() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-center mt-10">Works</h1>
      <p className="text-lg text-center text-gray-600">
        ここでは、私の作品やプロジェクトを紹介します。
      </p>
      <h1 className='text-3xl font-bold text-center mt-10'>Webサイト制作</h1>
      <h2 className='text-lg text-center text-gray-600'>法人様</h2>
      <div className="container mx-auto px-4 mt-10 flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            image: One,
            title: '一般社団法人ヘルスケアイノベーション協会様Webサイト制作',
            description:
              '#Wordpress',
            description1:
              '#HTML/CSS/JS',
          },
          {
            image: Two,
            title: '一般社団法人　空家対策・相続事業承継支援センター様Webサイト制作',
            description:
              '#Wordpress',
            description1:
              '#HTML/CSS/JS',
          },
          {
            image: Three,
            title: '一般社団法人　第一回日本デジタル医学会様　Webサイト制作',
            description:
              '#Wordpress',
            description1:
              '#HTML/CSS/JS',
            
          },
        ].map((feature, i) => (
          <div key={i} className="mt-10">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[250px] object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <div class="px-2 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description}</span>
                {feature.description1 ?
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description1}</span> : null}
                {feature.description2 ?
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description2} </span>: null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className='text-lg text-center text-gray-600'>個人制作</h2>
      <div className="container mx-auto px-4 mt-10 flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
          {
            image: Four,
            title: 'Githubでのポートフォリオサイト制作',
            description:
              '#Github',
            description1:
              '#HTML/CSS/JS',
            description2:
              '#個人開発',
          },
          {
            image: Five,
            title: 'Wordpressでのポートフォリオサイト制作',
            description:
              '#Wordpress',
            description1:
              '#HTML/CSS/JS',
          },
          {
            image: Six,
            title: '学内コンテスト公式サイト制作',
            description:
              '#Github',
            description1:
              '#React+Vite',
            description2:
              '#共同開発',
          },
        ].map((feature, i) => (
          <div key={i} className="mt-10">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[250px] object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <div class="px-3 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description}</span>
                {feature.description1 ?
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description1}</span> : null}
                {feature.description2 ?
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description2} </span>: null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className='text-3xl font-bold text-center mt-10'>Webアプリケーション制作</h1>
      <h2 className='text-lg text-center text-gray-600'>個人制作</h2>
      <div className="container mx-auto px-4 mt-10 flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          image: Seven,
          title: 'あなたの良いところ診断アプリ',
          description:
            '#Github',
          description1:
            '#HTML/CSS/JS',
          description2:
            '#個人開発',
        },
        {
          image: Eight,
          title: 'Dinasour Game',
          description:
            '#Github',
          description1:
            '#HTML/CSS/JS',
          description2:
            '#個人開発',
        },
        {
          image: Nine,
          title: 'SNSアプリ',
          description:
            '#Github',
          description1:
            '#React+Vite',
          description2:
            '#Supabase',
        },
        {
          image: Ten,
          title: 'iOS風Todoリストアプリ',
          description:
            '#Github',
          description1:
            '#React+Vite',
          description2:
            '#Supabase',
        },
      ].map((feature, i) => (
        <div key={i} className="mt-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-[250px] object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <div class="px-3 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description}</span>
              {feature.description1 ?
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description1}</span> : null}
              {feature.description2 ?
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{feature.description2} </span>: null}
            </div>
          </div>
        </div>
      ))
      }
      </div>
    </div>);
}