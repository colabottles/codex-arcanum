<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (title) => (title ? `${title} - Codex Arcanum` : 'Codex Arcanum'),
    meta: [
      {
        name: 'description',
        content:
          'Codex Arcanum is a multi-tenant documentation and campaign management platform for tabletop RPGs.',
      }
    ]
  })
</script>