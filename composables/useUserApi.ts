import { ref } from 'vue'

interface IDataResponse {
  total_count: number,
  incomplete_results: boolean,
  items: Array<any>
}

export default function useUserApi(){
  const { getHttp } =  useHttp();
  const userList: any = ref<IDataResponse>();
  const total = ref<number>(0);
  const page = ref<number>(1)
  const per_page = ref<number>(10)

  const getUserList = async () => {
    try{
      console.log(page.value)
      const { data: lists } = await getHttp('lists', 'search/users', {
        q: 'location:madagascar',
        page: page.value,
        per_page: per_page.value
      })

      console.log(lists.value)

      userList.value = lists.value
      total.value = Math.ceil(userList.value.total_count / per_page.value)
    }catch(e){
      console.log('error', e)
    }
  }

  const nextPage = () => {
    if(page.value < total.value){
      page.value = page.value + 1
      getUserList()
    }
  }

  const prevPage = () => {
    if(page.value > 1){
      page.value = page.value - 1
      getUserList()
    }
  }

  const goTo = (value) => {
    page.value = value
    getUserList()
  }

  return {
    getUserList,
    userList,
    nextPage,
    prevPage,
    goTo,
    page,
    total
  }
}