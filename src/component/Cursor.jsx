import { useState, useEffect } from "react";
import { LuPiano } from "react-icons/lu";
const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const updatePosition = (event) => {
            if (isFollowing) {
                setPosition({ x: event.clientX, y: event.clientY });
            }
        };

        window.addEventListener("mousemove", updatePosition);
        return () => {
            window.removeEventListener("mousemove", updatePosition);
        };
    }, [isFollowing]);

    return (
        <div className="fixed bottom-0 hidden md:block">
            {isFollowing && (
                <LuPiano style={{
                    position: "fixed",
                    top: position.y - 20, // 画像をカーソルの中心に配置
                    left: position.x - 20,
                    width: "40px",
                    height: "40px",
                    pointerEvents: "none", // クリックを妨げないように
                    zIndex: 9999,
                }}
                />
            )}
            <button onClick={() => setIsFollowing(!isFollowing)} className="hidden md:block">
                <LuPiano
                    style={{
                        cursor: "pointer",
                        margin: "20px",
                        width: "40px",
                        height: "40px",
                    }}
                />
            </button>
        </div>
    );
};

export default Cursor;
