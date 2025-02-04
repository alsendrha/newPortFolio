type ListItemContributeProps = {
  participation: string;
};

const ListItemContribute = ({ participation }: ListItemContributeProps) => {
  return (
    <div className=" text-white pt-[1.5vw] w-full flex flex-col justify-center items-center  opacity-0 group-hover:opacity-100 transition-all duration-[.5s] ease-out">
      <p className="font-bold text-[1.2vw] max-[1000px]:text-[2vw]">기여도</p>
      <p className="text-[1vw] max-[1000px]:text-[1.6vw]">{participation}</p>
    </div>
  );
};

export default ListItemContribute;
