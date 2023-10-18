import { Link } from "react-router-dom";

function Button({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-block rounded-sm px-8 py-2 dark:bg-cmDarkBlue"
    >
      {children}
    </Link>
  );
}

export default Button;
