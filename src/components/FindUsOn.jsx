import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const FindUsOn = () => {
  return (
    <div className="my-10 space-y-3">
      <h1 className="font-semibold">Find Us On </h1>
      <div className="w-full flex flex-col">
        <button className="btn rounded-none justify-start gap-5"><FaFacebookF /> Facebook</button>
        <button className="btn rounded-none justify-start gap-5"><FaTwitter /> Twitter</button>
        <button className="btn rounded-none justify-start gap-5 "><FaInstagram /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUsOn;
