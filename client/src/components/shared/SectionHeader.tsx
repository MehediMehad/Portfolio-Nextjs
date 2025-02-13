import ButtonLink from "../ui/Button";

interface SectionHeaderProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  description,
  buttonText,
  buttonHref,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={`flex justify-between items-end ${className}`}>
      <div className="text-start mb-7 md:mb-10 md:w-1/2">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-gray-400">{description}</p>
      </div>

      {buttonText && buttonHref && (
        <div className="pb-6">
          <ButtonLink href={buttonHref} className="text-sm font-sans">
            {buttonText}
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
