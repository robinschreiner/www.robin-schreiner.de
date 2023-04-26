<template>
  <main class="grid gap-8 p-8 mx-auto max-w-7xl md:grid-cols-2">
    <section class="self-start w-full lg:sticky top-24 max-w-7xl">
      <h1 class="mb-8 text-2xl">About me</h1>
      <h2>Born digital at the intersection of creativity and technology. Designers who think in code.</h2>
      I enjoy blurring the lines of design and engineering, and encourage cross-disciplinary collaboration as much as
      possible. Join me! I create lovable products going from vision to launch. I make memorable sites that grow your
      business.
    </section>
    <div class="grid w-full grid-cols-2 gap-2 wrapper md:grid-cols-3">
      <figure v-for="(image, index) in images" class="aspect-w-1 aspect-h-1">
        <img :key="index" :src="image.pathLong" alt="" class="object-cover" />
      </figure>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    this.importAll(require.context('../assets/images/about-me/', true, /\.jpg$/))
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) => this.images.push({ pathLong: r(key), pathShort: key }))
    },
  },
}
</script>
