<script lang="ts">
 export default {
    name:'Footer',
 }
</script>

<template>
      <div class="px-8 py-3 bg-black text-left w-100" id="footer">
    <div class="footer-text">
      <label
        >Copyright &copy 2020, Bookstore Private Limited. All Rights
        Reserved</label
      >
    </div>
  </div>
</template>

<style scoped>

#footer {
  height: 50px;
  display: flex;
  position: relative;
  bottom: 0;
}

.footer-text {
  width: 80%;
  margin: auto;
  font-size: small;
}
</style>