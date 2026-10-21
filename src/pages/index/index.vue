<template>
  <view class="page">
    <view class="header">
      <image class="logo" src="/static/logo.png" />
      <text class="title">{{ title }}</text>
      <text class="subtitle">uni-app + TDesign 组件库</text>
    </view>

    <view class="section">
      <view class="section-title">按钮 Button</view>
      <view class="row">
        <t-button theme="primary" size="medium" @click="showToast">主要按钮</t-button>
        <t-button theme="light" size="medium" @click="showSuccess">浅色按钮</t-button>
        <t-button variant="outline" size="medium" @click="showLoading">加载中</t-button>
      </view>
    </view>

    <view class="section">
      <view class="section-title">标签 Tag</view>
      <view class="row">
        <t-tag theme="primary" variant="light">Primary</t-tag>
        <t-tag theme="success" variant="light">Success</t-tag>
        <t-tag theme="warning" variant="light">Warning</t-tag>
        <t-tag theme="danger" variant="light">Danger</t-tag>
      </view>
    </view>

    <view class="section">
      <view class="section-title">单元格 Cell</view>
      <t-cell-group theme="card">
        <t-cell title="组件库版本" note="1.0.0" />
        <t-cell title="easycom 自动引入" description="无需手动 import 组件" />
        <t-cell title="开关 Switch">
          <template #note>
            <t-switch :value="switchValue" @change="onSwitchChange" />
          </template>
        </t-cell>
      </t-cell-group>
    </view>

    <t-toast id="t-toast" ref="t-toast" />
  </view>
</template>

<script>
import { Toast } from '@tdesign/uniapp'

export default {
  data() {
    return {
      title: 'Hello',
      switchValue: true,
    }
  },
  methods: {
    onSwitchChange(e) {
      this.switchValue = e.value
    },
    showToast() {
      Toast({ context: this, selector: '#t-toast', message: 'TDesign 已生效' })
    },
    showSuccess() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '操作成功',
        theme: 'success',
        direction: 'column',
      })
    },
    showLoading() {
      Toast({
        context: this,
        selector: '#t-toast',
        message: '加载中...',
        theme: 'loading',
        direction: 'column',
      })
    },
  },
}
</script>

<style>
.page {
  min-height: 100vh;
  padding: 48rpx 32rpx 64rpx;
  box-sizing: border-box;
  background-color: var(--td-bg-color-page, #f5f5f5);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48rpx;
}

.logo {
  width: 160rpx;
  height: 160rpx;
  margin-bottom: 24rpx;
}

.title {
  font-size: 40rpx;
  font-weight: 600;
  color: var(--td-text-color-primary, #000);
}

.subtitle {
  margin-top: 8rpx;
  font-size: 26rpx;
  color: var(--td-text-color-secondary, #666);
}

.section {
  margin-bottom: 40rpx;
}

.section-title {
  margin-bottom: 20rpx;
  font-size: 28rpx;
  font-weight: 500;
  color: var(--td-text-color-secondary, #666);
}

.row {
  /* TDesign 按钮自带 margin: auto（居中），用 grid 的 max-content 列避免被均分撑开 */
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  justify-content: start;
  align-items: center;
  gap: 20rpx;
}
</style>
