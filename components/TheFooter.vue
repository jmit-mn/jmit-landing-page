<template>
  <footer class="border-t border-slate-200 bg-slate-50 py-10">
    <div class="mx-auto max-w-6xl px-6">
      <div
        class="flex flex-col items-center justify-between gap-4 sm:flex-row"
      >
        <div class="flex items-center gap-2">
          <span class="h-3 w-3 rounded-full bg-red-600"></span>
          <span class="h-3 w-3 rounded-full bg-blue-700"></span>
          <span class="ml-1 text-sm font-bold tracking-wider text-slate-900"
            >JMIT</span
          >
        </div>
        <div class="text-center sm:text-right">
          <p class="text-sm text-slate-600">
            {{ $t('footer.copyright', { year }) }}
          </p>
          <a
            href="mailto:jmit-consortium@googlegroups.com"
            class="mt-1 inline-block text-xs text-slate-400 transition hover:text-slate-600"
          >
            jmit-consortium@googlegroups.com
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
