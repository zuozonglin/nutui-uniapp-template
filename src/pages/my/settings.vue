<script lang="ts" setup>

</script>

<template>
  <uni-card margin="0" padding="5px" :is-shadow="false" :border="false">
    <UniList :border="false">
      <UniListItem title="绑定手机号" clickable :show-extra-icon="true" :extra-icon="{ color: '#fa2c19', size: '22', type: 'phone' }" link />
      <UniListItem title="其它操作" clickable :show-extra-icon="true" :extra-icon="{ color: '#1778ad', size: '22', type: 'star' }" link />
    </UniList>
  </uni-card>
  <div class="px-10 mt-10">
    <NutButton block type="primary">
      退出登录
    </NutButton>
  </div>
</template>

<route lang="json">
{
  "style": {
    "navigationStyle": "default",
    "navigationBarTitleText": "账号设置"
  }
}
</route>

<style lang="scss" scoped>
@import '../../styles/uniset';
</style>
