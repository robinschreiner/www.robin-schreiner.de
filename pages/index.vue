<template>
  <main class="p-8 pt-0 md:pt-8 col-span-full">
    <section class="grid items-center gap-8 mb-16 md:grid-cols-2">
      <h2
        class="flex flex-col gap-8 pt-4 text-xl font-medium font-brand md:text-xl lg:text-2xl xl:text-3xl md:py-16 lg:py-20 md:mr-8 lg:mr-16 xl:mr-24"
      >
        <span
          >I'm the bridge between the suits, techies & users. Making sure everyone is on the same page when building
          products.
        </span>
        <span>Currently CPO at be+, I build the future of employee retention for SMEs in an app.</span>
      </h2>
      <figure class="order-first object-cover w-full h-full md:order-last">
        <img
          src="~assets/images/robin-schreiner.jpg"
          alt="Portrait for Robin Schreiner"
          class="object-cover w-full h-full rounded-lg no-zoom"
        />
      </figure>
    </section>

    <div class="grid gap-8 md:grid-cols-2">
      <section class="mt-4">
        <h2 class="my-8 md:text-xl md:my-8">Projects</h2>
        <thoughts post-type="projects" :showDetails="false" :showDate="false" :image="false" :amount="3" />
      </section>

      <section class="mt-4">
        <h2 class="my-8 md:text-xl md:my-8">Thoughts</h2>
        <thoughts post-type="thoughts" :showDetails="false" :amount="3" />
      </section>
    </div>
  </main>
</template>
