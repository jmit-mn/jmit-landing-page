<template>
  <section id="members" class="bg-slate-50 py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">
          {{ $t('members.kicker') }}
        </p>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {{ $t('members.heading') }}
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-slate-600">
          {{ $t('members.description') }}
        </p>
      </div>

      <ul class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="company in companies"
          :key="company.name"
          class="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-blue-700 text-sm font-bold text-white"
            aria-hidden="true"
          >
            {{ company.initials }}
          </div>
          <div class="min-w-0">
            <h3 class="text-base font-semibold text-slate-900">
              {{ company.name }}
            </h3>
            <p class="mt-1 text-sm text-slate-500">
              {{ company.representative }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { memberCompanies } from '../configs/members';

const companies = computed(() => {
  return memberCompanies.filter((company) => company.memberType != "observer");
});
</script>
