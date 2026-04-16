<template>
  <section id="why-now" class="bg-slate-50 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">
          {{ t('whyNow.kicker') }}
        </p>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {{ t('whyNow.heading') }}
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
          <div class="mb-5 flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-red-600"></div>
            <h3 class="text-2xl font-bold text-slate-900">{{ t('whyNow.japan') }}</h3>
          </div>
          <ul class="space-y-3 text-slate-700">
            <li
              v-for="(bullet, i) in japanBullets"
              :key="i"
              class="flex gap-3"
            >
              <span
                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
              ></span>
              <span v-html="rt(bullet)"></span>
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-blue-200 bg-white p-8 shadow-sm">
          <div class="mb-5 flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-blue-700"></div>
            <h3 class="text-2xl font-bold text-slate-900">{{ t('whyNow.mongolia') }}</h3>
          </div>
          <ul class="space-y-3 text-slate-700">
            <li
              v-for="(bullet, i) in mongoliaBullets"
              :key="i"
              class="flex gap-3"
            >
              <span
                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700"
              ></span>
              <span v-html="rt(bullet)"></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10">
        <h3
          class="mb-5 text-center text-lg font-semibold text-slate-900"
        >
          {{ t('whyNow.synergyHeading') }}
        </h3>
        <div class="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div
            v-for="(pair, i) in synergy"
            :key="i"
            class="flex items-center border-b border-slate-100 last:border-0"
          >
            <div class="flex-1 px-5 py-3 text-right text-sm text-slate-700">
              {{ pair.jp }}
            </div>
            <div class="flex items-center gap-2 px-3">
              <span class="h-2 w-2 rounded-full bg-red-600"></span>
              <span class="h-2 w-2 rounded-full bg-blue-700"></span>
            </div>
            <div class="flex-1 px-5 py-3 text-sm text-slate-700">
              {{ pair.mn }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n();

const japanBullets = computed(() => tm('whyNow.japanBullets') as string[]);
const mongoliaBullets = computed(() => tm('whyNow.mongoliaBullets') as string[]);
const synergy = computed(() =>
  tm('whyNow.synergy') as Array<{ jp: string; mn: string }>
);
</script>
