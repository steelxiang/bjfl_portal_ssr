<template>
  <div class="app-header">
    <div class="header-wrapper">
      <div v-if="!pcShow" class="header-lang">
          <a class="txt" @click="lang('zh-CN')">{{ t('common.lang.zh-CN') }}</a>
          <span class="separator txt">|</span>
          <a class="txt" @click="lang('en-US')">{{ t('common.lang.en-US') }}</a>
      </div>
      <div class="header-inner">
        <div class="left-info">
          <router-link class="title-sec" :to="{ name: language==''?'home':'homeEn', params: {lang: language}}">
            <img src="@/assets/images/logo.png" alt="logo" class="logo">
            <!-- <div class="title-box">
              <div class="sub-title">这是一段描述</div>
              <span class="title">门户站点</span>
            </div> -->
          </router-link>
        </div>
        <!-- <div class="login-box">
          <el-dropdown trigger="click" v-if="token">
            <span class="basic-info">{{userInfo.nickName}}<i class="el-icon-arrow-down el-icon--right"></i></span>
            <template #dropdown>
              <el-dropdown-menu>
                <div class="login-out-txt" @click="handleLoginOut">退出</div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <div class="btn-group" v-else>
            <el-button type="primary" size="small" @click="handleLogin">登录</el-button>
            <el-button type="primary" size="small" @click="handleLoginOrg">注册</el-button>
          </div>
        </div> -->
        <div v-if="pcShow" class="home-nav-bar pc">
          <router-link id="nav-item" class="nav-item" :to="{ name: language==''?'home':'homeEn', params: {lang: language}}">
            <span class="txt">{{ t('common.navigate.home') }}</span>
          </router-link>
          <n-dropdown :options="reportOptions" trigger="hover" size="huge" @select="chooseReportMenu">
            <router-link id="nav-item" class="nav-item" :to="{name:'reports', params: {lang: language}}">
              <span class="txt">{{ t('common.navigate.report') }}</span>
            </router-link>
          </n-dropdown>
          <router-link id="nav-item" class="nav-item" :to="{ name: 'marketIndex', params: {lang: language}}">
            <span class="txt">{{ t('common.navigate.market') }}</span>
          </router-link>
          <n-dropdown :options="newsOptions" trigger="hover" size="huge" @select="chooseNewsMenu">
            <router-link id="nav-item" class="nav-item" :to="{name: 'news',params: {lang: language}}">
              <span class="txt">{{ t('common.navigate.news') }}</span>
            </router-link>
          </n-dropdown>
          <n-dropdown :options="aboutOptions" trigger="hover" size="huge" @select="chooseAboutMenu">
            <router-link id="nav-item" class="nav-item" :to="{ name: 'about', params: {lang: language}}">
              <span class="txt">{{ t('common.navigate.aboutUs') }}</span>
            </router-link>
          </n-dropdown>
          <div id="nav-item" class="lang">
            <a class="txt" @click="lang('zh-CN')">{{ t('common.lang.zh-CN') }}</a>
            <span class="separator txt">|</span>
            <a class="txt" @click="lang('en-US')">{{ t('common.lang.en-US') }}</a>
          </div>
        </div>

        <!--手机端导航-->
        <div v-if="!pcShow" class="mobile">
          <n-dropdown trigger="click" size="huge" :options="mobileMenu" @select="chooseMenu">
            <n-icon :component="MdApps" size="80" color="#fff"/>
          </n-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { useLocaleStoreWithOut } from '@/store';
  import { DropdownOption, NDropdown, NIcon } from 'naive-ui';
  import { Component, h, onMounted, ref } from 'vue';
  import { getLocalSessionNews, getLocalSessionReport } from '@/store/cache';
  import { useRouter } from 'vue-router';
  import { isMobile } from '@/utils/validate';
  import { MdApps, MdHome, IosPaper, IosSearch, MdToday, MdPeople } from '@vicons/ionicons4';
  import { langOnBrowser } from '@/utils';

  const { t } = useI18n();
  const router = useRouter();
  const pcShow = ref<boolean>(true);
  //const mobileShow = ref<string>('none');
  const renderIcon = (icon: string) =>{
    return ()=> {
      return h('span', {class: icon,})
    }
  }
  const renderIconC4 = (icon: Component) => {
    return () => {
      return h(NIcon,null, {
        default: () => h(icon)
      });
    }
  }

  // const renderIconLabel = (option: DropdownOption) => {
  //   return h('a',{ onclick: () => chooseMenu, target: '_blank' },{ default: () => option.label});
  // }
  const reportOptions = [] as any;  //报告列表
  const newsOptions = [] as any;   //行业资讯
  const aboutOptions = [] as any;  //关于我们

  const mobileMenu = [
    { label: t('common.navigate.home'), key: 'home', icon: renderIconC4(MdHome), name: 'home'},
    { label: t('common.navigate.report'), key: 'reports', icon: renderIconC4(IosPaper), children: reportOptions, name: 'reports'},
    { label: t('common.navigate.market'), key: 'market', icon: renderIconC4(IosSearch), name: 'marketIndex'},
    { label: t('common.navigate.news'), key: 'news', icon: renderIconC4(MdToday), children: newsOptions, name: 'news'},
    { label: t('common.navigate.aboutUs'), key: 'about',icon: renderIconC4(MdPeople), children: aboutOptions, name: 'about'},
  ]
  const language = ref<string>('');
  // 中英文切换
  function lang(locale:string){
    useLocaleStoreWithOut().setLocaleInfo(locale);
    document.querySelector('html')?.setAttribute('lang', locale);
    let url = router.currentRoute.value.href;
    // const params = currentRoute.value.params;
    if(locale === 'en-US'){
      url = '/en'+ url;
    }else{
      if(url.includes('/en')){
        url = url.replace('/en','')
      }
      if(!url){
        url = "/";
      }
    }
    // console.log(currentRoute.value);
    // router.push({ name: 'home', params: params});
    // 切换语言后，需要重新设置浏览器地址
    //location.reload();
    location.href = url;
  }

  // 研究报告菜单切换
  function chooseReportMenu(key:string | number,option: DropdownOption){
    router.push({ name: 'reports', params: { category: key, lang: language.value }});
    //router.push({ path: '/reports/'+key+'/'+option.label})
  }

  // 行业资讯
  function chooseNewsMenu(key:string | number){
    router.push({ name: 'news', params: { marketType: key, lang: language.value} });
  }

  onMounted(async () => {
    if(isMobile()){
      //mobileShow.value = 'block';
      pcShow.value = false;
    }

    if(langOnBrowser() === 'en-US'){
      language.value = 'en';
    }
    

    // 下拉菜单
    const cacheDict = await getLocalSessionReport();
    cacheDict?.forEach((vo: { dictLabel: any; dictValue: any; dictIcon: any}) => {
      reportOptions.push({label:vo.dictLabel,key:vo.dictValue, icon: renderIcon(vo.dictIcon),name: 'reports'});
    })

    const cacheDictNews = await getLocalSessionNews();
    cacheDictNews?.forEach((vo: any) => {
      newsOptions.push({label:vo.dictLabel,key:vo.dictValue, icon: renderIcon(vo.dictIcon), name: 'news'});
    })

    aboutOptions.push({label: t('common.navAboutUs.comp'), name: 'about',icon: renderIcon('iconfont iconfont icon-ziyuan')});
    aboutOptions.push({label: t('common.navAboutUs.method'), name: 'link',icon: renderIcon('iconfont icon-chaxun')});
    aboutOptions.push({label: t('common.navAboutUs.order'),name:'order',icon:renderIcon('iconfont icon-a-dingdanguanli2x')});
    aboutOptions.push({label: t('common.navAboutUs.term'),name:'term',icon:renderIcon('iconfont icon-shejiyukaifa-')});
  });
  
  // 关于我们跳转
  function chooseAboutMenu(key:string | number,option: DropdownOption){
    router.push({ name: option.name, params: {lang: language.value } });
  }

  // 手机端跳转
  function chooseMenu(key:string | number, option: DropdownOption){
    if('reports' === option.name){
      router.push({ name: option.name, params: { category: key, lang: language.value } });
    }else if('news' === option.name){
      router.push({ name: option.name, params: { marketType: key, lang: language.value} });
    }else if('home' === option.name){
      router.push({ name: language.value ===''?'home':'homeEn', params: { marketType: key, lang: language.value} });
    }else{
      router.push({ name: option.name, params: {lang: language.value}});
    }
  }

