<template>
  <Layout :nav="true">
    <div class="flex flex-col justify-between min-h-screen">
    <div class="max-w-xl mt-12">
      <h1 class="text-4xl tracking-tight">{{ $page.note.title }}</h1>

      <p v-if="isLink($page.note)" class="inline-block mt-1 mb-2 text-sm">
        from
        <Link :to="$page.note.source" :border="true">
          {{ getSourceDomain($page.note) }}
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="inline h-3 fill-current"
        >
          <path
            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
          />
          <path
            d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
          />
        </svg>
      </p>

      <div
        class="my-8 prose dark:prose-dark"
        v-html="getContent($page.note)"
      ></div>
    </div>

    <div class="my-12 border-t border-gray-500">
      <p class="mt-4">
        Hi, I'm Alejo Figueroa I write code to create websites, APIs and services.
      </p>
      <p class="w-full mt-2 space-x-6">
        <RouteLink to="/notes/" :border="true">See more notes like this</RouteLink>
        <RouteLink to="/" :border="true">Go to main page</RouteLink>
      </p>
    </div>
    </div>
  </Layout>
</template>


<script>
import Link from '~/components/links/Link.vue'
import RouteLink from '~/components/links/RouteLink.vue'

export default {
  components: {
    Link,
    RouteLink,
  },
  metaInfo: {
    title: "Hello, world!",
  },
  methods: {
    isLink(note) {
      return note.type === "link";
    },
    getSourceDomain(note) {
      return note.source
        .replace("http://", "")
        .replace("https://", "")
        .split("/")[0];
    },
    getContent(note) {
      return this.$options.filters.markdown(note.content);
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  note(id: $id) {
    title
    content
    source
    type
  }
}
</page-query>