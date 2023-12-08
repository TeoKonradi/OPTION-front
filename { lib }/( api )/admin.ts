import { Permission, useMutation, useQuery , api } from ".";

// Interfaces

export interface AdminUserResponse {
  username: string;
  password: string;
  is_active: boolean;
  is_staff: boolean;
  is_super_user: boolean;
  permissions: (Permission | string)[];
  groups: any[];
}

export interface AdminUsersListResponse {
  items: AdminUserResponse[];
  total: number;
}

export interface StatusResponse {
  status: string;
}

// POST /admin/user/reg
export const useCreateAdminUser = () => {
  return useMutation<AdminUserResponse>({
    mutationFn: () => api.post("/admin/user/reg").json(),
    mutationKey: ["adminUser", "create"],
  });
};

// POST /admin/user/{id}/reg
export const useDeleteAdminUser = (id: number) => {
  return useMutation<StatusResponse>({
    mutationFn: () => api.post(`/admin/user/${id}/reg`).json(),
    mutationKey: ["adminUser", "delete"],
  });
};

// GET /admin/user/
export const useGetAdminUsersList = () => {
  return useQuery<AdminUsersListResponse>({
    queryFn: () => api.get("/admin/user/").json(),
    queryKey: ["adminUsersList"],
  });
};

// GET /admin/user/{id}
export const useGetAdminUser = (id: number) => {
  return useQuery<AdminUserResponse>({
    queryFn: () => api.get(`/admin/user/${id}`).json(),
    queryKey: ["adminUser", id],
  });
};

// POST /admin/user/{id}/update
export const useUpdateAdminUser = (id: number) => {
  return useMutation<AdminUserResponse, unknown, Partial<AdminUserResponse>>({
    mutationFn: (data: Partial<AdminUserResponse>) =>
      api.post(`/admin/user/${id}/update`, { json: data }).json(),
    mutationKey: ["adminUser", "update"],
  });
};
