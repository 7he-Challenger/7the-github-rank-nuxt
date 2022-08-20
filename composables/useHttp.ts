export function useHttp(){
  const config = useRuntimeConfig();
  
  const getHttp = (key, url, params) => {
    return useAsyncData(key, () => {
      return $fetch(config.API_BASE_URL + url, {
        params
      })
    })
  }

  return {
    getHttp
  }
}