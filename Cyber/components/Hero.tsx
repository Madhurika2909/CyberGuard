import Link from "next/link";
import { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [newsArticles, setNewsArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "25d41a220978408eb22dafba84dc4a74"; // Replace with your API key

  function getApiUrl() {
    const randomQuery = [
      "hacking",
      "ransomware",
      "data breach",
      "dark web",
      "cyber attack",
    ];
    const randomWord =
      randomQuery[Math.floor(Math.random() * randomQuery.length)];
    return `https://newsapi.org/v2/everything?q=cybercrime+${randomWord}&pageSize=10&apiKey=${API_KEY}&timestamp=${new Date().getTime()}`;
  }

  const fetchNews = async () => {
    setLoading(true);
    setNewsArticles([]);
    try {
      const response = await fetch(getApiUrl(), { cache: "no-store" });
      const data = await response.json();
      if (data.articles && data.articles.length > 0) {
        setNewsArticles([...data.articles.slice(0, 10)]);
      } else {
        setNewsArticles([]);
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsArticles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isNewsOpen) {
      fetchNews();
    }
  }, [isNewsOpen]);

  return (
    <div className="pb-20 pt-36 relative">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col items-center relative my-20 z-10">
        <TextGenerateEffect
          words="Protect what matters, Stay safe, Stay resilient"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        {/* ✅ Fixed Next.js Navigation */}
        <Link href="/CyberMap">
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-600 transition">
            Learn More About Us
          </button>
        </Link>
      </div>

      {/* ✅ Chatbot Icon */}
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg text-2xl hover:bg-blue-600 transition-transform transform hover:scale-110 z-50"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        💬
      </button>

      {/* ✅ Chatbot Container */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/e8uUzaq59z-8QN1tgOkhc"
            allow="microphone"
            className="w-full h-full border-none"
          ></iframe>
        </div>
      )}

      {/* ✅ News Icon */}
      <button
        className="fixed bottom-5 left-5 bg-gray-800 text-white p-4 rounded-full shadow-lg text-2xl hover:bg-gray-700 transition-transform transform hover:scale-110 z-50"
        onClick={() => setIsNewsOpen(true)}
      >
        📰
      </button>

      {/* ✅ News Popup */}
      {isNewsOpen && (
        <div className="fixed bottom-20 left-5 w-96 h-[500px] bg-black text-white rounded-lg shadow-lg p-4 overflow-y-auto z-50">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Cyber News</h2>
            <button
              className="text-gray-400 text-xl hover:text-gray-300"
              onClick={() => setIsNewsOpen(false)}
            >
              &times;
            </button>
          </div>
          <button
            className="text-gray-400 text-xl mt-2 hover:text-gray-300"
            onClick={fetchNews}
          >
            ⟳
          </button>
          <div className="mt-2 space-y-4">
            {loading ? (
              <p>Loading...</p>
            ) : newsArticles.length > 0 ? (
              newsArticles.map((article, index) => (
                <div key={index} className="border-b border-gray-600 pb-2">
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt="News"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  )}
                  <h3 className="font-semibold text-blue-400 hover:underline">
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-300">
                    {article.description || "No description available."}
                  </p>
                </div>
              ))
            ) : (
              <p>No cybercrime news found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
