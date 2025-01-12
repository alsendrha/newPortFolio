import React from "react";

type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return <p className="text-4xl font-extrabold">{title}</p>;
};

export default Title;
