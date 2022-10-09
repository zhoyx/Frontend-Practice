import Link from "next/link";
import Image from "next/image";
import Skill from "./Skill";

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
    <a className=" w-full block bg-white rounded-[8px] p-3 border-2 hover:-translate-y-[3px] hover:drop-shadow-md ">
      <div className="relative flex-col divide-y p-1 h-full">
        <div className="py-2 flex-col relative gap-2">
          <div className="flex md:flex-col gap-2">
            <div className="h-[100px] w-[100px] relative block md:mx-auto shrink-0">
              <Image
                src={image}
                alt={company}
                width={100}
                height={100}
                objectFit="contain"
                layout="responsive"
              ></Image>
            </div>
            <div>
              <div className="text-sm pb-2">{company}</div>
              <div className="font-bold line-clamp-2 h-fit md:h-[3.5rem] text-xl ">
                {title}
              </div>
              {salary ? (
                <div>{salary}</div>
              ) : (
                <div className="invisible">blank</div>
              )}
            </div>
          </div>

          <div className="flex pt-2">
            <div className="text-[#1FC76A] font-semibold italic">{date}</div>
            <div className="ml-auto bg-[#DDF7E9] text-[#1FC76A] py-[5px] px-[8px] rounded-[5px] font-sm font-medium">
              {role}
            </div>
          </div>
        </div>
        <div className="h-100 mt-auto">
          <div className="flex space-x-1 flex-1 truncate pt-3">
            {skills.map((skill1) => (
              <Skill key={skill1} skill={skill1} />
            ))}
          </div>
        </div>
      </div>
    </a>
  </Link>
);
export default Card;
