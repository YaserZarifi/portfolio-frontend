

const ThemeSwitcher = () => {
  const themes = [
    { name: "indigo", color: "bg-indigo-600" },
    { name: "teal", color: "bg-teal-600" },
    { name: "rose", color: "bg-rose-600" },
  ];

  const setTheme = (themeName) => {
    document.documentElement.setAttribute("data-theme", themeName);
  };

  return (
    <div className="fixed bottom-16 left-8 p-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full shadow-lg flex items-center gap-2 z-50">
      {themes.map((theme) => (
        <button
          key={theme.name}
          onClick={() => setTheme(theme.name)}
          className={`w-6 h-6 rounded-full ${theme.color} transform hover:scale-110 transition-transform`}
          aria-label={`Switch to ${theme.name} theme`}
        ></button>
      ))}
    </div>
  );
};


export default ThemeSwitcher;
