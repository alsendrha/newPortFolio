type ContentItemProps = {
  item: {
    id: number;
    title: string[];
    update: boolean;
    content: string[];
  };
};

const ContentItem = ({ item }: ContentItemProps) => {
  return (
    <div className="mb-4">
      {item.title.map((title, index) => (
        <p
          key={index}
          className={`font-extrabold ${
            item.update ? "text-white" : "text-[#9a989c]"
          }`}
        >
          {title}
        </p>
      ))}
      {item.content.map((content, index) => (
        <p
          key={index}
          className={`text-sm ${item.update ? "text-white" : "text-[#9a989c]"}`}
        >
          {content}
        </p>
      ))}
    </div>
  );
};

export default ContentItem;
