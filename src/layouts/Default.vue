<template>
  <div
    class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-700"
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
