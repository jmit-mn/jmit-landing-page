<template>
  <section id="achievements" class="bg-slate-900 py-20 text-white sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-400">
          Achievements
        </p>
        <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          What We've Built So Far
        </h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div class="rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <p class="text-4xl font-bold">30+</p>
          <p class="mt-2 text-sm text-slate-300">
            Japan–Mongolia IT projects across member companies
          </p>
        </div>
        <div class="rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <p class="text-4xl font-bold">2</p>
          <p class="mt-2 text-sm text-slate-300">
            Mongolian startups engaged via EOR model (6 engineers)
          </p>
        </div>
        <div class="rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <p class="text-4xl font-bold">140+</p>
          <p class="mt-2 text-sm text-slate-300">
            Partner companies in Gotanda Valley network
          </p>
        </div>
        <div class="rounded-2xl border border-slate-700 bg-slate-800 p-6">
          <p class="text-4xl font-bold">2025</p>
          <p class="mt-2 text-sm text-slate-300">
            ICT Seminar co-hosted in Tokyo with Mongolian government
          </p>
        </div>
      </div>

      <div
        class="mt-8 rounded-2xl border border-slate-700 bg-slate-800/50 p-8"
      >
        <h3 class="mb-5 text-lg font-semibold">Key milestones</h3>
        <ul class="space-y-3 text-sm text-slate-300">
          <li
            v-for="milestone in milestones"
            :key="milestone.date"
            class="flex gap-4"
          >
            <span class="w-20 flex-shrink-0 font-mono text-blue-400">
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
const milestones = [
  {
    date: "2024-05",
    event: "MoU signed between Ulaanbaatar City and Shinagawa (Gotanda Valley)",
  },
  {
    date: "2024-08",
    event: "Japan-Mongolia International Business Innovation Forum",
  },
  {
    date: "2024-11",
    event: "Japan-Mongolia IT Consortium established as NGO in Mongolia",
  },
  {
    date: "2025-03",
    event:
      "ICT Seminar 2025 in Tokyo — attended by Mongolian Foreign Minister",
  },
  { date: "2026-03", event: "DX Cup 2025 (planned) with DX Mongolia" },
];
</script>
