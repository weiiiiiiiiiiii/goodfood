import { useEffect, useState } from "react";

const Top = () => {
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滾動
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  // 監聽滾動事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  return (
    <button onClick={ToTop} className={`fixed bottom-6 right-6 p-4 bg-white/70 text-black rounded-full cursor-pointer shadow-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
      Top
    </button>
  );
};

export default Top;
