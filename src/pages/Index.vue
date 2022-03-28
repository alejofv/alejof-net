<template>
  <Layout>
    <h1 class="hidden">Alejo F</h1>

    <div class="flex flex-col justify-center min-h-screen -mt-12">
      <div class="my-4 text-4xl leading-normal text-center">
        Hi, I'm Alejo Figueroa. I
        <Link to="https://github.com/alejofv" :border="true">write code</Link>
        to create websites, APIs and cloud-native solutions.
      </div>
      <div class="my-4 text-2xl leading-normal text-center">
        I also
        <RouteLink to="/notes/" :border="true">post</RouteLink>
        stuff as notes.
      </div>

      <ArrowDown />
    </div>

    <div class="p-8">
      <g-image
        src="~/images/profile.jpg"
        class="object-cover w-48 h-48 mx-auto my-8 rounded-full shadow-inner"
        alt="profile"
      />

      <div class="mt-8">
        <p class="my-4">
          I'm a software engineer and my main focus is the dotnet stack, but I
          also try to work on (or play with) some other stuff related to
          websites, APIs and backends. The list so far covers bits of Javascript
          (Node, Vue), Java, Python and Go.
        </p>
        <p class="mt-4">
          I'm passionate about software design, very enthusiastic about
          Serverless and Microservices, and a huge fan of Event-driven and
          JAMStack architectures.
        </p>
      </div>
    </div>
  </Layout>
</template>

<script>
import ArrowDown from "~/components/ArrowDown.vue";

export default {
  components: {
    ArrowDown,
  },
  metaInfo: {
    title: "Home",
  },
};
</script>

