<template>
  <span>
    <g-link
      class="text-sm uppercase hover:text-gray-500 hover:border-gray-500"
      :to="to"
      ><slot />
    </g-link>
  </span>
</template>

<script>
export default {
  props: {
    to: String,
  },
};
</script>