import axios from "axios";

export function mainApi(query, variables, token = null) {
  return axios.post(
    "http://localhost:4000/graphql",
    {
      query,
      variables,
    },
    {
      headers: {
        ...(token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : {}),
      },
    }
  );
}
