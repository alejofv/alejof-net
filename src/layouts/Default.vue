<template>
  <div class="container max-w-screen-md p-6 mx-auto">
    <header class="flex items-center justify-between my-4">
      <div>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </div>
      <nav class="space-x-6">
        <g-link to="/">Home</g-link>
      </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
