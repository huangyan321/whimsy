# Button 按钮

常用操作按钮

## 基础用法

基础的函数用法

:::demo 使用`size`、`color`、`pain`、`round`属性来定义 Button 的样式。

```vue
<template>
  <client-only>
    <div style="margin-bottom:20px;">
      <WButton color="blue">主要按钮</WButton>
      <WButton color="green">绿色按钮</WButton>
      <WButton color="gray">灰色按钮</WButton>
      <WButton color="yellow">黄色按钮</WButton>
      <WButton color="red">红色按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
      <WButton color="blue" plain>朴素按钮</WButton>
      <WButton color="green" plain>绿色按钮</WButton>
      <WButton color="gray" plain>灰色按钮</WButton>
      <WButton color="yellow" plain>黄色按钮</WButton>
      <WButton color="red" plain>红色按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
      <WButton size="small" plain>小按钮</WButton>
      <WButton size="medium" plain>中按钮</WButton>
      <WButton size="large" plain>大按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
      <WButton color="blue" round plain icon="search">搜索按钮</WButton>
      <WButton color="green" round plain icon="edit">编辑按钮</WButton>
      <WButton color="gray" round plain icon="check">成功按钮</WButton>
      <WButton color="yellow" round plain icon="message">提示按钮</WButton>
      <WButton color="red" round plain icon="delete">删除按钮</WButton>
    </div>
    <div style="margin-bottom:20px;">
      <WButton color="blue" round plain icon="search"></WButton>
      <WButton color="green" round plain icon="edit"></WButton>
      <WButton color="gray" round plain icon="check"></WButton>
      <WButton color="yellow" round plain icon="message"></WButton>
      <WButton color="red" round plain icon="delete"></WButton>
    </div>
  </client-only>
</template>
```

:::

## 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置 icon 属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用 i 标签即可，可以使用自定义图标。

```vue
<template>
  <client-only>
    <div class="flex flex-row">
      <WButton icon="edit" plain></WButton>
      <WButton icon="delete" plain></WButton>
      <WButton icon="share" plain></WButton>
      <WButton round plain icon="search">搜索</WButton>
    </div>
  </client-only>
</template>
```
