import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

export function useAuth() {
  return useContext(AuthContext);
}

export const useRoleContext = () => {
  const { user } = useAuth();
  return user?.type;
};

export function usePermissionsContext() {
  const { permission } = useAuth();
  return permission?.abilities ?? [];
}

export function useUserTimezone() {
  return "Africa/Casablanca";
}
