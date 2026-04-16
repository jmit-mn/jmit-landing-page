<template>
  <section id="about" class="py-20 sm:py-24">
    <div class="mx-auto max-w-4xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">
          {{ $t('about.kicker') }}
        </p>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {{ $t('about.heading') }}
        </h2>
      </div>

      <div
        class="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left"
      >
        <div
          class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-blue-700 text-xl font-bold text-white"
          aria-hidden="true"
        >
          SK
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-900">Sura.Kh</h3>
          <p class="text-sm text-slate-500">@sugarragchaa.kh</p>
          <p class="mt-3 text-sm leading-relaxed text-slate-600">
            {{ $t('about.bio') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
