<template>
  <section id="why-now" class="bg-slate-50 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Why Now
        </p>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Shared Needs, Shared Opportunities
        </h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div class="rounded-2xl border border-red-200 bg-white p-8 shadow-sm">
          <div class="mb-5 flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-red-600"></div>
            <h3 class="text-2xl font-bold text-slate-900">Japan</h3>
          </div>
          <ul class="space-y-3 text-slate-700">
            <li class="flex gap-3">
              <span
                class="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600"
              ></span>
              <span>
                Facing a significant
                <strong class="text-slate-900">IT talent shortage</strong>
              </span>
            </li>
            <li class="flex gap-3">
              <span
                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
              ></span>
              <span>
                Interest in digital innovation for
                <strong class="text-slate-900"
                  >mining, agriculture, and infrastructure</strong
                >
                — Mongolia offers unique testing environments
              </span>
            </li>
          </ul>
        </div>

        <div class="rounded-2xl border border-blue-200 bg-white p-8 shadow-sm">
          <div class="mb-5 flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-blue-700"></div>
            <h3 class="text-2xl font-bold text-slate-900">Mongolia</h3>
          </div>
          <ul class="space-y-3 text-slate-700">
            <li class="flex gap-3">
              <span
                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700"
              ></span>
              <span>
                <strong class="text-slate-900">Young, growing tech workforce</strong>
                (median age ~27)
              </span>
            </li>
            <li class="flex gap-3">
              <span
                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700"
              ></span>
              <span>
                <strong class="text-slate-900">IT as a strategic export</strong>
                for a landlocked economy
              </span>
            </li>
            <li class="flex gap-3">
              <span
                class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700"
              ></span>
              <span>
                Strong drive toward a
                <strong class="text-slate-900">knowledge-based economy</strong>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <h3 class="mb-6 text-center text-lg font-bold text-slate-900">
          Synergy Potential
        </h3>
        <div class="mx-auto grid max-w-3xl gap-3">
          <div
            v-for="pair in synergy"
            :key="pair.jp"
            class="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-lg bg-slate-50 px-4 py-3"
          >
            <span class="text-right text-sm font-semibold text-slate-700">{{ pair.jp }}</span>
            <span class="text-slate-400">↔︎</span>
            <span class="text-left text-sm font-semibold text-slate-900">{{ pair.mn }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const synergy = [
  { jp: "Ability to materialize ideas", mn: "Creativity" },
  { jp: "Perseverance", mn: "Breakthrough power" },
  { jp: "Reputation", mn: "Solutions" },
  { jp: "Consistency", mn: "Agility" },
  { jp: "Methodical approach", mn: "Rapid execution" },
];
</script>
