import Image from "next/image";
import Link from "next/link";
import ListBottomText from "./ListBottomText";
import ListItemContribute from "./ListItemContribute";
import ListItemDate from "./ListItemDate";
import ListItemSkills from "./ListItemSkills";
import ListItemTitle from "./ListItemTitle";

type ListImageProps = {
  data: {
    id: number;
    src: string;
    skills: string[];
    title: string;
    date: string;
    type: string;
    content: string;
    participation: string;
  };
};
const ListImage = ({ data }: ListImageProps) => {
  return (
    <div className="w-full h-full relative transform transition-all duration-500 ease-out group-hover:scale-110">
      <Image src={data.src} fill className="-z-10" sizes="1" alt="프로젝트" />
      <Link
        href={{
          pathname: "/project",
          query: {
            id: data.id,
          },
        }}
      >
        <div className="text-white w-full h-full flex flex-col items-center justify-center bg-opacity-0 group-hover:bg-opacity-50 group-hover:bg-black">
          <ListItemTitle data={data} />
          <div className="w-0 my-[5vw] group-hover:my-[0.5vw] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:w-[50%] h-[0.1vw] bg-white transform transition-all duration-[0.5s] ease-out" />
          <ListBottomText data={data} />
          <ListItemSkills data={data} />
          <ListItemContribute participation={data.participation} />
          <ListItemDate data={data} />
        </div>
      </Link>
    </div>
  );
};

export default ListImage;
