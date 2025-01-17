import Image from "next/image";

type TopImageProps = {
  project: {
    projectImage: string[];
  };
};

const TopImage = ({ project }: TopImageProps) => {
  return (
    <div className="w-full h-[36.707vw] relative overflow-hidden">
      <Image src={project?.projectImage[0]} fill sizes="1" alt="프로젝트메인" />
    </div>
  );
};

export default TopImage;
