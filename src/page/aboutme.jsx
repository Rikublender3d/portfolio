import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaUnity, FaWordpress, FaGithub, FaPhp, } from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
export default function Aboutme() {
    const basicInfo = [
        { label: "名前", value: "天野実来" },
        { label: "所属", value: "早稲田大学 人間科学部 人間情報科学科 1年" },
        { label: "専門分野", value: "Web開発・XR技術・教育テクノロジー" },
        { label: "主な活動", value: "Beyond 2020 Nect Project 広報幹事 / 個人開発" },
    ];
    const favoriteTechnologies = ["HTML/CSS", "JavaScript", "React", "Vite", "Wordpress", "microCMS", "Tailwind CSS", "Supabase",];
    const skills = [
        { category: "フロントエンド", skill: "HTML", icon: <FaHtml5 />, experience: "3年以上" },
        { category: "フロントエンド", skill: "CSS", icon: <FaCss3Alt />, experience: "3年以上" },
        { category: "フロントエンド", skill: "JavaScript", icon: <FaJs />, experience: "2年半" },
        { category: "フレームワーク", skill: "React", icon: <FaReact />, experience: "6ヶ月" },
        { category: "フレームワーク", skill: "Tailwind CSS", icon: <FaCss3Alt />, experience: "3ヶ月" },
        { category: "バックエンド", skill: "PHP", icon: <FaPhp />, experience: "2年" },
        { category: "バックエンド", skill: "Supabase", icon: <RiSupabaseFill />, experience: "2ヶ月" },
        { category: "ゲーム開発", skill: "C#", icon: <FaUnity />, experience: "1年" },
        { category: "ゲーム開発", skill: "Unity", icon: <FaUnity />, experience: "1年" },
        { category: "CMS", skill: "Wordpress", icon: <FaWordpress />, experience: "2年以上" },
        { category: "CMS", skill: "microCMS", icon: <FaDatabase />, experience: "2年以上" },
        { category: "プラットフォーム", skill: "Github", icon: <FaGithub />, experience: "2年以上" },
    ];
    return (
        <div className="bg-white min-h-screen flex flex-col items-center p-10">
            {/* タイトル */}
            <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-center mb-8">About Me</h1>

            {/* 基本情報（カードデザイン） */}
            <div className="w-full max-w-4xl bg-black text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border border-gradient-to-r from-purple-500 to-blue-500">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-purple-800 to-blue-400 mb-4">基本情報</h2>
                {basicInfo.map((info, index) => (
                    <p key={index} className="border-b border-gray-700 p-2">
                        <span className="text-blue-400">{info.label}:</span> {info.value}
                    </p>
                ))}
            </div>
            {/* 好きな言語、フレームワーク */}
            <div className="w-full max-w-4xl mt-10 bg-black text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border border-purple-500">
                <h2 className="text-3xl font-bold text-purple-400 mb-4">好きな言語、フレームワーク</h2>
                <p className="text-gray-300 text-center">
                    {favoriteTechnologies.map((tech, index) => (
                        <span key={index} className="inline-block bg-purple-600 text-white rounded-lg px-3 py-1 mx-2 my-1 shadow-md">
                            {tech}
                        </span>
                    ))}
                </p>
            </div>
            {/* スキルセット（カードデザイン） */}
            <div className="w-full max-w-5xl mt-10 bg-black text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow border border-purple-500">
                <h2 className="text-3xl font-bold text-purple-400 mb-4">スキル</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow bg-gray-900 text-white flex flex-col items-center hover:scale-105 border border-purple-500">
                            <div className="text-4xl text-purple-400">{skill.icon}</div>
                            <h4 className="font-bold mt-2">{skill.skill}</h4>
                            <p className="text-gray-400">{skill.experience}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}
