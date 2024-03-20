import { useState, useEffect } from "react";
import { ProductForm } from "@/components/modules/product-form";
import { ProductTable } from "@/components/modules/product-table";
import { Card } from "@/components/ui/card";
import { ProductService } from "@/core/product-service";

const productService = new ProductService();

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productsData = await productService.getAllProducts();
      setProducts(productsData);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const createProduct = async (data) => {
    try {
      const newProduct = await productService.createProduct(data);
      setProducts([...products, newProduct]);
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await productService.deleteProduct(productId);
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <main className="h-screen flex-col px-12 bg-white text-zinc-950 flex items-center justify-center">
      <Card>
        <ProductForm onSubmit={createProduct} />
      </Card>
      <ProductTable products={products} deleteProduct={deleteProduct} />
    </main>
  );
}
