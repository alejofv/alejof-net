<template>
  <div class="container max-w-screen-md mx-auto px-5">
    <header class="flex justify-between items-center mt-8 mb-12">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="space-x-6">
        <g-link class="nav__link" to="/">Home</g-link>
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
