<template>
  <main class="p-8 mx-auto space-y-8 max-w-7xl">
    <section class="grid w-full max-w-5xl gap-2 mx-auto md:grid-cols-2">
      <section class="self-start w-full pr-16 top-24 max-w-7xl">
        <h1 class="mb-8 text-2xl">About me</h1>
        <h2 class="mb-8 text-xl">
          Born digital at the intersection of creativity and technology I became a Designer who think in code and
          business.<br />
          I enjoy blurring the lines of design and engineering, and encourage cross-disciplinary collaboration as much
          as possible.
        </h2>
      </section>
    </section>
    <section class="grid w-full max-w-5xl grid-cols-2 gap-2 mx-auto md:grid-cols-4">
      <div class="self-center w-full col-span-2 py-8 pr-16 top-24 max-w-7xl">
        <p class="mb-8 text-lg">https://goods.wtf/</p>
        <p class="mb-8 text-lg">https://099.supply/</p>
        <p class="mb-8 text-lg">https://apple.com</p>
        <p class="mb-8 text-lg">https://minimalissimo.com/</p>
        <p class="mb-8 text-lg">https://www.instagram.com/icographica/</p>
      </div>
    </section>
    <section class="grid w-full max-w-5xl grid-cols-2 gap-2 mx-auto md:grid-cols-4">
      <div class="self-center w-full col-span-2 py-8 pr-16 top-24 max-w-7xl">
        <p class="mb-8 text-lg">
          When I am not working, I love doing sports, work on sideprojects or enjoy having a good times with friends &
          my family, tasty food and good wine.
        </p>
      </div>
      <figure v-for="(image, index) in images" class="aspect-w-1 aspect-h-1">
        <img :key="index" :src="image.pathLong" alt="" class="object-cover rounded-md zoom" />
      </figure>
      <!-- <div class="grid w-full grid-cols-2 gap-2 wrapper md:grid-cols-2">
        <figure v-for="(image, index) in images" class="aspect-w-1 aspect-h-1">
          <img :key="index" :src="image.pathLong" alt="" class="object-cover" />
        </figure>
      </div> -->
      <!-- </section>
    <section class="grid w-full max-w-5xl gap-2 mx-auto md:grid-cols-2"> -->
      <div
        class="self-start self-center w-full col-span-2 py-8 pl-16 text-center text-right md:col-span-3 top-24 max-w-7xl"
      >
        <p class="mb-8 text-lg">
          Since I was a child, I have had a deep appreciation and love for photography. I have been fortunate enough to
          have some of my images featured on Unsplash including mostly black and white shots of nature and architecture.
        </p>
        <p>Take a moment and see the world through my lens.</p>
      </div>
      <!-- <div class="grid w-full grid-cols-2 gap-2 wrapper md:grid-cols-4"> -->
      <a
        :href="unsplashImage.links.html"
        target="_blank"
        v-for="(unsplashImage, index) in unsplashImages.images"
        class="aspect-w-1 aspect-h-1 zoom"
      >
        <img :key="index" :src="unsplashImage.urls.small" :alt="unsplashImage.alt" class="object-cover rounded-md" />
      </a>
      <!-- </div> -->
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      unsplashImages: {
        user: {},
        images: [
          {
            alt_description: 'white concrete building',
            urls: {
              raw: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1524230572899-a752b3835840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1524230572899-a752b3835840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1524230572899-a752b3835840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1524230572899-a752b3835840',
            },
            links: {
              self: 'https://api.unsplash.com/photos/7y4858E8PfA',
              html: 'https://unsplash.com/photos/7y4858E8PfA',
              download:
                'https://unsplash.com/photos/7y4858E8PfA/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxfHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/7y4858E8PfA/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxfHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'wooden center table in middle of room',
            urls: {
              raw: 'https://images.unsplash.com/photo-1535385793343-27dff1413c5a?ixid=Mnw0MTc4Njh8MHwxfGFsbHwyfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1535385793343-27dff1413c5a?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1535385793343-27dff1413c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1535385793343-27dff1413c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1535385793343-27dff1413c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1535385793343-27dff1413c5a',
            },
            links: {
              self: 'https://api.unsplash.com/photos/YKE4zTW5lic',
              html: 'https://unsplash.com/photos/YKE4zTW5lic',
              download:
                'https://unsplash.com/photos/YKE4zTW5lic/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwyfHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/YKE4zTW5lic/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwyfHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'spiral stairs',
            urls: {
              raw: 'https://images.unsplash.com/photo-1521035227181-90af4feddc6c?ixid=Mnw0MTc4Njh8MHwxfGFsbHwzfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1521035227181-90af4feddc6c?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwzfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1521035227181-90af4feddc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwzfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1521035227181-90af4feddc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwzfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1521035227181-90af4feddc6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwzfHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1521035227181-90af4feddc6c',
            },
            links: {
              self: 'https://api.unsplash.com/photos/sN3ZCrA7adY',
              html: 'https://unsplash.com/photos/sN3ZCrA7adY',
              download:
                'https://unsplash.com/photos/sN3ZCrA7adY/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwzfHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/sN3ZCrA7adY/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwzfHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'body of water during day',
            urls: {
              raw: 'https://images.unsplash.com/photo-1516185880250-c5ac2d8f2cb1?ixid=Mnw0MTc4Njh8MHwxfGFsbHw0fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1516185880250-c5ac2d8f2cb1?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw0fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1516185880250-c5ac2d8f2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw0fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1516185880250-c5ac2d8f2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw0fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1516185880250-c5ac2d8f2cb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw0fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516185880250-c5ac2d8f2cb1',
            },
            links: {
              self: 'https://api.unsplash.com/photos/NbvbJrlY4iw',
              html: 'https://unsplash.com/photos/NbvbJrlY4iw',
              download:
                'https://unsplash.com/photos/NbvbJrlY4iw/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw0fHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/NbvbJrlY4iw/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw0fHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'spiral stairway illustration',
            urls: {
              raw: 'https://images.unsplash.com/photo-1559739790-6951ae2af983?ixid=Mnw0MTc4Njh8MHwxfGFsbHw1fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1559739790-6951ae2af983?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw1fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1559739790-6951ae2af983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw1fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1559739790-6951ae2af983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw1fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1559739790-6951ae2af983?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw1fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559739790-6951ae2af983',
            },
            links: {
              self: 'https://api.unsplash.com/photos/d8OiIdAdKNA',
              html: 'https://unsplash.com/photos/d8OiIdAdKNA',
              download:
                'https://unsplash.com/photos/d8OiIdAdKNA/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw1fHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/d8OiIdAdKNA/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw1fHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'gray, white, and black abstract illustration',
            urls: {
              raw: 'https://images.unsplash.com/photo-1558688077-dcc0f0988f14?ixid=Mnw0MTc4Njh8MHwxfGFsbHw2fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1558688077-dcc0f0988f14?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw2fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1558688077-dcc0f0988f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw2fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1558688077-dcc0f0988f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw2fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1558688077-dcc0f0988f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw2fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1558688077-dcc0f0988f14',
            },
            links: {
              self: 'https://api.unsplash.com/photos/i88pU3lSlts',
              html: 'https://unsplash.com/photos/i88pU3lSlts',
              download:
                'https://unsplash.com/photos/i88pU3lSlts/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw2fHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/i88pU3lSlts/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw2fHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'crashing sea waves during daytime',
            urls: {
              raw: 'https://images.unsplash.com/photo-1544695783-d7e420995ff3?ixid=Mnw0MTc4Njh8MHwxfGFsbHw3fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1544695783-d7e420995ff3?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw3fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1544695783-d7e420995ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw3fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1544695783-d7e420995ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw3fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1544695783-d7e420995ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw3fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1544695783-d7e420995ff3',
            },
            links: {
              self: 'https://api.unsplash.com/photos/b4-bwPfs704',
              html: 'https://unsplash.com/photos/b4-bwPfs704',
              download:
                'https://unsplash.com/photos/b4-bwPfs704/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw3fHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/b4-bwPfs704/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw3fHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'turned-on light',
            urls: {
              raw: 'https://images.unsplash.com/photo-1559739790-d3496073d0fe?ixid=Mnw0MTc4Njh8MHwxfGFsbHw4fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1559739790-d3496073d0fe?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw4fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1559739790-d3496073d0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw4fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1559739790-d3496073d0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw4fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1559739790-d3496073d0fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw4fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559739790-d3496073d0fe',
            },
            links: {
              self: 'https://api.unsplash.com/photos/kIcNECD-dMQ',
              html: 'https://unsplash.com/photos/kIcNECD-dMQ',
              download:
                'https://unsplash.com/photos/kIcNECD-dMQ/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw4fHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/kIcNECD-dMQ/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw4fHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'opened building door',
            urls: {
              raw: 'https://images.unsplash.com/photo-1559739790-1d316574ca31?ixid=Mnw0MTc4Njh8MHwxfGFsbHw5fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1559739790-1d316574ca31?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw5fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1559739790-1d316574ca31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw5fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1559739790-1d316574ca31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw5fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1559739790-1d316574ca31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHw5fHx8fHx8MXx8MTY4MzUzNzA0Mg&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559739790-1d316574ca31',
            },
            links: {
              self: 'https://api.unsplash.com/photos/jBIHew5hf0E',
              html: 'https://unsplash.com/photos/jBIHew5hf0E',
              download:
                'https://unsplash.com/photos/jBIHew5hf0E/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw5fHx8fHx8MXx8MTY4MzUzNzA0Mg',
              download_location:
                'https://api.unsplash.com/photos/jBIHew5hf0E/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHw5fHx8fHx8MXx8MTY4MzUzNzA0Mg',
            },
          },
          {
            alt_description: 'white and black stairs',
            urls: {
              raw: 'https://images.unsplash.com/photo-1559739790-2a4df7c229f5?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1559739790-2a4df7c229f5?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1559739790-2a4df7c229f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1559739790-2a4df7c229f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1559739790-2a4df7c229f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559739790-2a4df7c229f5',
            },
            links: {
              self: 'https://api.unsplash.com/photos/yADXyB-BhV8',
              html: 'https://unsplash.com/photos/yADXyB-BhV8',
              download:
                'https://unsplash.com/photos/yADXyB-BhV8/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMHx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/yADXyB-BhV8/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMHx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'a blurry photo of a train going through a tunnel',
            urls: {
              raw: 'https://images.unsplash.com/photo-1558688965-89fe6a8cb089?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1558688965-89fe6a8cb089?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1558688965-89fe6a8cb089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1558688965-89fe6a8cb089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1558688965-89fe6a8cb089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1558688965-89fe6a8cb089',
            },
            links: {
              self: 'https://api.unsplash.com/photos/tF2Ta8qLEAU',
              html: 'https://unsplash.com/photos/tF2Ta8qLEAU',
              download:
                'https://unsplash.com/photos/tF2Ta8qLEAU/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMXx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/tF2Ta8qLEAU/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMXx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'aerial photography of body of water near rocks',
            urls: {
              raw: 'https://images.unsplash.com/photo-1516181346633-d287cb64474e?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1516181346633-d287cb64474e?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1516181346633-d287cb64474e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1516181346633-d287cb64474e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1516181346633-d287cb64474e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1516181346633-d287cb64474e',
            },
            links: {
              self: 'https://api.unsplash.com/photos/WcYziXjhdMY',
              html: 'https://unsplash.com/photos/WcYziXjhdMY',
              download:
                'https://unsplash.com/photos/WcYziXjhdMY/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMnx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/WcYziXjhdMY/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxMnx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'a black and white photo of a spiral staircase',
            urls: {
              raw: 'https://images.unsplash.com/photo-1559739790-f49edd6e3d32?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxM3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1559739790-f49edd6e3d32?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxM3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1559739790-f49edd6e3d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxM3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1559739790-f49edd6e3d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxM3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1559739790-f49edd6e3d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxM3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559739790-f49edd6e3d32',
            },
            links: {
              self: 'https://api.unsplash.com/photos/L3UZr6CAkbU',
              html: 'https://unsplash.com/photos/L3UZr6CAkbU',
              download:
                'https://unsplash.com/photos/L3UZr6CAkbU/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxM3x8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/L3UZr6CAkbU/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxM3x8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'a black and white photo of a bathroom sink',
            urls: {
              raw: 'https://images.unsplash.com/photo-1559739790-327d802c37cc?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1559739790-327d802c37cc?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1559739790-327d802c37cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1559739790-327d802c37cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1559739790-327d802c37cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559739790-327d802c37cc',
            },
            links: {
              self: 'https://api.unsplash.com/photos/63qBTLbQQbM',
              html: 'https://unsplash.com/photos/63qBTLbQQbM',
              download:
                'https://unsplash.com/photos/63qBTLbQQbM/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNHx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/63qBTLbQQbM/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNHx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'grayscale photography of withered trees',
            urls: {
              raw: 'https://images.unsplash.com/photo-1559749574-b7fe25dad329?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1559749574-b7fe25dad329?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1559749574-b7fe25dad329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1559749574-b7fe25dad329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1559749574-b7fe25dad329?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1559749574-b7fe25dad329',
            },
            links: {
              self: 'https://api.unsplash.com/photos/8o7Y_biJ8lw',
              html: 'https://unsplash.com/photos/8o7Y_biJ8lw',
              download:
                'https://unsplash.com/photos/8o7Y_biJ8lw/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNXx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/8o7Y_biJ8lw/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNXx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'grayscale photo of trees covered with snow',
            urls: {
              raw: 'https://images.unsplash.com/photo-1601652855947-3efc33132335?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1601652855947-3efc33132335?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1601652855947-3efc33132335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1601652855947-3efc33132335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1601652855947-3efc33132335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNnx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1601652855947-3efc33132335',
            },
            links: {
              self: 'https://api.unsplash.com/photos/s2YDIklDrKU',
              html: 'https://unsplash.com/photos/s2YDIklDrKU',
              download:
                'https://unsplash.com/photos/s2YDIklDrKU/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNnx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/s2YDIklDrKU/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxNnx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'green grass field near mountain during daytime',
            urls: {
              raw: 'https://images.unsplash.com/photo-1601652863465-6248be62d5ca?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxN3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1601652863465-6248be62d5ca?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxN3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1601652863465-6248be62d5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxN3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1601652863465-6248be62d5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxN3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1601652863465-6248be62d5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxN3x8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1601652863465-6248be62d5ca',
            },
            links: {
              self: 'https://api.unsplash.com/photos/i9PyXzN8zQs',
              html: 'https://unsplash.com/photos/i9PyXzN8zQs',
              download:
                'https://unsplash.com/photos/i9PyXzN8zQs/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxN3x8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/i9PyXzN8zQs/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxN3x8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: 'woman in black coat walking on street during daytime',
            urls: {
              raw: 'https://images.unsplash.com/photo-1601652823473-37dc1183075d?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1601652823473-37dc1183075d?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1601652823473-37dc1183075d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1601652823473-37dc1183075d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1601652823473-37dc1183075d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1601652823473-37dc1183075d',
            },
            links: {
              self: 'https://api.unsplash.com/photos/OYA1X_tFPoM',
              html: 'https://unsplash.com/photos/OYA1X_tFPoM',
              download:
                'https://unsplash.com/photos/OYA1X_tFPoM/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOHx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/OYA1X_tFPoM/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOHx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: null,
            urls: {
              raw: 'https://images.unsplash.com/photo-1601652858354-ee26831f2ecf?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1601652858354-ee26831f2ecf?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1601652858354-ee26831f2ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1601652858354-ee26831f2ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1601652858354-ee26831f2ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOXx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1601652858354-ee26831f2ecf',
            },
            links: {
              self: 'https://api.unsplash.com/photos/kScJ5Anio_w',
              html: 'https://unsplash.com/photos/kScJ5Anio_w',
              download:
                'https://unsplash.com/photos/kScJ5Anio_w/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOXx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/kScJ5Anio_w/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwxOXx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
          {
            alt_description: null,
            urls: {
              raw: 'https://images.unsplash.com/photo-1601652773741-3ef64a7cae2f?ixid=Mnw0MTc4Njh8MHwxfGFsbHwyMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3',
              full: 'https://images.unsplash.com/photo-1601652773741-3ef64a7cae2f?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=85',
              regular:
                'https://images.unsplash.com/photo-1601652773741-3ef64a7cae2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=1080',
              small:
                'https://images.unsplash.com/photo-1601652773741-3ef64a7cae2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=400',
              thumb:
                'https://images.unsplash.com/photo-1601652773741-3ef64a7cae2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MTc4Njh8MHwxfGFsbHwyMHx8fHx8fDF8fDE2ODM1MzcwNDI&ixlib=rb-4.0.3&q=80&w=200',
              small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1601652773741-3ef64a7cae2f',
            },
            links: {
              self: 'https://api.unsplash.com/photos/Nk9jJTn3iSQ',
              html: 'https://unsplash.com/photos/Nk9jJTn3iSQ',
              download:
                'https://unsplash.com/photos/Nk9jJTn3iSQ/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwyMHx8fHx8fDF8fDE2ODM1MzcwNDI',
              download_location:
                'https://api.unsplash.com/photos/Nk9jJTn3iSQ/download?ixid=Mnw0MTc4Njh8MHwxfGFsbHwyMHx8fHx8fDF8fDE2ODM1MzcwNDI',
            },
          },
        ],
      },
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
