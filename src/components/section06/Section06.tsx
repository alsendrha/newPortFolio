import { contactData } from "@/utils/data/listData";
import Contact from "./Contact";
import ContactLast from "./ContactLast";

const Section06 = () => {
  return (
    <section
      id="CONTACT"
      className="w-full bg-black flex flex-col items-center text-white py-10 px-10"
    >
      <div className="w-full flex max-w-[750px] max-[500px]:flex-col justify-between">
        {contactData.map((data) => (
          <Contact key={data.id} title={data.title} content={data.content} />
        ))}
      </div>
      <ContactLast />
    </section>
  );
};

export default Section06;
