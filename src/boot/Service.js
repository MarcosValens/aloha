import api from "./axios";

const { api_rest, api_products } = api;

export async function getData() {
  const data = await api_rest.get("/marcas/list", {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}

export async function getProducts(id) {
  const data = await api_rest.get(`/productos/find?marca_id=${id}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}
