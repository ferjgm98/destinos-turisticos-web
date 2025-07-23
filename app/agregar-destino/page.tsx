import Card from "@/components/core/Card";
import AddDestinationForm from "@/components/destinations/AddDestinationForm";

export default function () {
  return (
    <Card>
      <h2 className="text-4xl text-center font-semibold my-8">
        Agregar destino turístico
      </h2>
      <div className="my-4 mb-12">
        <AddDestinationForm />
      </div>
    </Card>
  );
}
