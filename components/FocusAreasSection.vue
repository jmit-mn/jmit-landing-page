<template>
  <section id="focus" class="py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mb-12 text-center">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">
          Focus Areas
        </p>
        <h2
          class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          How We Work Together
        </h2>
      </div>

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(area, idx) in areas"
          :key="area.title"
          class="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
        >
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-blue-700 text-sm font-bold text-white"
            >
              {{ idx + 1 }}
            </div>
            <h3 class="text-lg font-semibold text-slate-900">{{ area.title }}</h3>
          </div>
          <p class="text-sm leading-relaxed text-slate-600">
            {{ area.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const areas = [
  {
    title: "Joint IT Projects and Programs",
    description:
      "Study and share the experience of IT companies from Ulaanbaatar and Shinagawa. Support joint projects and cross-border programs between enterprises and institutions.",
  },
  {
    title: "Outsourcing IT Projects",
    description:
      "Enable Japanese companies to collaborate with skilled Mongolian IT teams — combining technical expertise, reliability, and adaptability with strong PM and QA support.",
  },
  {
    title: "Co-Innovation Events",
    description:
      "Organize joint events with the City of Ulaanbaatar and Gotanda Valley Association to promote innovation and business collaboration between Japan and Mongolia.",
  },
  {
    title: "Digital Nomad Program",
    description:
      "Provide Japanese companies with access to skilled Mongolian engineers and professionals through remote and freelance team-building opportunities.",
  },
  {
    title: "Research & Development",
    description:
      "Develop cooperation in science, technology, and innovation. Promote academic exchange and training courses for designers and programmers.",
  },
  {
    title: "Startup Acceleration",
    description:
      "Support Mongolian startup entrepreneurs through mentorship, incubation, and knowledge exchange — fostering an innovation-driven culture.",
  },
];
</script>
