<script lang="ts" setup>
import { useAppStore } from '@/store'

const { darkMode } = storeToRefs(useAppStore())
const page = ref(getCurrentPages()[0].route)
const activeIndex = ref()
const aColor = ref('#21dd40')
const unColor = ref('#84929A')
const size = ref('24rpx')

// 定义TabBar页面 注意此处页面的顺序不要乱，与TabBar实际显示顺序一致
const tabPages = [
  'pages/index/index',
  'pages/category/category',
  'pages/my/my',
]

onShow(async () => {
  activeIndex.value = tabPages.indexOf(page.value)
})

function changeTab(_: any, index: number | string) {
  uni.switchTab({
    url: `/${tabPages[index as number]}`,
  })
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

<style lang="scss">
:root, page {
  background-color: $uni-bg-color-grey;

  --nut-noticebar-across-height: 30px;
  --nut-noticebar-box-padding: 0 5px;
  --nut-noticebar-lefticon-margin: 0 2px;
  --nut-noticebar-righticon-margin: 0 2px;
  --nut-noticebar-font-size: 12px;

}

.header {
  color: #fff;
  background-color: black;
}
</style>
