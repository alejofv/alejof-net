<template>
  <a
    class="hover:text-gray-500"
    :class="(border ? 'border-b border-gray-800 dark:border-gray-100' : '')"
    :href="to"
    :title="title"
    rel="noreferrer noopener"
    target="_blank"
    ><slot
  />
  </a>
</template>

<script>
export default {
  props: {
    to: String,
    title: String,
    border: Boolean
  },
};
</script>