</script>
<style lang="scss">
.app-header {
  z-index: 9;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  height: 80px;
  box-shadow: 2.5px 4.33px 15px 0px rgb(0 0 0 / 15%);
  .header-wrapper {
    transition: all 0.3s;
    // .header-lang{
    //   display: v-bind('mobileShow');    
    // }
    .header-inner {
      width: 1200px;
      margin: 0 auto;
      height: 80px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      .left-info {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .title-sec {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          margin-right: 15px;
          cursor: pointer;
          .logo {
            height: 80px;
            width: 100%;
          }
          .sub-title {
            font-size: 12px;
            color: #fff;
            margin-bottom: 2px;
          }
          .title {
            font-size: 18px;
            font-weight: bold;
            color: #fff;
          }
        }
      }
      .login-box {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .msg-box {
          color: #fff;
          font-size: 15px;
          margin-right: 15px;
          transition: all 0.5s;
          cursor: pointer;
          &:hover {
            color: $blue;
          }
        }
        .avator-box {
          width: 30px;
          height: 30px;
          margin-right: 15px;
          border-radius: 15px;
          overflow: hidden;
          .avator {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .basic-info {
          cursor: pointer;
          color: #fff;
          outline: none !important;
        }
        .btn-group {
          .register {
            background: #fff;
            color: #000;
            border-color: #fff;
            margin-left: 5px;
            &:hover {
              color: $blue;
              border-color: $blue;
            }
          }
        }
      }
      .tool-group {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        .tool-item {
          margin-right: 20px;
          color: #409eff;
          font-size: 15px;
          cursor: pointer;
        }
        .icon {
          font-size: 20px;
        }
      }
    }
    .home-nav-bar {
      margin: 0;
      height: 70px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      //border-top: 1px solid rgba(255, 255, 255, 0.2);
      .nav-item {
        height: 100%;
        margin: 0 20px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .txt {
          font-size: 18px;
          color: #000;
          font-weight: 600;
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
            background: #000;
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
            background: #000;
          }
        }
      }
    }
    //.pc{ display: v-bind('pcShow');}
    //.mobile{ display: v-bind('mobileShow');}
  }
}
.lang{
  color: #000;
  font-weight: 600;
  font-size: 18px;
  margin-left: 30px;
  .separator{
    padding: 0 7px;
  }
}
.n-dropdown-option-body__label{
  font-weight: 600;
}
</style>