<template>
<div>
    <div>这是B.Vue文件</div>
    <div>这是B.Vue文件</div>
    <div>这是B.Vue文件</div>
    <div>这是B.Vue文件</div>
    <div>这是B.Vue文件</div>
    <div>这是B.Vue文件</div>
    <router-link to="/a">跳转到a</router-link>
    <button @click="toACom">点击按钮跳转到a组件</button>

</div>
</template>

<script>
export default {
  data () {
      return {}
  },
  methods: {
    toACom () {
      console.log(this.$router)

      this.$router.push({ path: "/a"})
    }
  }
}
</script>