import { Navigate, useLocation } from "react-router-dom";
import { isAdmin } from "../utils/auth";

type Props = { children: React.ReactNode };

export default function ProtectedRoute({ children }: Props) {
  const location = useLocation();

  if (!isAdmin()) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />;
  }

  return <>{children}</>;
}
