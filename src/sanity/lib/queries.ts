import { groq } from "next-sanity";
export const allProduct= groq`*[_type=="car"]`;
export const someProduct= groq`*[_type=="car"][0..11]`;
export const sixProduct= groq`*[_type=="car"][0..5]`;