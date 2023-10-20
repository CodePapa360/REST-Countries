import { Link } from "react-router-dom";

function Button({ to, children, extraClass }) {
  return (
    <Link
      to={to}
      className={`${extraClass} inline-block rounded-sm px-8 py-2 text-cmVeryVeryDarkBlue shadow-[0_0_15px_#00000033] transition-transform hover:scale-110 dark:bg-cmDarkBlue dark:text-cmWhite`}
    >
      {children}
    </Link>
  );
}

export default Button;
