# React-query & React suspense

- React-query & React suspense 사용법을 익히기 위한 저장소

## useQuery

```jsx
// const { data, isLoading, error } = useQuery(queryKey, queryFn, options);
const { isLoading, isError, data, error } = useQuery(
  "data",
  async () => {
    const Data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    return Data.data;
  },
  {
    refetchOnWindowFocus: false,
    retry: 0,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e.message);
    },
  }
);
```

### QueryKey

```jsx
useQuery('data', ...)
```

쿼리에 파라미터가 존재할 경우 아래처럼 사용

### option

- refetchOnWindowFocus : 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재 실행하는 여부
- retry : 실패시 재호출 시도 횟수
- onSuccess : 성공시
- onError : 에러시
