import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

const createProductFormSchema = z.object({
  description: z.string(),
  category: z.string().nonempty("Selecione uma categoria!"),
});

export function ProductForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductFormSchema),
  });

  const submitHandler = async (data) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error("Erro ao criar o produto:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col justify-center gap-4 w-full px-3 py-3"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="">Descrição</label>
        <input
          type="description"
          className="border border-zinc-200 shadow-sm rounded h-10 bg-zinc-900 text-white"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-400">{errors.description.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="">Categoria</label>
        <select
          {...register("category")}
          className="border border-zinc-200 shadow-sm rounded h-10 px-3 bg-zinc-900 text-white"
        >
          <option value=""></option>
          <option value="Bebidas">Bebidas</option>
          <option value="Mercearia">Mercearia</option>
          <option value="Padaria">Padaria</option>
          <option value="Bazar">Bazar</option>
          <option value="Frios">Frios</option>
        </select>
        {errors.category && (
          <span className="text-red-400">{errors.category.message}</span>
        )}
      </div>

      <Button>Cadastrar Produto</Button>
    </form>
  );
}
