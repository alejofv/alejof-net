<template>
  <div>
    <div class="py-4">
      <div class="text-3xl leading-tight text-slate-600 dark:text-slate-300">
        <RouteLink to="/" :border="false">Alejo Figueroa</RouteLink>
      </div>
    </div>
    <p class="mt-2 text-slate-600 dark:text-slate-300">
      I post links and comments to interesting things on the internet.
      Sometimes I write stuff.
    </p>
  </div>
</template>

<script>
import RouteLink from "~/components/links/RouteLink.vue";
import NavLink from "~/components/links/NavLink.vue";

export default {
  components: {
    RouteLink,
    NavLink,
  },
};
</script>