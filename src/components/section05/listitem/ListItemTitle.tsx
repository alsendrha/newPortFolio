type ListItemTitleProps = {
  data: {
    title: string;
  };
};

const ListItemTitle = ({ data }: ListItemTitleProps) => {
  return (
    <p className="text-[2vw] max-[1000px]:text-[5vw] opacity-0 group-hover:opacity-100 font-bold transform transition-all duration-500 ease-out">
      {data.title}
    </p>
  );
};

export default ListItemTitle;
