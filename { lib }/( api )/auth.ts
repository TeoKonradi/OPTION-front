
import { useQueryClient } from "@tanstack/react-query";
import { useMutation, useQuery , api } from ".";

// Interfaces

export interface Permission {
  app: string;
  model: string;
  permission: string;
}

export interface TokenResponse {
  refresh_token: string;
  access_token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface ChangePasswordRequest {
  old_password: string;
  password: string;
}

export interface AdminProfile {
  username: string;
  is_active: boolean;
  is_staff: boolean;
  is_super_user: boolean;
  last_login: number;
  register: number;
  permissions: Permission[];
  groups: any[];
}

// Requests

// GET /admin/permissions
export const usePermissions = () => {
  return useQuery<Permission[]>({
    queryFn: () => {
      return api.get("admin/permissions").json();
    },
    queryKey: ["permissions"],
  });
};

// POST /admin/login
export const useLogin = () => {
  return useMutation<TokenResponse, Error, LoginRequest>({
    mutationFn: (json: LoginRequest) => {
      return api.post("admin/login", { json }).json();
    },
    mutationKey: ["profile", "me"],
  });
};

// GET /admin/me

export const useMyProfile = () => {
  // const accessToken = useSelector((state: RootState) => state.accessToken);
  // const acQueryString = `?auth_adm_token=` + accessToken;
  // const getProfile = () =>
  //   api.get(`admin/me${acQueryString}`).json<AdminProfile>();

  const getProfile = () => api.get("admin/me").json<AdminProfile>();

  const noAuthToken = new Error("No auth token");
  const refreshSessionToken = () =>
    api.get("admin/me/refresh").catch((error) => {
      const status = error.response?.status ?? 0;
      const userError = 400 <= status && status < 500;
      throw userError ? noAuthToken : error;
    });

  return useQuery<AdminProfile>({
    queryFn: () =>
      getProfile().catch(async (error) => {
        if (error.response?.status >= 400) {
          await refreshSessionToken();
        }
        throw error;
      }),
    queryKey: ["profile", "me"],
    retry: (count, error) => {
      if (error === noAuthToken) return false;
      return count < 1;
    },
    staleTime: 1 * 60 * 1000,
  });
};

// POST /admin/me/change/password
export const useChangePassword = () => {
  return useMutation<TokenResponse, Error, ChangePasswordRequest>({
    mutationFn: (json: ChangePasswordRequest) => {
      return api.post("admin/me/change/password", { json }).json();
    },
    mutationKey: ["profile", "changePassword"],
  });
};

// GET /admin/logout
export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation<TokenResponse, Error>({
    mutationFn: () => {
      return api.get("admin/logout").json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
    },
  });
};
