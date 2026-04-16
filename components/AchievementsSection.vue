<template>
  <section id="achievements" class="bg-slate-900 py-20 text-white sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-400">
          {{ $t('achievements.kicker') }}
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ $t('achievements.heading') }}
        </h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(stat, i) in tm('achievements.stats')"
          :key="i"
          class="rounded-2xl border border-slate-700 bg-slate-800 p-6"
        >
          <p class="text-4xl font-bold">{{ (stat as any).value }}</p>
          <p class="mt-2 text-sm text-slate-300">
            {{ (stat as any).label }}
          </p>
        </div>
      </div>

      <div
        class="mt-8 rounded-2xl border border-slate-700 bg-slate-800/50 p-8"
      >
        <h3 class="mb-5 text-lg font-semibold">{{ $t('achievements.milestonesHeading') }}</h3>
        <ul class="space-y-3 text-sm text-slate-300">
          <li
            v-for="(milestone, i) in tm('achievements.milestones')"
            :key="i"
            class="flex gap-4"
          >
            <span class="w-24 shrink-0 font-mono text-blue-400">
              {{ (milestone as any).date }}
            </span>
            <span>{{ (milestone as any).event }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { tm } = useI18n();
</script>
