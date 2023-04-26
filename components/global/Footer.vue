<template>
  <footer class="pt-8 text-xs">
    <div class="flex flex-col items-center justify-center">
      <a href="/impress" class="px-4 py-2 text-center rounded-full text-brand-500 hover:text-brand-800 print:hidden"
        >Date protection &amp; Impress
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      headerText: '',
    }
  },
  created() {
    const { name } = this.$route
    if (name === 'PageOne') {
      this.headerText = 'Text for Page One'
    } else if (name === 'PageTwo') {
      this.headerText = 'Text for Page Two'
    }
  },
}
</script>
