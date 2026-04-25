const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || 'Something went wrong');
  }

  return response.json();
};

export const listingsApi = {
  getAll: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return apiFetch(`/listings?${query}`);
  },
  getBySlug: (slug: string) => apiFetch(`/listings/${slug}`),
  create: (data: any) => apiFetch('/listings', { method: 'POST', body: JSON.stringify(data) }),
};

export const categoriesApi = {
  getAll: () => apiFetch('/categories'),
  getBySlug: (slug: string) => apiFetch(`/categories/${slug}`),
};

export const blogsApi = {
  getAll: (category?: string) => apiFetch(`/blogs${category ? `?category=${category}` : ''}`),
  getBySlug: (slug: string) => apiFetch(`/blogs/${slug}`),
};

export const contactApi = {
  submit: (data: any) => apiFetch('/contact/submit', { method: 'POST', body: JSON.stringify(data) }),
};

export const newsletterApi = {
  subscribe: (email: string) => apiFetch('/newsletter/subscribe', { method: 'POST', body: JSON.stringify({ email }) }),
};
