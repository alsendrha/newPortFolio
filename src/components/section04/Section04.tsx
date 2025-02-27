import { logoData } from "@/utils/data/listData";
import Title from "../Title";
import LogoItem from "./LogoItem";

const Section04 = () => {
  return (
    <section className="w-full py-[80px] text-white flex flex-col justify-center items-center">
      <Title title="SKILLS" />
      <div className="flex flex-wrap justify-center mt-28 max-w-[1300px]">
        {logoData.map((item) => (
          <LogoItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Section04;
