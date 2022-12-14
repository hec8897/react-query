import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

function App() {
  const { isLoading, isError, data, error } = useQuery('data',
    async () => {
      const Data = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      return Data.data
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: data => {
        console.log(data);
      },
      onError: e => {
        console.log(e.message);
      }
    })

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="App">
      {data?.title}
    </div>
  );
}

export default App;
