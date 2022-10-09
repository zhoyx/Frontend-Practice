import Card from "../components/Card";
import data from "../data.json";

export default function Home({ items = [] }) {
  return (
    <div className="min-h-screen bg-[#f2f2f2] py-12 px-2">
      <div className="h-full container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data.map((job) => (
            <Card key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}
