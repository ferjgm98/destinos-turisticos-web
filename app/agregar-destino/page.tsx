import Card from "@/components/core/Card";
import AddForm from "@/components/destinos/AddForm";

export default function () {
  return (
    <Card>
      <h2 className="text-4xl text-center font-semibold my-12">
        Agregar destino turistico
      </h2>
      <div className="my-8"></div>
      <AddForm />
    </Card>
  );
}
