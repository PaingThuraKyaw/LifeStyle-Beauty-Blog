import { params } from "@/type/type";

export const getParam = ({ categoryId, search, page = "1" }: params) => {
  let query = `page=${page}`;
  query += search && `&search=${search}`;
  query += categoryId && `&category=${categoryId}`;
  return query;
};
