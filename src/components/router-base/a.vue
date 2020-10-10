<template>
  <div>
    <div>这是A.Vue文件</div>
    <div>这是A.Vue文件</div>
    <div>这是A.Vue文件</div>
    <div>这是A.Vue文件</div>
    <div>这是A.Vue文件</div>
    <div>这是A.Vue文件</div>
    <div>这是A.Vue文件</div>

    <router-link to="/b">跳转到b</router-link>
    <button @click="toBCom">点击按钮跳转到b组件</button>
    <a-child :toChild="test" @child-parent-func="getChildFunc"></a-child>
    
  </div>
</template>

<script>
import AChild from './a-child.vue'
export default {
  components: {
    AChild
  },
  data () {
    return {
      test: "传入组件内部参数"
    }
  },
  methods: {
    getChildFunc (data) {
      console.log(data)
    },
    toBCom () {
      console.log(this.$router)

      this.$router.push({ path: '/b'})
      // this.$router.push({name: 'b', params: 'bob', userInfo:'123',path: '/b'})
    }
  }
}
</script>
