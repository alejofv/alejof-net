<template>
  <div class="mt-20">
      <p class="mt-4 text-slate-600 dark:text-slate-300">
        Hi, I'm Alejo Figueroa. I write code to create websites, APIs and services.
      </p>
      <p class="w-full mt-2 space-x-6">
        <RouteLink to="/notes/" :border="true">See more notes like this</RouteLink>
        <RouteLink to="/" :border="true">Go to main page</RouteLink>
      </p>
    </div>
</template>

<script>
import RouteLink from "~/components/links/RouteLink.vue";

export default {
  components: {
    RouteLink,
  },
};
</script>