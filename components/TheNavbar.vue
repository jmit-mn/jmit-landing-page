<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md"
  >
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
    >
      <a href="#top" class="flex items-center gap-2">
        <span class="flex items-center gap-1">
          <span class="h-3 w-3 rounded-full bg-red-600"></span>
          <span class="h-3 w-3 rounded-full bg-blue-700"></span>
        </span>
        <span class="text-lg font-bold tracking-wider text-slate-900">JMIT</span>
      </a>
      <div class="hidden items-center gap-6 md:flex">
        <ul class="flex items-center gap-6 text-sm text-slate-600">
          <li><a href="#mission" class="hover:text-slate-900">{{ t('nav.mission') }}</a></li>
          <li><a href="#why-now" class="hover:text-slate-900">{{ t('nav.whyNow') }}</a></li>
          <li><a href="#focus" class="hover:text-slate-900">{{ t('nav.focus') }}</a></li>
          <li><a href="#achievements" class="hover:text-slate-900">{{ t('nav.achievements') }}</a></li>
          <li><a href="#members" class="hover:text-slate-900">{{ t('nav.members') }}</a></li>
          <li><a href="#about" class="hover:text-slate-900">{{ t('nav.about') }}</a></li>
        </ul>
        <div class="flex items-center gap-2 border-l border-slate-200 pl-4 text-sm">
          <NuxtLink
            v-for="loc in locales"
            :key="loc.code"
            :to="switchLocalePath(loc.code)"
            class="transition"
            :class="locale === loc.code
              ? 'font-semibold text-slate-900'
              : 'text-slate-400 hover:text-slate-600'"
          >
            {{ loc.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t, locale, locales: rawLocales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const locales = computed(() =>
  (rawLocales.value as Array<{ code: string; name: string }>)
);
</script>
