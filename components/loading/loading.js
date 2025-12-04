import Image from "next/image";
import logo from "@/public/images/logo.png";

const Loading = () => {
  return (
    <div className="absolute flex w-screen flex-col items-center justify-center min-h-screen">
      <Image
        className="animate-spin"
        src={logo}
        height={50}
        width={50}
        alt={"Loading icon"}
      />
      <p className="mt-6 text-gray-400">Please wait, the arc is loading...</p>
    </div>
  );
};

export default Loading;
