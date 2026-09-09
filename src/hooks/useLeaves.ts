import { useState, useEffect } from "react";
import { leaveInfo } from "../services/userService";
import { Leave } from "../utils/types";

export function useLeaves(userId: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [leaves, setLeaves] = useState<Leave[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    leaveInfo(userId, controller.signal)
      .then((data) => setLeaves(data.data))
      .catch((err) => setError(err.errorMessage))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [userId]);

  return { leaves, loading, error };
}
