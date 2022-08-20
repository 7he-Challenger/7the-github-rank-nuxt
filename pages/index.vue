<script setup>
  const { 
    userList, 
    getUserList,
    nextPage,
    prevPage,
    goTo,
    page,
    total,
    loading
  } = useUserApi();

  useHead({
    title: 'List of User',
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    meta: [
      { name: 'description', content: 'Github list of user ranking' }
    ],
  })
  
  await getUserList()
</script>

<!-- <script>
  export default {
    async setup(){
      const { 
        userList, 
        getUserList,
        nextPage,
        prevPage,
        goTo,
        page,
        total
      } = useUserApi();

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
        userList,
        page,
        nextPage,
        prevPage,
        goTo,
        total
      }
    }
  }
</script> -->

<template>
  <div>
    <v-container>
      <v-table theme="dark">
        <v-progress-linear
          v-if="loading"
          color="cyan"
          streams
        ></v-progress-linear>
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
              <v-avatar
                large
                :image="item.avatar_url"
              ></v-avatar>
            </td>
          </tr>
        </tbody>
      </v-table>

      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="total"
          @next="nextPage"
          @previous="prevPage"
          @update:modelValue="goTo"
        ></v-pagination>
      </div>
    </v-container>
  </div>
</template>
