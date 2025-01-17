import { section1Data } from "@/utils/data/listData";
import MainText from "./MainText";

const Section01 = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center relative bg-black">
      <div className=" flex text-[8vw] max-[670px]:text-[11vw] font-extrabold transformation">
        {section1Data.map((data, index) => {
          const lastText = index === section1Data.length - 1;
          return <MainText key={data.id} data={data} lastText={lastText} />;
        })}
      </div>
    </section>
  );
};

export default Section01;
