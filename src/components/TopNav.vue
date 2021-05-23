<template>
  <div class="py-4 border-b border-gray-500">
    <p class="text-2xl leading-tight"><RouteLink to="/" :border="false">Alejo Figueroa</RouteLink></p>
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