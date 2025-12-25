<template>
  <div class="app-shell">
    <header class="app-header">
      <nav class="nav">
        <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        <NuxtLink to="/about" class="nav-link ">About</NuxtLink>
      </nav>
    </header>

    <main class="app-main">
      <slot />
    </main>

    <footer class="app-footer">
      <p class="footer-text">© {{ new Date().getFullYear() }} Codex Arcanum</p>
    </footer>
  </div>
</template>