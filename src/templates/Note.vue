<template>
  <Layout>
    <div class="px-8">
      <TopNav />
    </div>

    <div class="flex flex-col justify-between min-h-screen mt-6">
      <article>
        <div class="p-8">
          <h1 class="text-4xl tracking-tight">{{ $page.note.title }}</h1>

          <div v-if="isLink($page.note)" class="inline-block my-2 text-sm">
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
          </div>

          <div
            class="my-4 prose dark:prose-dark max-w-none"
            v-html="getContent($page.note)"
          ></div>
        </div>
      </article>
    </div>

    <div class="px-8">
      <BottomNav />
    </div>
  </Layout>
</template>


<script>
import TopNav from "~/components/TopNav.vue";
import BottomNav from "~/components/BottomNav.vue";

import marked from "marked";

export default {
  components: {
    TopNav,
    BottomNav,
  },
  metaInfo() {
    return {
      title: this.$page.note.title,
    };
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
      return marked(note.content);
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