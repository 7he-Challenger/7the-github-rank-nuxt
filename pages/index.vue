

<script>
  export default {
    async setup(){
      const { userList, getUserList } = useUserApi();
      useHead({
        title: 'List of User',
        viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        charset: 'utf-8',
        meta: [
          { name: 'description', content: 'Github list of user ranking' }
        ],
      })
      
      await getUserList()
      

      return {
        userList
      }
    }
  }
</script>

<template>
  <div>
    <v-container>
      <v-table theme="dark">
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Picture
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in userList.items"
            :key="item.id"
          >
            <td>{{ item.login }}</td>
            <td>
            
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>
