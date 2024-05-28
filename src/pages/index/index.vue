<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import { onMounted, reactive } from 'vue'
import type { MainGrid } from '@/api'
import { fetchGitHubRepo } from '@/api'

// #ifdef MP
const repo = ref('yang1206/uniapp-template')
const { data } = useQuery(
  computed(() => {
    return {
      ...fetchGitHubRepo(repo.value),
    }
  }),
)
// #endif

const state = reactive({
  page: 0,
  list: [] as string[],
  mainGridList: [] as MainGrid[],
})

onMounted(() => {
  state.list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  ]
  state.mainGridList = [
    { src: '/static/logo.png', url: '', title: 'uniapp' },
    { src: '/static/vue.svg', url: '', title: 'vue3' },
    { src: '/static/vite.svg', url: '', title: 'vite' },
    { src: '/static/logo.png', url: '', title: '标题' },
  ]
})
</script>

<template>
  <div class="px-4 text-center text-gray-700 font-sans">
    <div flex="~ justify-evenly" class="swiper-container">
      <NutSwiper :init-page="state.page" :pagination-visible="true" pagination-color="#426543" pagination-unselected-color="#808080" auto-play="0" :loop="true">
        <NutSwiperItem v-for="(item, index) in state.list" :key="index">
          <image :src="item" mode="aspectFill" class="swi-img" />
        </NutSwiperItem>
      </NutSwiper>
    </div>
    <NutGrid :border="false">
      <NutGridItem v-for="(v, i) in state.mainGridList" :key="i" :text="v.title">
        <NutAvatar size="large">
          <image :src="v.src" />
        </NutAvatar>
      </NutGridItem>
    </NutGrid>
    <div>
      <div class="i-carbon-campsite" inline-block text-80 />
      <p>
        <!-- #ifdef MP-WEIXIN -->
        <a :href="data?.html_url" text-14px text-gray decoration-none op75 rel="noreferrer" target="_blank"> 一个uniapp，vite，vue3的起始模版 </a>
        <!-- #endif -->
      </p>
    </div>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationStyle": "default",
    "navigationBarTitleText": "首页"
  }
}
</route>

<style lang="scss" scoped>
.swiper-container {
  width: 100vw;
  height: 150px;
}

.nut-swiper-item {
  height: 150px;
  line-height: 150px;

  .swi-img {
    width: 100vw;
    height: 100%;
  }
}

.logo {
  width: 100rpx;
  height: 100rpx;
  margin-top: 50rpx;
  margin-bottom: 50rpx;
  text-decoration: none;
}
</style>
