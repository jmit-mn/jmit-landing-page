<template>
  <div class="flex min-h-screen flex-col bg-white text-slate-900">
    <TheNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>
