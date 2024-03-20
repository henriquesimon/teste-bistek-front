// ProductService.js

class ProductService {
  async createProduct(data) {
    try {
      const response = await fetch("http://localhost:3000/product", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json" },
        mode: "cors",
      });
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Falha ao criar o produto.");
      }
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const response = await fetch(
        `http://localhost:3000/product/${productId}`,
        {
          method: "DELETE",
          mode: "cors",
        }
      );
      if (response.ok) {
      } else {
        throw new Error("Falha ao deletar o produto.");
      }
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(productId, data) {
    try {
      const response = await fetch(
        `http://localhost:3000/product/${productId}`,
        {
          method: "PUT",
          body: JSON.stringify(data),
          headers: { "Content-type": "application/json" },
          mode: "cors",
        }
      );
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Falha ao atualizar o produto.");
      }
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async getAllProducts() {
    try {
      const response = await fetch("http://localhost:3000/product");
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Falha ao encontrar os produtos.");
      }
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }
}

export { ProductService };
