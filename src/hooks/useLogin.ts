import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import { login } from "../store/userSlice";
import { useAppDispatch } from "../store/hook";
import { LoginContext } from "../context/LoginContext";
import { setStorageItem } from "../utils/storage";

export function useLogin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setUserId } = useContext(LoginContext);
  const [apiError, setApiError] = useState("");

  const submit = async (email: string, password: string) => {
    try {
      const user = await loginUser(email, password);
      if (user.status) {
        dispatch(login({ user: user.data }));
        setUserId(user.data.id); // Setting user id in context
        setStorageItem("theme", "light"); // Setting default theme as light
        navigate("/dashboard");
        return true;
      }
      setApiError(user.message || "Login failed. Please try again.");
      return false;
    } catch (e: any) {
      setApiError(
        e?.errorMessage || e?.message || "Login failed. Please try again.",
      );
      return false;
    }
  };

  return { submit, apiError, setApiError };
}
