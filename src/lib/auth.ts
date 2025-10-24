import { useEffect, useState } from "react";

export type UserRole = "venue-admin" | "vendor" | "staff" | "guest";

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
};

export const mockUser: AuthUser = {
  id: "usr_123",
  name: "Jordan Lee",
  email: "jordan@barstar.ca",
  role: "venue-admin"
};

export const useMockSession = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(mockUser);
      setStatus("authenticated");
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return { user, status };
};
