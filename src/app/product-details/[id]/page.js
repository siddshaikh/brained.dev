import DetailCard from "@/components/DetailCard";

const Page = ({ params }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border rounded-md shadow-2xl p-6">
        <h1 className="text-2xl font-semibold mb-4">Product Details</h1>
        <DetailCard id={params.id} />
      </div>
    </div>
  );
};

export default Page;
