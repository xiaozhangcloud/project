<template>
  <div>
    <button @click="gobach">返回上一级页面</button>
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  methods: {
    gobach () {
      this.$router.go(-1)
    }
  }
}
</script>
