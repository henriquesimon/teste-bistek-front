class ProductService {
  async createProduct(data) {
    try {
      const response = await fetch("https://teste-bistek-back.onrender.com/product", {
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

  async getById(productId) {
    try {
      const response = await fetch(
        `https://teste-bistek-back.onrender.com/product/${productId}`
      );
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Falha ao buscar o produto por ID.");
      }
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async deleteProduct(productId) {
    try {
      const productToDelete = await this.getById(productId);

      if (productToDelete && productToDelete.category) {
        console.log("Erro ao excluir, categoria vinculada.");
        return;
      }

      const response = await fetch(
        `https://teste-bistek-back.onrender.com/product/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );

      if (response.ok) {
        return true;
      } else {
        throw new Error("Falha ao deletar o produto.");
      }
    } catch (error) {
      console.error("Erro:", error);
      throw error;
    }
  }

  async updateProduct(productId, data) {
    try {
      const response = await fetch(
        `https://teste-bistek-back.onrender.com/product/${productId}`,
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
      const response = await fetch("https://teste-bistek-back.onrender.com/product");
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
