<script lang="ts" setup>
async function loadData() {
  setTimeout(() => {
    // console.log('...数据加载完成')
    uni.stopPullDownRefresh()
  }, 1000)
}

function clickList() {
  uni.showToast({
    icon: 'none',
    title: `列表被点击了`,
  })
}

onPullDownRefresh(() => {
  loadData()
})

onMounted(() => {
  loadData()
})
</script>

<template>
  <div flex="fxcol" class="head-container">
    <div flex="~" class="head-top">
      <div flex="~" class="head-top-left">
        <div class="fxcc">
          <div class="fxcc muy-avatar">
            <image
              class="wh-fu" mode="aspectFill" src="https://img12.360buyimg.com/n1/jfs/t1/166503/6/31222/126336/6376f204E69a42681/b6c0ae21fce8e356.jpg"
            />
          </div>
        </div>
        <div class="fxcol justify-center login-status" style="padding: 10px;">
          <div style="font-size: 20px;font-weight: bold;">
            未登录
          </div>
          <div style="padding: 10px 0;font-size: 10px;">
            UID: 123456
          </div>
        </div>
      </div>
      <div class="fxcc head-top-right">
        <NutIcon name="scan" size="24" />
        <text style="height: 20px;font-size: 12px;line-height: 20px;">
          推荐码
        </text>
      </div>
    </div>
    <div class="head-bottom">
      <NutGrid :border="false">
        <div class="fxcol-cc grid-item">
          <div class="fxcc" style="font-weight: bold;">
            10
          </div>
          <div class="fxcc" style="font-size: 12px;">
            积分
          </div>
        </div>
        <div class="fxcol-cc grid-item">
          <div class="fxcc" style="font-weight: bold;">
            10.00
          </div>
          <div class="fxcc" style="font-size: 12px;">
            余额
          </div>
        </div>
      </NutGrid>
    </div>
  </div>
  <uni-card margin="5px">
    <template #title>
      <UniList>
        <UniListItem title="我的订单" link />
      </UniList>
      <div class="mt-16" />
      <NutGrid :column-num="5" :border="false">
        <NutGridItem text="待付款">
          <div class="i-iconamoon-folder-video" />
        </NutGridItem>
        <NutGridItem text="待发货">
          <div class="i-iconamoon-box-duotone" />
        </NutGridItem>
        <NutGridItem text="待收货">
          <div class="i-iconamoon-delivery-fast" />
        </NutGridItem>
        <NutGridItem text="待评价">
          <div class="i-iconamoon-edit" />
        </NutGridItem>
        <NutGridItem text="退款/售后">
          <div class="i-iconamoon-synchronize" />
        </NutGridItem>
      </NutGrid>
    </template>
  </uni-card>
  <uni-card margin="5px" padding="5px">
    <UniList :border="false">
      <UniListItem title="开启点击反馈" clickable @click="clickList" />
      <UniListItem title="默认 navigateTo 方式跳转页面" link to="/pages/index/index" />
      <UniListItem title="reLaunch 方式跳转页面" link="reLaunch" to="/pages/index/index" />
      <UniListItem
        :show-extra-icon="true" :extra-icon="{ color: '#fa2c19', size: '22', type: 'gear' }"
        title="账号设置" link to="/pages/my/settings"
      />
    </UniList>
  </uni-card>
</template>

<route lang="json">
{
  "style": {
    "navigationStyle": "default",
    "navigationBarTitleText": "个人中心",
    "navigationBarBackgroundColor": "#fa2c19",
    "navigationBarTextStyle": "white",
    "enablePullDownRefresh": true
  }
}
</route>

<style lang="scss" scoped>
@import '../../styles/uniset';

.head-container {
  width: 100vw;
  height: 170px;
  color: #fff;
  background-color: $muy-primary-color;

  .head-top {
    padding: 15px;

    .head-top-left {
      .muy-avatar {
        position: relative;
        flex: 0 0 auto;
        width: 70px;
        height: 70px;
        overflow: hidden;
        line-height: 70px;
        color: #666;
        background-color: $uni-bg-color-grey;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        border: 2px solid #f99604;
        border-radius: 50%;
      }
    }

    .head-top-right {
      margin-left: auto;
    }
  }

  .head-bottom {
    .grid-item {
      flex-basis: 25%;
    }
  }
}
</style>
