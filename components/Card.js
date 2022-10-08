import Link from "next/link";
import Image from "next/image";
import img from "../images/Billigence.png";

const Card = ({
  id = "",
  image = "",
  company = "",
  title = "",
  salary = "",
  date = "",
  role = "",
  skills = [],
}) => (
  <Link href="/">
    <a className="block w-full bg-white rounded-[8px] p-[20px] border-2 hover:-translate-y-1 shadow-stone-300 ">
      <div className="flex flex-col divide-y">
        <div className="py-2">
          <div className="flex justify-center">
            <Image src={img} alt={company} width={100} height={100}></Image>
          </div>
          <div className="text-[13.6px]">{company}</div>
          <div className="font-bold">{title}</div>
          <div>{salary}</div>
          <div className="flex">
            <div className="text-[#1FC76A] font-semibold">{date}</div>
            <div className="ml-auto bg-[#DDF7E9] text-[#1FC76A] py-[5px] px-[8px] rounded-[5px] font-semibold">
              {role}
            </div>
          </div>
        </div>
        <div className="flex space-x-1 py-[5px] min-h-[50px] pt-2">
          {skills.map((skill) => (
            <div className="text-[#838383] bg-[#f1f1f1] px-[8px] py-[5px] font-['Roboto Mono'] font-bold text-[13.6px] rounded-[5px]">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </a>
  </Link>
);
export default Card;
