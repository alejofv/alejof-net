<template>
  <span>
    <g-link
      class="hover:text-gray-500"
      :class="border ? 'border-b border-gray-800 dark:border-gray-100' : ''"
      :to="to"
      ><slot />
    </g-link>
  </span>
</template>

<script>
export default {
  props: {
    to: String,
    border: Boolean,
  },
};
</script>