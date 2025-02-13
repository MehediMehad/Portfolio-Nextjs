import SectionHeader from "./SectionHeader";

interface SectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  children: React.ReactNode;
  bgClassName?: string;
}

const Section = ({
  title,
  description,
  buttonText,
  buttonHref,
  children,
  bgClassName = "bg-gradient-to-b from-[#121126] to-[#1b0b37]",
}: SectionProps) => {
  return (
    <section className={`py-10 md:py-20 text-white ${bgClassName}`}>
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeader
          title={title}
          description={description}
          buttonText={buttonText}
          buttonHref={buttonHref}
        />
        {children}
      </div>
    </section>
  );
};

export default Section;
