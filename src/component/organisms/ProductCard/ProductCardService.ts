import axios from "axios";

async function getProductInfo() {
  try {
    const response = await axios.get(
      "https://fakestoreapi.com/products?limit=15",
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        errorName: error.name,
        errorMessage: error.message,
        errorStack: error.stack,
      };
    } else {
      throw {
        errorName: "Unknown Error",
        errorMessage: "An unknown error occurred.",
        errorStack: error,
      };
    }
  }
}

export { getProductInfo };
