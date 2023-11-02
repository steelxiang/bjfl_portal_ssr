<template>
  <!-- <ul class="home-nav-bar">
    <router-link class="nav-item" to="/home" tag="li">
      <span class="txt">首页</span>
    </router-link>
    <router-link class="nav-item" to="/position" tag="li">
      <span class="txt">职位</span>
    </router-link>
    <router-link class="nav-item" to="/notice/1" tag="li">
      <span class="txt">企业</span>
    </router-link>
    <li class="nav-item">
      <span class="txt">招聘会</span>
    </li>
    <router-link class="nav-item" to="/edu" tag="li">
      <span class="txt">资讯</span>
    </router-link>
    <li class="nav-item">
      <span class="txt">创业培训</span>
    </li>
  </ul> -->
</template>

<style lang="scss">
.home-nav-bar {
  margin: 0;
  height: 60px;
  background: rgb(9,130,254);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  .nav-item {
    height: 100%;
    margin: 0 40px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .txt {
      font-size: 16px;
      color: #fff;
    }
    &.router-link-active {
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        background: #fff;
      }
    }
    &:hover {
      position: relative;
      &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        content: '';
        width: 100%;
        height: 3px;
        background: #54cbc4;
      }
    }
  }
}
</style>