<template>
  <div class="app-container">
    <NuxtPage />
  </div>
</template>

<script setup>
// Component logic here if needed
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap&subset=arabic');

/* Global CSS Reset and Variables */
:root {
  --primary-color: #e67e22;
  --secondary-color: #27ae60;
  --dark-color: #2c3e50;
  --light-color: #ecf0f1;
  --background-color: #f4f7f6;
  --white: #ffffff;
  --text-color: #333;
  --border-color: #e0e0e0;
  --shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  --font-family: 'Tajawal', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  font-weight: 500;
  line-height: 1.8;
  background-color: var(--background-color);
  color: var(--text-color);
  direction: rtl;
  text-align: right;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.8rem;
  color: white;
}

h2 {
  font-size: 2.4rem;
  color: var(--primary-color);
}

h3 {
  font-size: 1.8rem;
  color: var(--dark-color);
}

h4 {
  font-size: 1.4rem;
  color: var(--dark-color);
}

p {
  margin-bottom: 1rem;
  line-height: 1.8;
}

/* Links */
a {
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
  text-decoration: underline;
}


/* Layout Components */

</style>
