type ListItemSkillsProps = {
  data: {
    date: string;
  };
};

const ListItemDate = ({ data }: ListItemSkillsProps) => {
  return (
    <div className="mt-[0.5vw] opacity-0 group-hover:opacity-100 transition-all duration-[.5s] ease-out">
      <p className="text-[0.9vw] max-[1000px]:text-[1.5vw]">
        개발기간&nbsp;:&nbsp;{data.date}
      </p>
    </div>
  );
};

export default ListItemDate;
