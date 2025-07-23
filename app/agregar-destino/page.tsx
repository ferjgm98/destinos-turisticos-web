import Card from "@/components/core/Card";
import AddForm from "@/components/destinos/AddForm";

export default function () {
  return (
    <Card>
      <h2 className="text-4xl text-center font-semibold my-8">
        Agregar destino turístico
      </h2>
      <div className="my-4 mb-12">
        <AddForm />
      </div>
    </Card>
  );
}
