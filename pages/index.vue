<template>
  <main>
    <section class="flex flex-col justify-end flex-1 min-h-50vh">
      <h2 class="subtitle">
        <p>
          I'm the bridge between the suits, techies & users. Making sure everyone is on the same page when building
          products.
        </p>
        <p>Currently CPO at be+, I build the future of employee retention for SMEs in an app.</p>
      </h2>
    </section>

    <section class="mt-32">
      <!-- <h3 class="max-w-5xl mx-auto text-primary-600 dark:text-primary-400">Latest blog post</h3> -->
      <posts post-type="blog" :amount="3" />
    </section>
  </main>
</template>
