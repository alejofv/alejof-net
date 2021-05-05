<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1 class="hidden">About Me</h1>
    
    <div class="flex flex-col justify-center min-h-screen -mt-12">
      <p class="my-4 text-4xl leading-normal text-center">
        Hi, I'm Alejo Figueroa. I like to
        <a
          class="border-b border-black dark:border-white"
          href="https://github.com/alejofv"
          target="_blank"
          rel="noreferrer noopener"
          >write code</a
        >
        and make websites and APIs.
      </p>

      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-20 mx-auto transform rotate-180">
        <g
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
        >
          <path
            d="M9.572 37.573c1.59-8.981.079-20.268.667-29.333M16.803 12.367c-3.562-2.561-3.912-6.87-6.775-9.94-1.238 2.954-4.023 8.829-6.831 10.695"
          />
        </g>
      </svg>
    </div>

    <ProfilePic />

    <div class="mt-8">
      <p class="my-4">
        My main focus is the dotnet stack, but I also try to work on (or play
        with) some other stuff related to web sites, APIs and backends. The list
        so far covers bits of Javascript (Node, Vue), Java, Python and Go.
      </p>
      <p class="mt-4">
        I'm passionate about software design and very enthusiastic about
        Microservices, Event-based and JAMStack architectures.
      </p>
    </div>

    <p class="my-6">
      <a
        href="https://github.com/alejofv"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </p>
  </Layout>
</template>

<script>
import ProfilePic from "~/components/ProfilePic.vue";

export default {
  components: {
    ProfilePic,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

