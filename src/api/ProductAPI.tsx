import api from ".";
import { Product } from "../types";

//GET ALL
export const getAllProducts = async () => {
  try {
    const res = await api.get(`/product`);
    const products: Product[] = await res.data.payload;
    return products;
  } catch (err) {
    console.log(err);
  }
};

//CREATE
export const createProduct = async (product: Product) => {
  try {
    const res = await api.post(`/product`, product);
    const action = await res.data.payload;
    return action;
  } catch (err) {
    console.log(err);
  }
};

//DELETE
export const deleteProduct = async (id: number) => {
  try {
    const res = await api.delete("/product", { data: { id } });
    const action = await res.data.payload;
    return action;
  } catch (err) {
    console.log(err);
  }
};

// GET ONE BY ID
export const getProductById = async (id: number) => {
  try {
    const res = await api.get(`/product/${id}`);
    const product: Product = await res.data.payload;
    return product;
  } catch (err) {
    console.log(err);
  }
};

//MODIFY
export const modifyProduct = async (id: number, tproduct: Product) => {
  try {
    const res = await api.patch(`/product/${id}`, { data: tproduct });
    const product: Product = await res.data.payload;
    return product;
  } catch (err) {
    console.log(err);
  }
};
