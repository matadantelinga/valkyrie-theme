import Image from "next/image";

export default function SliderArrow({
  rotate,
  onClick,
  className,
  style,
}: {
  rotate?: boolean;
  onClick?: any;
  className?: string;
  style?: any;
}) {
  return (
    <div
      onClick={onClick}
      className={`${className} cursor-pointer z-50`}
      style={{ ...style }}
    >
      <Image
        src="/icons/arrow2.svg"
        alt="arrow"
        width={50}
        height={50}
        className={`${rotate ? "rotate-180" : ""} block`}
      />
    </div>
  );
}
