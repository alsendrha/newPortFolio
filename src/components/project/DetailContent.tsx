import Image from "next/image";

type DetailContentProps = {
  project: {
    type: string;
    projectImage: string[];
  };
};

const DetailContent = ({ project }: DetailContentProps) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className={`w-full ${
          project?.type === "APP" ? "h-[195.975vw]" : "h-[123.536vw]"
        } relative`}
      >
        <Image src={project?.projectImage[1]} fill sizes="1" alt="두번째" />
      </div>
    </div>
  );
};

export default DetailContent;
