/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    darkMode: 'class',
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
      gridTemplateColumns: {
        header: '1fr auto 1fr',
        headerMobile: '1fr auto',
      },
      fontFamily: {
        brand: ['GTAmerica', 'Apercu, Inter, sans-serif'],
        sans: ['Inter, sans-serif'],
      },
      minHeight: {
        '50vh': '50vh',
      },
      maxWidth: {
        '30ch': '30ch',
        '50ch': '50ch',
      },
      colors: {
        gray: {
          50: 'var(--color-gray-50)', // #F9FAFB
          100: 'var(--color-gray-100)', // #F3F4F6
          200: 'var(--color-gray-200)', // #E5E7EB
          300: 'var(--color-gray-300)', // #D1D5DB
          400: 'var(--color-gray-400)', // #9CA3AF
          DEFAULT: 'var(--color-gray)', // #6B7280
          600: 'var(--color-gray-600)', // #4B5563
          700: 'var(--color-gray-700)', // #374151
          800: 'var(--color-gray-800)', // #1F2937
          900: 'var(--color-gray-900)', // #111827
        },
        primary: {
          100: 'var(--color-primary-100)', // #ECEFF5
          200: 'var(--color-primary-200)', // #C3CBDC
          300: 'var(--color-primary-300)', // #9BA8C2
          400: 'var(--color-primary-400)', // #7686A6
          DEFAULT: 'var(--color-primary)', // #526488
          600: 'var(--color-primary-600)', // #3E4F70
          700: 'var(--color-primary-700)', // #2C3A57
          800: 'var(--color-primary-800)', // #1C263B
          900: 'var(--color-primary-900)', // #0D131E
        },
        gold: {
          50: 'var(--color-gold-50)', // #F1f1f1
          100: 'var(--color-gold-100)', // #6E5A32
          200: 'var(--color-gold-200)', // #987328
          300: 'var(--color-gold-300)', // #C88E17
          400: 'var(--color-gold-400)', // #ffac00
          DEFAULT: 'var(--color-gold)', // #FFB822
          600: 'var(--color-gold-600)', // #FFC444
          700: 'var(--color-gold-700)', // #FFD066
          800: 'var(--color-gold-800)', // #FFDB88
          900: 'var(--color-gold-900)', // #FFE6AA
        },
      },
      screens: {
        xs: '480px', // Added xs
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['responsive', 'hover', 'focus'],
      opacity: ['hover'],
      borderColor: ['hover', 'focus'],
      margin: ['first', 'last'],
      backgroundColor: ['odd', 'even'],
      scale: ['hover', 'active', 'group-hover'],
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    },
  },
}
