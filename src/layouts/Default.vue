<template>
  <div
    class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-900"
  >
    <div class="container max-w-screen-md p-6 pt-12 mx-auto">
      <TopNav v-if="nav" />
      
      <slot />

      <BottomNav />
    </div>
  </div>
</template>

<script>
import TopNav from "~/components/TopNav.vue";
import BottomNav from "~/components/BottomNav.vue";

export default {
  components: {
    TopNav,
    BottomNav,
  },
  props: {
    nav: Boolean
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
