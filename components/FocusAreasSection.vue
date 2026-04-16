<template>
  <section id="focus" class="py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">
          {{ $t('focus.kicker') }}
        </p>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {{ $t('focus.heading') }}
        </h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(area, idx) in tm('focus.areas')"
          :key="idx"
          class="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
        >
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-blue-700 text-sm font-bold text-white"
            >
              {{ idx + 1 }}
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ rt((area as any).title) }}</h3>
          </div>
          <p class="text-sm leading-relaxed text-slate-600">
            {{ rt((area as any).description) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm, rt } = useI18n();
</script>
