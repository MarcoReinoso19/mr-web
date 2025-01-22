<script setup lang="ts">
const themes = ['day', 'evening', 'night']
const icons = ['i-mdi-white-balance-sunny', 'i-mdi-weather-sunset', 'i-mdi-weather-night']
const actualTheme = ref(0)
function toggleTheme() {
  actualTheme.value = (actualTheme.value + 1) % themes.length
  const html = document.querySelector('html')
  if (!html) return
  // Remueve todas las clases relacionadas con temas
  themes.forEach(theme => html.classList.remove(theme))

  // Agrega la clase correspondiente al tema actual (excepto "day")
  const newTheme = themes[actualTheme.value]
  if (actualTheme.value !== 0) {
    html.classList.add(newTheme)
  }
}
</script>
<template>
  <div class="relative">
    <button
      class="inline-flex w-full justify-center rounded-full bg-primary-500/20 text-white/50 hover:text-white p-2 hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      @click="toggleTheme()"
    >
      <span :class="`${icons[actualTheme]}`" class="h-6 w-6"></span>
    </button>
  </div>
</template>
