// lib/api.ts

import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  categoryId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

// lib/api.ts

// Решта коду файла

export type Category = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export const getCategories = async () => {
  const res = await axios<Category[]>('/categories');
  return res.data;
};

export type CreateNote = Omit<
  Note,
  'userId' | 'categoryId' | 'id' | 'createdAt' | 'updatedAt'
>;

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

axios.defaults.baseURL = 'https://next-docs-api.onrender.com';

export const getNotes = async (categoryId?: string) => {
  const res = await axios.get<NoteListResponse>('/notes', {
    params: { categoryId },
  });
  return res.data;
};

export const getSingleNote = async (id: string) => {
  const res = await axios.get<Note>(`/notes/${id}`);
  return res.data;
};
