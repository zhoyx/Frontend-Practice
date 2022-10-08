import Card from "../components/Card";
import data from "../data.json";

export default function Home({ items = [] }) {
  return (
    <div className="min-h-screen bg-[#f2f2f2] ">
      <div className="container mx-auto px-12">
        <div className="px-8 py-12">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
            {data.map((job) => (
              <Card key={job.id} {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
