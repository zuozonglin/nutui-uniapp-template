<script lang="ts" setup>
import { categoryInfo, customCategory } from './data.json'

const state = reactive({
  topCategoryIndex: 0,
  category: [{}],
})

onMounted(() => {
  state.category = categoryInfo.category
})

function changeTopLevel(index: any) {
  // 点击顶级分类，切换子分类
  // console.log('当前点击的顶级分类索引', index)
  state.topCategoryIndex = index
}
function toCategoryDetail() {
  // 跳转到当前分类的详情页
  // console.log('进入当前分类明细页面')
}
</script>

<template>
  <NutCategory :category="state.category" @change="changeTopLevel">
    <NutCategoryPane :category-child="state.category[state.topCategoryIndex].children" @on-change="toCategoryDetail" />
  </NutCategory>
</template>

<route lang="json">
{
  "style": {
    "navigationStyle": "default",
    "navigationBarTitleText": "分类",
    "navigationBarBackgroundColor": "#fa2c19",
    "navigationBarTextStyle": "white"
  }
}
</route>

<style lang="scss" scoped>
::v-deep .nut-category{
  .nut-category__cateList > view:first-child {
    position: fixed;
    width: 100px;
  }

  .nut-category-pane{
    margin-left: 100px;

    // width: calc(100vw - 100px);
  }
}
</style>
