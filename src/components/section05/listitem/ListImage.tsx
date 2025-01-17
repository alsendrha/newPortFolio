import Image from "next/image";

type ListImageProps = {
  src: string;
};
const ListImage = ({ src }: ListImageProps) => {
  return (
    <div className="w-full h-full relative  transform transition-all duration-500 ease-out group-hover:scale-110">
      <Image src={src} fill sizes="1" alt="프로젝트" />
    </div>
  );
};

export default ListImage;
