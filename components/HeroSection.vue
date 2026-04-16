<template>
  <section
    id="top"
    class="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 sm:py-32"
  >
    <div class="mx-auto max-w-4xl px-6 text-center">
      <div class="mb-6 flex items-center justify-center gap-2">
        <span class="h-4 w-4 rounded-full bg-red-600"></span>
        <div class="h-0.5 w-10 bg-slate-900"></div>
        <span class="h-4 w-4 rounded-full bg-blue-700"></span>
      </div>

      <h1
        class="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl"
      >
        JMIT
      </h1>
      <p class="mt-4 text-2xl font-semibold text-slate-700 sm:text-3xl">
        {{ t('hero.subtitle') }}
      </p>
      <div class="mt-4 flex items-center justify-center gap-3 text-2xl">
        <span aria-label="Japan">🇯🇵</span>
        <span class="text-slate-400">×</span>
        <span aria-label="Mongolia">🇲🇳</span>
      </div>

      <p class="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600">
        {{ t('hero.description') }}
      </p>

      <div class="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href="#mission"
          class="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700"
        >
          {{ t('hero.ourMission') }}
        </a>
        <a
          href="#focus"
          class="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
        >
          {{ t('hero.focusAreas') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
