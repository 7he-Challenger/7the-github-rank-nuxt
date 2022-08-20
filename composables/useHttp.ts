export function useHttp(){
  const config = useRuntimeConfig();
  
  const getHttp = (url, params) => {
    return useFetch(config.API_BASE_URL + url, {
      params
    })
  }

  return {
    getHttp
  }
}