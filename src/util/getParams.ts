import { params } from "@/type/type";

export const getParam = ({ categoryId, search, page }: params) => {
  let query =  page ? `page=${page}` : "";
  query += categoryId && `&category=${categoryId}`;
  query += search && `&search=${search}`;
  return query;
};
