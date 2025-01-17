type ListBottomTextProps = {
  data: {
    type: string;
    content: string;
  };
};

const ListBottomText = ({ data }: ListBottomTextProps) => {
  return (
    <div className="flex items-center text-[1vw] max-[1000px]:text-[2.2vw] opacity-0 group-hover:opacity-100 transform transition-all duration-[0.5s] ease-out">
      <div className="flex items-center justify-center  border-[0.1vw] rounded-full px-[1vw] mr-[0.5vw]">
        <p>{data.type}</p>
      </div>
      <p>{data.content}</p>
    </div>
  );
};

export default ListBottomText;
