import apiClient from "../../config/interceptor";

export interface Student {
  id: number;
  nome: string;
  cognome: string;
}


const handleRequest = async <T>(request: Promise<{ data: T }>): Promise<T> => {
  try {
    const response = await request;
    return response.data;
  } catch (error: any) {
    console.error("API Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Errore durante la richiesta");
  }
};

export const getAllStudents = async (): Promise<Student[]> => {
  return handleRequest(apiClient.get<Student[]>("/alunni/all"));
};

export const getStudentById = async (id: string): Promise<Student> => {
  return handleRequest(apiClient.get<Student>(`/alunni/${id}/find`));
};

export const createStudent = async (student: Omit<Student, "id">): Promise<Student> => {
  return handleRequest(apiClient.post<Student>("/students", student));
};

export const updateStudent = async (id: number, student: Partial<Student>): Promise<Student> => {
  return handleRequest(apiClient.put<Student>(`/students/${id}`, student));
};

export const deleteStudent = async (id: number): Promise<void> => {
  await handleRequest(apiClient.delete(`/students/${id}`));
};