import api from "./axios";

const { api_rest, api_products } = api;

export async function getData() {
  const data = await api_rest.get("/brand/list", {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}

export async function getCategories() {
  const data = await api_rest.get("/menu/categories", {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}

export async function getSubCategories(categories) {
  const data = await api_rest.get(`/menu/subcategories/find`, {
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

export async function getAllProducts() {
  const data = await api_rest.get(`/products/list`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}

export async function getOffers() {
  const data = await api_rest.get(`/productos/offers`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}
