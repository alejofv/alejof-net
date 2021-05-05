<template>
  <div class="container max-w-screen-md p-6 mx-auto">
    <header class="flex items-center justify-end my-4">
      <nav class="space-x-6">
        
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
