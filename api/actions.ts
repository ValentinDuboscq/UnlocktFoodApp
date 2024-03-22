import * as Yup from "yup";
import { InferType } from "yup";
import { FoodTypes } from "../types/foods";

const BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const foodSchema = Yup.object({
  id: Yup.string().required(),
  img: Yup.string().required(),
  name: Yup.string().required(),
  price: Yup.number().required(),
  rate: Yup.number().required(),
  country: Yup.string().required(),
});
const foodsSchema = Yup.array().of(foodSchema);
export type Food = InferType<typeof foodSchema>;

export const fetchFoods = async (type: FoodTypes, start: number, limit = 3) => {
  const res = await fetch(
    `${BASE_URL}/${type}?_start=${start}&_limit=${limit}`,
  );
  const json = await res.json();
  const validatedData = await foodsSchema.validate(json);

  return {
    data: validatedData?.map((el, i) => ({ ...el })),
    nextPage: start + limit,
  };
};
