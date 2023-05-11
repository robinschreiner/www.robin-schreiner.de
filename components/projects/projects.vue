<template>
  <ul v-if="projects.length > 0" class="flex flex-col gap-4 cards">
    <li v-for="(project, index) in projects" :key="index">
      <nuxt-link
        :to="`/${postType}/${project.slug}`"
        class="relative grid gap-4 p-4 py-4 -mx-4 transition rounded-md opacity-100 group bg-contrast-hover card card--clickable"
      >
        <div class="grid grid-cols-2 gap-4">
          <div class="">{{ project.category }}</div>
          <div class="text-lg">{{ project.title }}</div>
        </div>
        <div class="grid items-baseline gap-4 pr-4 grid-cols-headerMobile">
          <div class="text-xl">
            {{ project.description }}
          </div>
          <svg
            viewBox="0 0 19 18"
            class="w-4 h-4 transition flex-0 group-hover:translate-x-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00819592 9.80702V8.19298L15.8976 8.19298L9.24414 1.53951L10.3919 0.391744L19.0002 9L10.3919 17.6083L9.24414 16.4605L15.8976 9.80702L0.00819592 9.80702Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <img v-if="project.cover" class="cover-image group-hover:scale-105" :src="project.cover" />
      </nuxt-link>
    </li>
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
    {{ amount > 1 ? 'projects not found' : 'Post not found' }}
  </p>
</template>

<script>
export default {
  name: 'projects',
  props: {
    postType: {
      type: String,
      default: 'projects',
      validator: (val) => ['projects'].includes(val),
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
        key: 'slug',
        direction: 'desc', // you probably want 'asc' here
      }),
      validator: (obj) => typeof obj.key === 'string' && typeof obj.direction === 'string',
    },
  },
  data() {
    return {
      projects: [],
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
    this.projects = await this.fetchprojects()
    this.loading = false
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString(process.env.lang) || ''
    },
    async fetchprojects(postType = this.postType, amount = this.amount, sortBy = this.sortBy) {
      return this.$content(postType)
        .sortBy(sortBy.key, sortBy.direction)
        .limit(amount)
        .fetch()
        .catch((err) => console.error(err) || [])
    },
  },
}
</script>
