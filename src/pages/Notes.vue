<template>
  <Layout :nav="true">
    <div class="mt-12">
      <h1 class="text-4xl">Notes</h1>
      <p class="mt-2">
        I post links and comments to interesting things on the internet.
        Sometimes I write stuff.
      </p>

      <article
        v-for="note in $page.allNote.edges"
        :key="note.node.slug"
        class="max-w-xl my-20"
      >
        <h2 class="text-2xl tracking-tight">
          <RouteLink :to="getRoute(note.node)" :border="false">{{
            note.node.title
          }}</RouteLink>
        </h2>
        <div v-if="isLink(note.node)" class="inline-block my-2 text-sm">
          from
          <Link :to="note.node.source" :border="true">
            {{ getSourceDomain(note.node) }}
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
        </div>

        <div
          class="my-4 prose dark:prose-dark"
          v-html="getContent(note.node)"
        ></div>
      </article>
    </div>
  </Layout>
</template>

<script>
import Link from "~/components/links/Link.vue";
import RouteLink from "~/components/links/RouteLink.vue";

import marked from "marked";

export default {
  components: {
    Link,
    RouteLink,
  },
  metaInfo: {
    title: "Hello, world!",
  },
  methods: {
    getRoute(note) {
      return `/notes/${note.id}/`;
    },
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
      return marked(note.content);
    },
  },
};
</script>

<page-query>
query {
  allNote(sortBy: "date", order: DESC) {
    edges {
      node {
        id, title, type, source, content
      }
    }
  }
}
</page-query>

