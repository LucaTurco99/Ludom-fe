import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent, Student
} from "../api/Student/StudentService";

export const useStudentsQuery = () => {
  return useQuery({ queryKey: ["students"], queryFn: getAllStudents });
};

export const useStudentQuery = (id: string) => {
  return useQuery<Student>({
    queryKey: ["student", id], 
    queryFn: () => getStudentById(id), 
  });
};

export const useCreateStudentMutation = () => {
    const queryClient = useQueryClient();
  
    return useMutation<Student, Error, Omit<Student, "id">>({
      mutationFn: createStudent, 
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["student"]});
      },
    });
  };

export const useUpdateStudentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Student, Error, { id: number; data: Partial<Student> }>({
    mutationFn: ({ id, data }) => updateStudent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["student"]});
    },
  });
};
