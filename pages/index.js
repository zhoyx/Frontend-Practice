import Card from "../components/Card";
import data from "../data.json";

export default function Home({ items = [] }) {
  return (
    <div className="bg-[#f2f2f2]">
      <div className="h-full container mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((job) => (
            <Card key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}
