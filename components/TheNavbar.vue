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

      <!-- Desktop nav -->
      <div class="hidden items-center gap-6 md:flex">
        <ul class="flex items-center gap-6 text-sm text-slate-600">
          <li><a href="#mission" class="hover:text-slate-900">{{ t('nav.mission') }}</a></li>
          <li><a href="#why-now" class="hover:text-slate-900">{{ t('nav.whyNow') }}</a></li>
          <li><a href="#focus" class="hover:text-slate-900">{{ t('nav.focus') }}</a></li>
          <li><a href="#achievements" class="hover:text-slate-900">{{ t('nav.achievements') }}</a></li>
          <li><a href="#members" class="hover:text-slate-900">{{ t('nav.members') }}</a></li>
          <li><a href="#about" class="hover:text-slate-900">{{ t('nav.about') }}</a></li>
        </ul>
        <div class="relative border-l border-slate-200 pl-4" ref="desktopLangRef">
          <button
            class="flex items-center gap-1.5 text-sm font-medium text-slate-700 transition hover:text-slate-900"
            @click="langOpen = !langOpen"
          >
            {{ currentLocaleName }}
            <svg
              class="h-3.5 w-3.5 transition"
              :class="langOpen ? 'rotate-180' : ''"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div
            v-if="langOpen"
            class="absolute right-0 top-full mt-2 min-w-28 overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
          >
            <button
              v-for="loc in availableLocales"
              :key="loc.code"
              class="block w-full px-4 py-2 text-left text-sm transition"
              :class="locale === loc.code
                ? 'bg-slate-50 font-semibold text-slate-900'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'"
              @click="switchTo(loc.code)"
            >
              {{ loc.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 md:hidden"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg v-if="!mobileOpen" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="border-t border-slate-200 bg-white px-6 pb-4 pt-2 md:hidden"
    >
      <ul class="flex flex-col gap-1 text-sm text-slate-600">
        <li><a href="#mission" class="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-slate-900" @click="mobileOpen = false">{{ t('nav.mission') }}</a></li>
        <li><a href="#why-now" class="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-slate-900" @click="mobileOpen = false">{{ t('nav.whyNow') }}</a></li>
        <li><a href="#focus" class="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-slate-900" @click="mobileOpen = false">{{ t('nav.focus') }}</a></li>
        <li><a href="#achievements" class="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-slate-900" @click="mobileOpen = false">{{ t('nav.achievements') }}</a></li>
        <li><a href="#members" class="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-slate-900" @click="mobileOpen = false">{{ t('nav.members') }}</a></li>
        <li><a href="#about" class="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-slate-900" @click="mobileOpen = false">{{ t('nav.about') }}</a></li>
      </ul>
      <div class="mt-3 flex gap-2 border-t border-slate-100 pt-3">
        <button
          v-for="loc in availableLocales"
          :key="loc.code"
          class="rounded-lg px-3 py-1.5 text-sm transition"
          :class="locale === loc.code
            ? 'bg-slate-900 font-semibold text-white'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'"
          @click="switchTo(loc.code)"
        >
          {{ loc.name }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const mobileOpen = ref(false);
const langOpen = ref(false);
const desktopLangRef = ref<HTMLElement | null>(null);

const availableLocales = [
  { code: 'en', name: 'EN' },
  { code: 'ja', name: '日本語' },
  { code: 'mn', name: 'Монгол' },
] as const;

const currentLocaleName = computed(() =>
  availableLocales.find((l) => l.code === locale.value)?.name ?? 'EN'
);

function switchTo(code: 'en' | 'ja' | 'mn') {
  langOpen.value = false;
  mobileOpen.value = false;
  navigateTo(switchLocalePath(code));
}

function handleClickOutside(e: MouseEvent) {
  if (desktopLangRef.value && !desktopLangRef.value.contains(e.target as Node)) {
    langOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
