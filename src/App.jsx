import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const url = "https://api.github.com/repositories/207645083";

const App = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });
  console.log("🚀 ~ file: App.jsx:8 ~ App ~  error:", error);
  console.log("🚀 ~ file: App.jsx:8 ~ App ~ data:", data);
  console.log("🚀 ~ file: App.jsx:10 ~ App ~ isLoading:", isLoading);

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (error) {
    return <h2>`An error has occured ${error.message}`</h2>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "16px" }}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>{data.subscriber_count}</strong>
      <strong>{data.stargazers_count}</strong>
      <br />
      <strong>{data.forks_count}</strong>
      <div>{isFetching ? <h2>Updating</h2> : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
};

export default App;
