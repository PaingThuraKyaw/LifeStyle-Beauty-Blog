export interface ApiResponse<T> {
  body: T[];
  pagination ?: {
    total: number;
    PAGE_SIZE: number;
    current_page: number;
    total_page: number;
  };
}

export interface SelectedBlog {
  id: number;
  title: string;
  description: string;
  category: string;
  category_id: number;
  created_blog: string;
  image: string;
  extension: string;
}
