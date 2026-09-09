import axios from "axios";

export async function loginUser(email: string, password: string) {
  try {
    const validateUser = await axios.post("http://localhost:3001/api/login", {
      email,
      password,
    });
    return validateUser.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data.message || "An error occurred during login.",
      );
      // throw {
      //   statusCode: error.response?.status || 500,
      //   errorName: error.name,
      //   errorMessage:
      //     error.response?.data?.message || "An error occurred during login.",
      // };
    } else {
      throw {
        statusCode: 500,
        errorName: "UnknownError",
        errorMessage: "An unknown error occurred.",
      };
    }
  }
}

export async function employeeList(
  limit: number = 15,
  skip: number = 0,
  key: string = "firstName",
  value: string = "",
  signal: AbortSignal,
) {
  let url = `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;
  url =
    value?.length > 3
      ? `https://dummyjson.com/users/filter?limit=${limit}&skip=${skip}&key=${key || "firstName"}&value=${value}`
      : url;
  try {
    const employeeResult = await axios.get(url, { signal });
    return employeeResult.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        statusCode: error.response?.status || 500,
        errorName: error.name,
        errorMessage:
          error.response?.data?.message || "An error occurred during login.",
      };
    } else {
      throw {
        statusCode: 500,
        errorName: "UnknownError",
        errorMessage: "An unknown error occurred.",
      };
    }
  }
}

export async function leaveInfo(id: number, signal: AbortSignal) {
  try {
    const leaveResult = await axios.get(
      `http://localhost:3001/api/user/leaves/${id}`,
      { signal },
    );
    return leaveResult.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        statusCode: error.response?.status || 500,
        errorName: error.name,
        errorMessage:
          error.response?.data?.message || "An error occurred during login.",
      };
    } else {
      throw {
        statusCode: 500,
        errorName: "UnknownError",
        errorMessage: "An unknown error occurred.",
      };
    }
  }
}
