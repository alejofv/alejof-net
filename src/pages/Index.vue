<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1 class="hidden">About Me</h1>
    
    <div class="flex flex-col justify-center min-h-screen -mt-12">
      <p class="my-4 text-4xl leading-normal text-center">
        Hi, I'm Alejo Figueroa. I 
        <a
          class="border-b-2 border-gray-800 dark:border-gray-50 hover:text-gray-500 hover:border-gray-500"
          href="https://github.com/alejofv"
          target="_blank"
          rel="noreferrer noopener"
          >write code</a
        >
        to create websites, APIs and services.
      </p>

      <ArrowDown />
    </div>

    <g-image
      src="~/images/profile.jpg"
      class="object-cover w-40 h-40 mx-auto my-8 rounded-full shadow-inner"
      alt="profile"
    />

    <div class="mt-8">
      <p class="my-4">
        I'm a software engineer and my main focus is the dotnet stack, but I also try to work on (or play
        with) some other stuff related to websites, APIs and backends. The list
        so far covers bits of Javascript (Node, Vue), Java, Python and Go.
      </p>
      <p class="mt-4">
        I'm passionate about software design, very enthusiastic about
        Serverless and Microservices, and a huge fan of Event-based and JAMStack architectures.
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
import ArrowDown from "~/components/ArrowDown.vue";

export default {
  components: {
    ArrowDown,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

