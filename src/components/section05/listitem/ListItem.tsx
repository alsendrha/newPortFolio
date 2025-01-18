import Link from "next/link";
import ListBottomText from "./ListBottomText";
import ListImage from "./ListImage";
import ListItemSkills from "./ListItemSkills";
import ListItemTitle from "./ListItemTitle";

type ListItemProps = {
  data: {
    id: number;
    src: string;
    skills: string[];
    title: string;
    type: string;
    content: string;
    participation: string;
  };
};

const ListItem = ({ data }: ListItemProps) => {
  return (
    <div className="w-1/2 max-[1000px]:w-full h-[25vw] max-[1000px]:h-[55vw] relative group overflow-hidden">
      <ListImage src={data.src} />
      <Link
        href={{
          pathname: "/project",
          query: {
            id: data.id,
          },
        }}
      >
        <ListItemSkills data={data} />
        <div className="absolute text-white bottom-[3vw] max-[1000px]:bottom-[8vw] left-0 z-10 w-full flex flex-col justify-center items-center  opacity-0 group-hover:opacity-100 transition-all duration-[.5s] ease-out">
          <p className="font-bold text-[1.2vw] max-[1000px]:text-[2vw]">기여도</p>
          <p className="text-[1vw] max-[1000px]:text-[1.6vw]">{data.participation}</p>
        </div>
        <div className="text-white w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 bg-opacity-0 group-hover:bg-opacity-100 group-hover:bg-[rgba(0,0,0,0.5)]">
          <ListItemTitle data={data} />
          <div className="w-0 my-[5vw] group-hover:my-[0.5vw] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:w-[50%] h-[0.1vw] bg-white transform transition-all duration-[0.5s] ease-out" />
          <ListBottomText data={data} />
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
