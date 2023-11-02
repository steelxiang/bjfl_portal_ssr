<template>
  <div id="layout-wrapper" class="layout-wrapper" :class="inverse">
      <app-header></app-header>
      <div class="main-container">
        <router-view></router-view>
        <div class="layout-link">
          <div class="email">
            <n-popover trigger="hover" placement="left-start">
              <template #trigger>
                <div class="email-icon link-icon"><n-icon :component="IosMail" :size="30" color="#fff"/></div>
              </template>
              <div class="email-cnt link-content">
                <div class="email-title link-title">{{ t('common.link.email') }}</div>
                <div class="link-way"><a href="mailto:sales@dirmarketresearch.com">sales@dirmarketresearch.com</a></div>
              </div>
            </n-popover>
          </div>
          <div class="telphone">
            <n-popover trigger="hover" placement="left-start">
              <template #trigger>
                <div class="email-icon link-icon"><n-icon :component="IosPhonePortrait" :size="30" color="#fff"/></div>
              </template>
              <div class="link-content">
                <div class="link-title">{{ t('common.link.telphone') }}</div>
                <div class="link-way"><a href="tel:17320528525">17320528525</a></div>
              </div>
            </n-popover>
          </div>
          <div class="wx">
            <n-popover trigger="hover" placement="left-start">
              <template #trigger>
                <div class="email-icon link-icon"><n-icon :component="IosChatbubbles" :size="30" color="#fff"/></div>
              </template>
              <div class="link-content">
                <div class="link-title">{{t('common.wx.service')}}</div>
                <div class="link-way">
                  <img src="@/assets/images/wx-02.jpg"/>
                </div>
              </div>
            </n-popover>
          </div>

          <!-- <div class="close"><a class="link-close" @click="close()"><n-icon :component="IosClose" size="18"/></a></div>
          <h4>{{t('common.wx.service')}}</h4>
          <img src="@/assets/images/wx.jpg"/> -->
          
        </div>
      </div>
      <app-footer></app-footer>

      <n-back-top :right="5" :bottom="150" color="#fff" icon-color="#fff" :theme-overrides="{iconColor:'#fff'}"
        style="width:50px;height: 50px;background-color: #18a058;color:#fff;border-radius: 100%;"/>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted,watch,onUnmounted } from 'vue';
  import AppHeader from './Header/index.vue';
  import AppFooter from './Footer/index.vue';
  import { IosMail,IosPhonePortrait,IosChatbubbles } from '@vicons/ionicons4';
  import { RouteRecordName, useRoute } from 'vue-router';
  import { NIcon,NBackTop, NPopover } from 'naive-ui';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n(); 
  const route = useRoute();
  const inverse = ref<string>('');
  const code = ref<string>('none');  // 二维码
  const closeStatus = ref<string>('');
  const scrollTop = ref<number>(0);   // 滚动距离
  const color = ref<string>('#fff');  // 导航栏字体颜色

  onMounted( async () => {
    renderNavbar(route.name);

    window.addEventListener('scroll',onScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll',onScroll);
  });

  watch(() => route.name,renderNavbar);

  // 导航栏切换
  function renderNavbar(routeName: RouteRecordName | null | undefined){
    if((routeName === 'home' || 'marketIndex' === routeName || 'homeEn' === routeName) && scrollTop.value === 0){
      inverse.value = 'inverse';
      code.value = 'none'
      color.value = '#fff'
    }else{
      inverse.value = '';
      code.value = 'block';
      color.value = '#000';
    }
  }

  // 关闭
  // function close(){
  //   code.value = 'none';
  //   closeStatus.value = 'click';
  // }

  // 滚动条事件
  function onScroll(){
    scrollTop.value = document.documentElement.scrollTop;
    if(scrollTop.value === 0 && (route.name === 'home' || 'marketIndex' === route.name || 'homeEn' === route.name)){
      inverse.value = 'inverse';
      code.value = 'none'
      color.value = '#fff'
    }else{
      inverse.value = '';
      if(closeStatus.value != 'click'){
        code.value = 'block';
      }
      color.value = '#000';
    }
  }

  // function setLang(){
  //   let url = router.currentRoute.value.href, lang;
  //   // const params = currentRoute.value.params;
  //   // 如果包含英文
  //   const words = url.split('/');
  //   if(words.includes('/en')){
  //     lang = 'en-US';
  //   }else{
  //     lang = 'zh-CN';
  //   }
  //   useLocaleStoreWithOut().setLocaleInfo(lang);
  //   document.querySelector('html')?.setAttribute('lang', lang);
    
  //   // console.log(currentRoute.value);
  //   // router.push({ name: 'home', params: params});
  //   // 切换语言后，需要重新设置浏览器地址
  //   //location.reload();
  //   //console.log(currentRoute.value);
  //   // if(location.href.indexOf('#reload') === -1){
  //   //   location.href = url + '#reload';
  //   //   location.href = url;
  //   // }
  // }

</script>

<style lang="scss" scoped>
  .main-container {
    margin-top: 80px;
    min-height: calc(100vh - 80px);
    //background-color: #edf0f5;
    .limit-width {
      width: 1220px;
      margin: 0 auto;
    }
  }
.inverse 
  .app-header{
    background-color: transparent;
  }
  .main-container{
    margin-top: 0;
  }

  .layout-link{
    position: fixed;
    bottom: 200px;
    right: 5px;
    display: v-bind('code');
    >div{
      padding-bottom: 5px;
      cursor: pointer;
    }
    .link-icon{
      width: 50px;
      height: 50px;
      border-radius: 5px;
      background-color: #18a058;
      .n-icon{
        line-height: 55px;
        width: 100%;
        text-align: center;
      }
    }
  }

  .link-content{
    padding: 8px;
    text-align: center;
    border: 1px solid #18a058;
    font-size: 16px;
    .link-title{
      border-bottom: 1px solid #18a058;
      padding-bottom: 4px;
      color: #18a058;
    }
    .link-way{
      font-weight: 600;
      padding-top: 4px;
      >img{
        width: 150px;
        height:150px;
      }
    }
  }
  .v-binder-follower-content{top: 23px;}
</style>
<style lang="scss">
  #nav-item .txt{
    color: v-bind('color');
  }
  #nav-item{
    &.router-link-active{
      &::after{
        background-color: v-bind('color');
      }
    }
    &:hover{
      &::after{
        background-color: v-bind('color');
      }
    }
  }
 
</style>
