<script lang="ts" setup>
import { useQuery } from '@tanstack/vue-query'
import type { CardObj, GridObj } from '@/api'
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

// console.log(toRaw(data.value))
// #endif

const state = reactive({
  swiperList: [] as string[],
  gridList: [] as GridObj[],
  cardList: [] as CardObj[],
  cardPage: 0,
  cardStatus: 'more',
})

onMounted(() => {
  state.swiperList = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  ]
  state.gridList = [
    { src: '/static/logo.png', url: '', title: 'uniapp' },
    { src: '/static/vue.svg', url: '', title: 'vue3' },
    { src: '/static/vite.svg', url: '', title: 'vite' },
    { src: data.value?.owner.avatar_url, url: '', title: '一个头像' },
  ]
  state.cardList = [
    {
      imgUrl: '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      price: '388',
      vipPrice: '368',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>>',
    },
    {
      imgUrl: '//img13.360buyimg.com/n7/jfs/t1/160043/7/44636/141002/664d7579F001d9345/8eed051cb4710906.jpg',
      title: 'Lee男鞋2024夏季新款百搭休闲鞋运动鞋',
      price: '489',
      vipPrice: '289',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: 'Lee鞋靴旗舰店>>',
    },
    {
      imgUrl: '//img11.360buyimg.com/n7/jfs/t1/198734/37/35331/97833/6624bec7F82e18da3/4d34392ea8228357.jpg',
      title: '奥莱专柜丨品牌断码丨尾货处理丨运动减',
      price: '89',
      vipPrice: '88',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: 'Abibas运动小店>>',
    },
  ]
})

onReachBottom(() => {
  if (state.cardStatus !== 'more')
    return
  state.cardStatus = 'loading'
  state.cardPage++
  // 模拟加载下一页数据 此处省略请求数据过程
  setTimeout(() => {
    state.cardList.push(...state.cardList)
    state.cardStatus = 'noMore'
    // console.log(`模拟请求数据结束，没有下一页了，当前页码：${state.cardPage}`)
  }, 1000)
})
</script>

<template>
  <div class="px-4 text-center text-gray-700 font-sans">
    <div flex="~ justify-evenly" class="swiper-container">
      <NutSwiper :init-page="0" :pagination-visible="true" pagination-color="#426543" pagination-unselected-color="#808080" auto-play="0" :loop="true">
        <NutSwiperItem v-for="(item, index) in state.swiperList" :key="index">
          <image :src="item" mode="aspectFill" class="swi-img" />
        </NutSwiperItem>
      </NutSwiper>
    </div>
    <NutNoticebar :close-mode="true" :height="30">
      NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
    </NutNoticebar>
    <NutGrid :border="false">
      <NutGridItem v-for="(v, i) in state.gridList" :key="i" :text="v.title">
        <NutAvatar size="large">
          <image :src="v.src" />
        </NutAvatar>
      </NutGridItem>
    </NutGrid>
    <div class="mt-8 card-container">
      <NutCard
        v-for="(item, index) in state.cardList" :key="index"
        :img-url="item.imgUrl"
        :title="item.title"
        :price="item.price"
        :vip-price="item.vipPrice"
        :shop-desc="item.shopDesc"
        :delivery="item.delivery"
        :shop-name="item.shopName"
      />
      <uni-load-more :status="state.cardStatus" />
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

::v-deep .nut-card {
  margin-bottom: 2px;
  background-color: #fff;

  .nut-card__left > image{
    border-radius: 10px;
  }

  .nut-card__right .nut-card__right__title{
    text-align: left;
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
