import { React, useState } from "react";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

function ProductTable({ products, deleteProduct }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Código</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Ativo</TableHead>
          <TableHead>Data de Criação</TableHead>
          <TableHead>Ações</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.isActive ? "SIM" : "NÃO"}</TableCell>
            <TableCell>
              {format(parseISO(product.createdAt), "dd/MM/yyyy - k:mm", {
                locale: ptBR,
              })}
            </TableCell>
            <TableCell>
              <button onClick={() => deleteProduct(product.id)}>Excluir</button>{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export { ProductTable };
