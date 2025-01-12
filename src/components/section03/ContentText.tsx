import React from "react";
import ContentItem from "./ContentItem";

type SectionItem = {
  id: number;
  title: string[];
  update: boolean;
  content: string[];
};

type ContentTextProps = {
  data: {
    section1?: SectionItem[];
    section2?: SectionItem[];
    section3?: SectionItem[];
  };
};

const ContentText = ({ data }: ContentTextProps) => {
  return (
    <div className="w-[420px] px-1 text-base mb-3">
      {data.section1?.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
      {data.section2?.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
      {data.section3?.map((item) => (
        <ContentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ContentText;
