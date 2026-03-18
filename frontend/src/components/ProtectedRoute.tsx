import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAdmin, verifyAdminKey, clearAdminKey } from "../utils/auth";

type Props = { children: React.ReactNode };

export default function ProtectedRoute({ children }: Props) {
  const location = useLocation();
  const [verified, setVerified] = useState<boolean | null>(
    isAdmin() ? null : false
  );

  useEffect(() => {
    if (!isAdmin()) return;
    verifyAdminKey().then((ok) => {
      if (!ok) clearAdminKey();
      setVerified(ok);
    });
  }, []);

  if (verified === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <span className="material-symbols-outlined animate-spin text-primary text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  if (!verified) {
    return (
      <Navigate to="/admin/login" state={{ from: location.pathname }} replace />
    );
  }

  return <>{children}</>;
}
