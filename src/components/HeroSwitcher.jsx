
import {
  Columns,
  UserSquare,
  SquareTerminal,
} from "lucide-react";

const HeroSwitcher = ({ heroStyle, setHeroStyle }) => {
  const styles = [
    { name: "original", icon: <UserSquare size={20} /> },
    { name: "split", icon: <Columns size={20} /> },
    { name: "terminal", icon: <SquareTerminal size={20} /> },
  ];

  return (
    <div className="fixed top-24 right-4 md:right-8 p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full shadow-lg flex flex-col items-center gap-2 z-50">
      {styles.map((style) => (
        <button
          key={style.name}
          onClick={() => setHeroStyle(style.name)}
          className={`p-2 rounded-full transition-colors duration-300 ${
            heroStyle === style.name
              ? "bg-accent text-white"
              : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700"
          }`}
          aria-label={`Switch to ${style.name} hero style`}
        >
          {style.icon}
        </button>
      ))}
    </div>
  );
};


export default HeroSwitcher;
