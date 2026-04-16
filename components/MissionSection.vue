<template>
  <section id="mission" class="py-20 sm:py-24">
    <div class="mx-auto max-w-4xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">
          {{ $t('mission.kicker') }}
        </p>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {{ $t('mission.heading') }}
        </h2>
      </div>

      <div class="relative mb-14 flex items-center justify-center gap-4 md:gap-14">
        <div class="flex flex-col items-center">
          <div class="h-20 w-20 rounded-full bg-red-600 shadow-lg md:h-28 md:w-28"></div>
          <span class="mt-3 text-sm font-semibold text-slate-900 md:text-base">{{ $t('mission.japan') }}</span>
        </div>
        <div class="text-center">
          <div class="text-4xl md:text-6xl">🧠</div>
          <p class="mt-1 text-[10px] font-semibold tracking-widest text-slate-500 md:text-xs">
            {{ $t('mission.cooperation') }}
          </p>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="h-20 w-20 rounded-full bg-blue-700 shadow-lg md:h-28 md:w-28"
          ></div>
          <span class="mt-3 text-sm font-semibold text-slate-900 md:text-base">{{ $t('mission.mongolia') }}</span>
        </div>
      </div>

      <p
        class="mx-auto max-w-3xl text-center text-xl leading-relaxed text-slate-700 sm:text-2xl"
      >
        {{ $t('mission.body') }}
      </p>

      <div
        class="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6"
      >
        <p class="text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          {{ $t('mission.visionKicker') }}
        </p>
        <p class="mt-2 text-center text-lg text-slate-700">
          {{ $t('mission.visionText') }}
        </p>
      </div>
    </div>
  </section>
</template>
