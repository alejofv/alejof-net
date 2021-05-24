<template>
  <div
    class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-900"
  >
    <div class="container max-w-screen-md p-6 pt-12 mx-auto">
      <slot />

      <SocialNav />
    </div>
  </div>
</template>

<script>
import SocialNav from "~/components/SocialNav.vue";

export default {
  components: {
    SocialNav,
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
