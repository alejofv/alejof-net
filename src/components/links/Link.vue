<template>
  <a
    class="hover:text-gray-500"
    :class="(border ? 'border-b border-gray-800 dark:border-gray-100' : '')"
    rel="noreferrer noopener"
    target="_blank"
    :href="to"
    ><slot
  /></a>
</template>

<script>
export default {
  props: {
    to: String,
    border: Boolean
  },
};
</script>