import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleDarkToggle() {
    setIsDarkMode(!isDarkMode);

    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <header className="flex items-center justify-between bg-white px-4 py-8 dark:bg-cmDarkBlue dark:text-cmWhite">
      <Link to={"/"} className="font-[600]">
        Where in the world?
      </Link>

      <button onClick={handleDarkToggle} className="flex items-center gap-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="-40 0 450 600"
          >
            <path
              fill="#fff"
              stroke="hsl(209, 23%, 22%)"
              strokeWidth="40"
              d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
            />
          </svg>
        </span>

        <span>Dark Mode</span>
      </button>
    </header>
  );
}

export default Header;
