<template>
  <div class="app-footer" id="app-footer">
    <div class="footer-main">
      <div class="footer-logo wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
        <div class="logo"><img src="@/assets/images/logo.png"/></div>
        <div class="desc">
          <p>{{ t('common.footer.show') }}</p>
        </div>
      </div>
      <div class="footer-link wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
        <div class="item-title"><h4>{{ t('home.custom.contact') }}</h4></div>
        <div class="item-contact">
          <div class="icon"> <n-icon :component="MdPhonePortrait" size="24"/> </div>
          <div class="info">
            <p><a href="tel:86-17320528525">86-17320528525（{{t('common.link.wx')}}）</a></p>
          </div>
        </div>
        <div class="item-contact">
          <div class="icon"> <n-icon :component="IosCall" size="24"/> </div>
          <div class="info">
            <p><a href="tel:86-027-85566566">86-027-85307885</a></p>
          </div>
        </div>
        <div class="item-contact">
          <div class="icon"> <n-icon :component="MdMail" size="24"/> </div>
          <div class="info">
            <p><a href="mailto:sales@dirmarketresearch.com">sales@dirmarketresearch.com</a></p>
          </div>
        </div>
        <div class="item-contact">
          <div class="icon"> <n-icon :component="IosPin" size="24"/> </div>
          <div class="info">
            <p>{{ t('common.footer.area') }}</p>
            <p>{{ t('common.footer.street') }}</p>
          </div>
        </div>
      </div>
      <div class="footer-wx wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
        <div class="enterprise-wx">
          <p>{{ t('common.footer.customer') }}</p>
          <img src="@/assets/images/wx-02.png"/>
        </div>
        <div class="wx">
          <p>{{ t('common.footer.office') }}</p>
          <img src="@/assets/images/wx-03.jpg"/>
        </div>
      </div>
    </div>
    <div class="footer-under wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
      <div class="footer-nav">
        <div class="footer-nav-link">
          <a :href="(lang === 'zh-CN'?'':'/en')+'/report-industries'">{{ t('common.navigate.report') }}</a>
          <a :href="(lang === 'zh-CN'?'':'/en')+'/market'">{{ t('common.navigate.market') }}</a>
          <a :href="(lang === 'zh-CN'?'':'/en')+'/news-categories'">{{ t('common.navigate.news') }}</a>
          <a :href="(lang === 'zh-CN'?'':'/en')+'/aboutUs'">{{ t('common.navigate.aboutUs') }}</a>
        </div>
      </div>
      <div class="footer-under-desc">
        <span>Copyright (c) DI.Research.com All rights reserved.</span>
        <span class="pt-20"><a href="http://beian.miit.gov.cn" target="_blank">鄂ICP备2023005961号-1</a></span>
        <span class="pt-20"><a href="http://www.beian.gov.cn/" target="_blank">鄂公网安备 42308123001462 号</a></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { NIcon } from 'naive-ui';
  import { MdPhonePortrait,IosPin,MdMail, IosCall } from '@vicons/ionicons4'
  import { useI18n } from 'vue-i18n';
  import { useLocaleStoreWithOut } from '@/store';
  import { langOnBrowser } from '@/utils';
  const { t } = useI18n();
  const lang = langOnBrowser();
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  .footer-main{
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .footer-logo{
      width: 30%;
      img{
        max-width: 160px;
        max-height: 120px;
      }
    }
    .footer-link{
      width: calc(70% - 440px);
      .item-title{
        height: 77.66px;
        line-height: 62px;
        h4{
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }
      }
      .item-contact{
        display: flex;
        padding-bottom: 10px;
        color: #707070;
        .info>p{
          margin: 0;
          font-size: 17px;
          padding-left: 5px;
        }
        .icon>.n-icon{
          vertical-align: middle;
        }
        .wx{
          >p{
            text-align: center;
            font-size: 16px;
            margin: 0 0 5px 0;
          }
          >img{
            max-width: 120px;
            max-height: 120px;
          }
        }
      }
    }
    .footer-wx{
      width: 360px;
      text-align: center;
      display: flex;
      p{
        font-size: 20px;
        font-weight: 700;
        color: #18a058;
        width: 180px;
      }
      .enterprise-wx{
        img{width: 140px;padding-top: 7px;}
      }
      .wx{
        img{width: 150px;}
      }

    }
  }
  .footer-under-desc{
    text-align: center;
    border-top: 1px solid #f2f2f2;
    padding: 15px 0;  
    color: #707070;
    >p{
      margin: 0;
    }
  }
  .footer-nav{
    text-align: center;
    padding: 15px 0;
    .footer-nav-link{
      padding: 5px;
      background-color: #376092;
      color: #fff;
      >a{
        padding: 0 10px;
        font-size: 16px;
      }
    }
  }
}
</style>