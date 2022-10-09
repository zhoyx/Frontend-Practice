import Card from "../components/Card";
import data from "../data.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] ">
      <div className="w-full max-w-6xl mx-auto py-12 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data.map((job) => (
            <Card key={job.id} {...job} />
          ))}
        </div>
      </div>
    </div>
  );
}
