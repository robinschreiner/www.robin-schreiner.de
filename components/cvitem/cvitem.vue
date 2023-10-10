<template>
  <ul v-if="jobs.length > 0" class="flex flex-col gap-4 cards">
    <div class="group">
      <li v-for="(job, index) in jobs" :key="index"
        class="relative grid gap-4 p-4 py-4 -mx-4 transition rounded-md opacity-100 md:grid-cols-2 card card--clickable">
        <div class="flex flex-col mb-4">
          <div class="items-center text-xl font-medium">{{ job.title }}</div>
          <div class="text-gray-500">{{ job.duration }}</div>
          <div class="text-gray-500">{{ job.company }}</div>
        </div>
        <div x-data="{showDetails:false}">
          <div v-if="job.achievements" class="space-y-2 text-sm">
            <p class="flex items-start gap-2 font-medium text-gray-600" v-for="(achievement, index) in job.achievements">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="inline-block w-5 shrink-0 flex-0 text-gold-300">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z">
                </path>
              </svg>
              <span class="w-full">{{ achievement }}</span>
            </p>
          </div>
          <div class="hidden py-2 mt-2 rounded-md">
            <nuxt-content :document="job"
              class="w-full mx-auto text-xs text-gray-700 max-w-7xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert" />
          </div>
        </div>
      </li>
    </div>
  </ul>
  <div v-else-if="loading" class="cards">
    <div v-for="placeholder in placeholderClasses" :key="placeholder.id" class="space-y-6 card">
      <content-placeholders :rounded="false" :class="placeholder">
        <content-placeholders-heading />
        <content-placeholders-text />
      </content-placeholders>
    </div>
  </div>
  <p v-else class="max-w-5xl mx-auto">
    {{ amount > 1 ? 'Jobs not found' : 'Job not found' }}
  </p>
</template>

<script>
export default {
  name: 'Jobs',
  props: {
    postType: {
      type: String,
      default: 'jobs',
      validator: (val) => ['jobs'].includes(val),
    },
    amount: {
      // ? https://content.nuxtjs.org/fetching#limitn
      type: Number,
      default: 10,
      validator: (val) => val >= 0 && val < 100,
    },
    sortBy: {
      // ? https://content.nuxtjs.org/fetching#sortbykey-direction
      type: Object,
      default: () => ({
        key: 'createdAt',
        direction: 'desc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      jobs: [],
      loading: true,
    }
  },
  computed: {
    placeholderClasses() {
      const classes = ['w-full', 'w-2/3', 'w-5/6']
      return [...Array.from({ length: this.amount }, (v, i) => classes[i % classes.length])] // repeats classes after one another
    },
  },
  async mounted() {
    this.loading = true
    this.jobs = await this.fetchjobs()
    this.loading = false
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchjobs(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
