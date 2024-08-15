import CategoriesService from "../services/CategoriesService";
import { useState, useEffect } from "react";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await CategoriesService.getAllCategories();
        setCategories(data ?? []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories([]);
      }finally{
        setIsLoadingCategories(false)
      }
    }

    fetchCategories();
  }, []);

  return { categories, isLoadingCategories };
}
