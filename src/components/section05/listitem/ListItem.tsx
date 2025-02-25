import ListImage from "./ListImage";

type ListItemProps = {
  data: {
    id: number;
    src: string;
    skills: string[];
    title: string;
    type: string;
    content: string;
    date: string;
    participation: string;
  };
};

const ListItem = ({ data }: ListItemProps) => {
  return (
    <div className="w-1/2 max-[1000px]:w-full h-[25vw] max-[1000px]:h-[55vw] relative group overflow-hidden">
      <ListImage data={data} />
    </div>
  );
};

export default ListItem;
