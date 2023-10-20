import { useNavigate, useRouteError } from "react-router-dom";
import Button from "./Button";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-cmWhite text-cmVeryVeryDarkBlue dark:bg-cmVeryDarkBlue dark:text-cmWhite">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <Button onClick={() => navigate(-1)}>&larr; Go back</Button>
    </div>
  );
}

export default Error;
