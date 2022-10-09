import data from "../data2.json";
import Grid from "../components/Grid";
import NavButton from "../components/NavButton";

const base = data[0];

const Page = ({ name = "" }) => (
  <div>
    <div className="mx-auto min-h-screen max-w-6xl py-12">
      <div className="flex gap-7 justify-center">
        {Object.keys(data[0]).map((pages, index) => (
          <NavButton key={index} title={pages} link={"/".concat(pages)} />
        ))}
      </div>
      <div className="text-center py-20 text-5xl font-bold text-[#000033]">
        {base[name]["title"]} Pictures
      </div>
      <Grid images={base[name]["images"]} />
    </div>
  </div>
);

export default Page;
