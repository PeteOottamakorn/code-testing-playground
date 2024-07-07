import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Sorry!</h1>
      <p>The page you're looking for is in another castle!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
