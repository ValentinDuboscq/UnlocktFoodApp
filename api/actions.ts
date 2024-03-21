import * as Yup from "yup";
import { InferType } from "yup";

const BASE_URL = process.env.EXPO_API_URL;

const foodSchema = Yup.object({
  id: Yup.string().required(),
  img: Yup.string().required(),
  name: Yup.string().required(),
  dsc: Yup.string().required(),
  price: Yup.number().required(),
  rate: Yup.number().required(),
  country: Yup.string().required(),
});
const foodsSchema = Yup.array().of(foodSchema);
export type Food = InferType<typeof foodSchema>;

export const fetchFoods = async (page: number) => {
  const res = await fetch(`${BASE_URL}/pizzas`);
  const json = await res.json();

  return await foodsSchema.validate(json);
};
