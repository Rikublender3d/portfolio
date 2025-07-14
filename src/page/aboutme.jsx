import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaDatabase,
    FaUnity,
    FaWordpress,
    FaGithub,
    FaPhp,
    FaGitAlt,
    FaDocker,
} from "react-icons/fa";
import {
    RiSupabaseFill,
    RiNextjsFill
} from "react-icons/ri";
import {
    SiTypescript,
    SiVite,
    SiTailwindcss,
    SiRuby
} from "react-icons/si";

export default function Aboutme() {
    const basicInfo = [
        { label: "名前", value: "天野実来" },
        { label: "所属", value: "早稲田大学 人間科学部 人間情報科学科 1年" },
        { label: "専門分野", value: "Web開発・XR技術・教育テクノロジー" },
        { label: "主な活動", value: "GMO NIKKO株式会社　Webアプリケーションエンジニア/Beyond 2020 Next Project 広報幹事 / 個人開発" },
    ];

    const favoriteTechnologies = [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Vite",
        "Wordpress",
        "microCMS",
        "Tailwind CSS",
        "Supabase",
        "TypeScript",
        "Next.js",
        "Ruby",
        "Docker",
        "Apache"
    ];

    const skills = [
        // フロントエンド
        { category: "フロントエンド", skill: "HTML", icon: <FaHtml5 />, experience: "3年以上", color: "text-orange-400" },
        { category: "フロントエンド", skill: "CSS", icon: <FaCss3Alt />, experience: "3年以上", color: "text-blue-400" },
        { category: "フロントエンド", skill: "JavaScript", icon: <FaJs />, experience: "2年半", color: "text-yellow-400" },
        { category: "フロントエンド", skill: "React", icon: <FaReact />, experience: "1年以上", color: "text-cyan-400" },
        { category: "フロントエンド", skill: "Vite", icon: <SiVite />, experience: "開発環境", color: "text-purple-400" },
        { category: "フロントエンド", skill: "Tailwind CSS", icon: <SiTailwindcss />, experience: "1年以上", color: "text-teal-400" },
        { category: "フロントエンド", skill: "TypeScript", icon: <SiTypescript />, experience: "学習中", color: "text-blue-500" },
        { category: "フロントエンド", skill: "Next.js", icon: <RiNextjsFill />, experience: "学習中", color: "text-white" },

        // バックエンド
        { category: "バックエンド", skill: "PHP", icon: <FaPhp />, experience: "2年以上", color: "text-indigo-400" },
        { category: "バックエンド", skill: "Supabase", icon: <RiSupabaseFill />, experience: "6ヶ月", color: "text-green-400" },
        { category: "バックエンド", skill: "Ruby", icon: <SiRuby />, experience: "学習中", color: "text-red-400" },

        // CMS
        { category: "CMS", skill: "Wordpress", icon: <FaWordpress />, experience: "2年以上", color: "text-blue-600" },
        { category: "CMS", skill: "microCMS", icon: <FaDatabase />, experience: "1年", color: "text-green-500" },

        // インフラ・開発環境
        { category: "インフラ・開発環境", skill: "Git", icon: <FaGitAlt />, experience: "2年", color: "text-orange-500" },
        { category: "インフラ・開発環境", skill: "Docker", icon: <FaDocker />, experience: "学習中", color: "text-blue-400" },

        // ゲーム開発
        { category: "ゲーム開発", skill: "C#", icon: <FaUnity />, experience: "1年", color: "text-green-400" },
        { category: "ゲーム開発", skill: "Unity", icon: <FaUnity />, experience: "1年", color: "text-gray-400" },

        // プラットフォーム
        { category: "プラットフォーム", skill: "GitHub", icon: <FaGithub />, experience: "2年以上", color: "text-white" },
    ];

    const skillCategories = ["フロントエンド", "バックエンド", "CMS", "インフラ・開発環境", "ゲーム開発", "プラットフォーム"];

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4 sm:p-6 lg:p-10">
            {/* タイトル */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 text-center mb-6 sm:mb-8">
                About Me
            </h1>

            {/* 基本情報（カードデザイン） */}
            <div className="w-full max-w-4xl bg-black/80  text-white p-4 sm:p-6 rounded-lg shadow-xl  border border-purple-500/50 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                    基本情報
                </h2>
                <div className="space-y-2">
                    {basicInfo.map((info, index) => (
                        <div key={index} className="border-b border-gray-700/50 p-2 sm:p-3">
                            <span className="text-blue-400 font-semibold text-sm sm:text-base">{info.label}:</span>
                            <span className="ml-2 text-sm sm:text-base">{info.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 好きな言語、フレームワーク */}
            <div className="w-full max-w-4xl bg-black/80  text-white p-4 sm:p-6 rounded-lg shadow-xl border border-purple-500/50 mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">
                    好きな言語、フレームワーク
                </h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    {favoriteTechnologies.map((tech, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg px-3 py-1 text-xs sm:text-sm shadow-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* スキルセット（カテゴリー別） */}
            <div className="w-full max-w-6xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-400 mb-6 sm:mb-8">
                    スキル
                </h2>

                {skillCategories.map((category) => {
                    const categorySkills = skills.filter(skill => skill.category === category);
                    if (categorySkills.length === 0) return null;

                    return (
                        <div key={category} className="mb-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 text-center">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
                                {categorySkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="p-3 sm:p-4 lg:p-6 rounded-lg shadow-xl bg-gray-900/80 text-white flex flex-col items-center  border border-purple-500/30"
                                    >
                                        <div className={`text-2xl sm:text-3xl lg:text-4xl ${skill.color} mb-2`}>
                                            {skill.icon}
                                        </div>
                                        <h4 className="font-bold text-xs sm:text-sm lg:text-base text-center mb-1">
                                            {skill.skill}
                                        </h4>
                                        <p className="text-gray-400 text-xs sm:text-sm text-center">
                                            {skill.experience}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}