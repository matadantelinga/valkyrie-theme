import Image from "next/image";
import Link from "next/link";

export const SocialButtons = () => {
  return (
    <>
      <div className="socials">
        <ul className="flex gap-2 items-center justify-center">
          <li>
            <Link href={"#"}>
              <Image src={"/icons/ig.svg"} width={16} height={16} alt="ig" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image src={"/icons/dc.svg"} width={16} height={16} alt="dc" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <Image src={"/icons/fb.svg"} width={16} height={16} alt="fb" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
