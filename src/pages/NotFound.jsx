import { Link } from "react-router";
import Button from "../components/Button";
const NotFound = () => {
  return (
    <div className="flex justify-center flex-col items-center pt-20 gap-16">
      <h1 className="text-9xl">404 NOT FOUND</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to={"/"}>
        <Button btnName="Back to Homepage" jenis={"primary"} />
      </Link>
    </div>
  );
};

export default NotFound;
