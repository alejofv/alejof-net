<template>
  <div class="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-900">
    <div class="container max-w-screen-md p-6 mx-auto">
      <header class="flex items-center justify-end my-4">
        <nav class="space-x-6"></nav>
      </header>
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
