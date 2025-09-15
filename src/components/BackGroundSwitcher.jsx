
import { Shuffle } from "lucide-react";


const BackgroundSwitcher = ({ backgroundStyle, setBackgroundStyle }) => {
  const backgroundOptions = ["original", "var1", "var2", "var3", "var4"];

  const handleCycleBackground = () => {
    const currentIndex = backgroundOptions.indexOf(backgroundStyle);
    const nextIndex = (currentIndex + 1) % backgroundOptions.length;
    const nextStyle = backgroundOptions[nextIndex];

    setBackgroundStyle(nextStyle);
  };

  return (
    <div className="fixed top-24 left-4 md:left-8 p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full shadow-lg z-50">
      <button
        onClick={handleCycleBackground}
        className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-accent dark:hover:bg-accent transition-colors duration-300"
        aria-label="Cycle background style"
      >
        <Shuffle size={20} />
      </button>
    </div>
  );
};


export default BackgroundSwitcher;
