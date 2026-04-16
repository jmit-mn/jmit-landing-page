<template>
  <section id="achievements" class="bg-slate-900 py-20 text-white sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-400">
          {{ t('achievements.kicker') }}
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {{ t('achievements.heading') }}
        </h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="rounded-2xl border border-slate-700 bg-slate-800 p-6"
        >
          <p class="text-4xl font-bold">{{ stat.value }}</p>
          <p class="mt-2 text-sm text-slate-300">
            {{ stat.label }}
          </p>
        </div>
      </div>

      <div
        class="mt-8 rounded-2xl border border-slate-700 bg-slate-800/50 p-8"
      >
        <h3 class="mb-5 text-lg font-semibold">{{ t('achievements.milestonesHeading') }}</h3>
        <ul class="space-y-3 text-sm text-slate-300">
          <li
            v-for="(milestone, i) in milestones"
            :key="i"
            class="flex gap-4"
          >
            <span class="w-24 shrink-0 font-mono text-blue-400">
              {{ milestone.date }}
            </span>
            <span>{{ milestone.event }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { memberCompanies } from '../configs/members';

const { t, tm, rt } = useI18n();

const mongolianPartnerCount = computed(() =>
  memberCompanies.filter(
    (c) => c.classification === 'mongolia' && c.memberType !== 'observer'
  ).length
);

const stats = computed(() => [
  { value: '30+', label: 'Japan–Mongolia IT projects across member companies' },
  { value: `${mongolianPartnerCount.value}`, label: 'Mongolian IT companies partnering with Japanese businesses' },
  { value: '140+', label: 'Partner companies in Gotanda Valley network' },
  { value: '2025', label: 'ICT Seminar co-hosted in Tokyo with Mongolian government' },
]);

const milestones = computed(() =>
  (tm('achievements.milestones') as any[]).map((m) => ({
    date: rt(m.date),
    event: rt(m.event),
  }))
);
</script>
