<script lang="ts" setup>
import { useAppStore } from '@/store'

const { darkMode } = storeToRefs(useAppStore())
const page = ref(getCurrentPages()[0].route)
const activeIndex = ref()
const aColor = ref('#21dd40')
const unColor = ref('#84929A')
const size = ref('24rpx')

onShow(async () => {
  if (page.value === 'pages/index/index')
    activeIndex.value = 0
  else if (page.value === 'pages/category/category')
    activeIndex.value = 1
  else if (page.value === 'pages/my/my')
    activeIndex.value = 2
})

function changeTab(_: any, index: number | string) {
  if (index === 0) {
    uni.switchTab({
      url: '/pages/index/index',
    })
  }
  else if (index === 1) {
    uni.switchTab({
      url: '/pages/category/category',
    })
  }
  else if (index === 2) {
    uni.switchTab({
      url: '/pages/my/my',
    })
  }
}
</script>

<template>
  <nut-config-provider :theme="darkMode ? 'dark' : ''">
    <slot />
    <!-- 支付宝小程序自定义 tabbar需要特殊处理 -->
    <!-- #ifndef MP-ALIPAY -->
    <NutTabBar
      v-model="activeIndex"
      :size="size" :active-color="aColor"
      :unactive-color="unColor" safe-area-inset-bottom bottom placeholder @tab-switch="changeTab"
    >
      <nut-tabbar-item tab-title="首页" icon="home" @click="changeTab" />
      <nut-tabbar-item tab-title="分类" icon="category" @click="changeTab" />
      <nut-tabbar-item dot tab-title="我的" icon="my" @click="changeTab" />
    </NutTabBar>
    <!-- #endif -->
  </nut-config-provider>
</template>

<style>
.header {
  color: #fff;
  background-color: black;
}
</style>
