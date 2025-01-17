import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";

const Section02 = () => {
  return (
    <section className="w-full flex h-[600px] justify-center items-center bg-gradient-to-t from-[#222] to-black">
      <div className="flex max-[1000px]:flex-col items-center">
        <ProfileImage />
        <ProfileText />
      </div>
    </section>
  );
};

export default Section02;
