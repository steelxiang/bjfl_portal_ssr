<template>
  <div class="home">
    <div class="home-page" id="home-page">
      <div class="carousel">
        <n-carousel :autoplay="true" :interval="3000">
          <template v-for="(item,index) in carouselList">
            <n-carousel-item>
              <div class="img">
                <img class="carousel-img" :src="BaseUrl+'/carousel/'+item.name"/>
              </div>
              <div class="desc">
                <div class="slogan">
                  <!--data-wow-duration="3s" :data-wow-delay="(index*3)+'s'" data-wow-iteration="infinite"-->
                  <h3 class="wow fadeInLeft">{{ item.title }}</h3>
                  <p class="wow fadeInRight">{{ item.desc }}</p>
                </div>
                <div class="search">
                  <n-input-group>
                    <n-button size="large" type="primary" @click="handleSearch" style="padding: 0 10px;"><n-icon :component="MdSearch" size="30" color="#fff"/></n-button>
                    <n-input type="text" size="large" :placeholder="t('report.content.keyword')" v-model:value="keyword" clearable style="background-color: #fafafa;"/>
                  </n-input-group>
                  <!-- <n-input type="text" size="large" :placeholder="t('report.content.keyword')" v-model:value="keyword" clearable>
                      <template #prefix>
                        
                      </template>
                  </n-input> -->
                </div>
              </div>
            </n-carousel-item>
          </template>
        </n-carousel>
      </div>
    </div>

    <!--报告类别-->
    <div class="reports-category" id="reports-category">
      <div class="container">
        <div class="report-title title wow fadeInUp" data-wow-duration="3s" data-wow-iteration="1" data-wow-offset="30">
          <h2>{{t('home.report.title')}}</h2>
        </div>
        <div class="reports-category-box wow fadeInDown" data-wow-duration="3s" data-wow-iteration="1" data-wow-offset="30">
          <template v-for="vo in reportDict">
            <div class="rcb-box">
              <a @click="handleReport(vo.dictValue)" class="rcb-item">
                <n-card size="medium">
                  <span :class="vo.dictIcon" class="f70"></span>
                  <span class="rcb-text">{{ vo.dictLabel }}</span>
                </n-card>
              </a>
            </div>
          </template>
          

          <!-- <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'1', categoryName: t('home.report.aviation')}}" class="rcb-item">
              <n-card size="medium" >
                <span class="iconfont icon-hangtiantubiao- f100"></span>
                <span class="rcb-text">{{ t('home.report.aviation') }}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'2', categoryName: t('home.report.pharmaceuticals')}}" class="rcb-item">
              <n-card size="medium" >
                <span class="iconfont icon-yaopin f100"></span>
                <span class="rcb-text">{{ t('home.report.pharmaceuticals')}}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'3', categoryName: t('home.report.industry')}}" class="rcb-item">
              <n-card size="medium" >
                <span class="iconfont icon-jixiebi f100"></span>
                <span class="rcb-text">{{t('home.report.industry')}}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'4', categoryName: t('home.report.medical')}}" class="rcb-item">
              <n-card size="medium" >
                <span class="iconfont icon-yiliaoqixie f100"></span>
                <span class="rcb-text">{{t('home.report.medical')}}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'5', categoryName: t('home.report.electronic')}}" class="rcb-item">
              <n-card size="medium">
                <span class="iconfont icon-dianzixue- f100"></span>
                <span class="rcb-text">{{ t('home.report.electronic') }}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'6', categoryName: t('home.report.energy')}}" class="rcb-item">
              <n-card size="medium">
                <span class="iconfont icon-fengshan f100"></span>
                <span class="rcb-text">{{ t('home.report.energy') }}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'7', categoryName: t('home.report.it')}}" class="rcb-item">
              <n-card size="medium" >
                <span class="iconfont icon-gl-network f100"></span>
                <span class="rcb-text">{{t('home.report.it')}}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'8', categoryName: t('home.report.goods')}}" class="rcb-item">
              <n-card size="medium" >
                <span class="iconfont icon-shangpin f100"></span>
                <span class="rcb-text">{{ t('home.report.goods') }}</span>
              </n-card>
            </router-link>
          </div>

          <div class="rcb-box">
            <router-link :to="{name: 'reportIndex',params:{category:'9', categoryName: t('home.report.automobile')}}" class="rcb-item">
              <n-card size="medium" >
                <span class="iconfont icon-qiche f100"></span>
                <span class="rcb-text">{{t('home.report.automobile')}}</span>
              </n-card>
            </router-link>
          </div> -->
        </div>
      </div>
    </div>

    <!--研究分析报告-->
    <div class="report">
      <div class="container">
        <div class="report-title title wow fadeInUp" data-wow-duration="2s" data-wow-iteration="1">
          <h2>{{ t('home.report.sndtitle') }}</h2>
        </div>
        <div class="report-content wow fadeInDown" data-wow-duration="2s" data-wow-iteration="1">
          <template v-for="item in reports">
            <div class="report-box">
              <n-card size="medium" content-style="display:flex">
                <div class="img">
                  <img :src="BaseUrl+'/report/'+item.fileName"/>
                </div>
                <div class="text">
                  <h4>{{ item.title }}</h4>
                  <span>{{ item.publishDate }}</span>
                  <div class="show">
                    <a @click="viewReportDetail(item)"><n-icon :component="MdEye" size="16"/>{{t('home.report.look')}}</a>
                    <a @click="reportDetail" class="more"><n-icon :component="MdReorder" size="16"/>{{t('home.report.more')}}</a>
                    <!-- <router-link :to="{name:'reportDetail',params:{ webTitle: item.webTitle+'-'+item.id}}"><n-icon :component="MdEye" size="16"/></router-link>
                    <router-link :to="{name:'reports'}" class="more"><n-icon :component="MdReorder" size="16"/>{{t('home.report.more')}}</router-link> -->
                  </div>
                </div>
              </n-card>
            </div>
          </template>

        </div>
      </div>
    </div>

    <!--市场资讯-->
    <div class="hot-news" id="hot-news">
      <div class="container">
        <div class="news-title title wow fadeInUp" data-wow-duration="2s">
          <h2>{{ t('market.hot.title') }}</h2>
        </div>
        <div class="news-content">
          <template v-for="item in markets">
            <div class="news-box wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
              <div class="image">
                <a><img :src="BaseUrl+'/fileupload/'+item.filePath+item.fileName"/></a>
              </div>
              <div class="box-content">
                <a @click="viewNewsDetail(item)"><h3>{{ item.title }}</h3></a>
                <!-- <router-link :to="{name: 'newsDetail',params: { webTitle: item.webTitle+'-'+item.id} }"><h2>{{ item.title }}</h2></router-link> -->
                <p>{{ item.publishDate }}</p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <!-- <div class="home-profile">
      <div class="container">
        <div class="title wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
          <h2>{{  t('home.custom.title') }}</h2>
        </div>

        <div class="home-profile-box">
          <div class="box-text wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0s" data-wow-offset="0">
            <h3>{{ t('home.custom.title') }}</h3>
            <p>{{ t('home.custom.exp') }}</p>
            <p>{{ t('home.custom.desc') }}</p>
            <p class="btn"><n-button type="success" size="large" @click="handleContact">{{ t('home.custom.contact') }}</n-button></p>
          </div>

          <div class="box-img wow fadeInRight" data-wow-duration="3s" data-wow-delay="0s" data-wow-offset="0">
            <div>
              <img src="@/assets/images/swtp02.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="home-contact" id="home-contact">
      <div class="contact-row wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
        <div class="contact-txt">
          <span>{{t('home.custom.sndtitle')}}</span>
        </div>
        <div class="contact-btn">
          <a @click="handleContact">{{ t('report.detail.custom') }}</a>
        </div>
      </div>
      <div class="contact-img wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
        <img src="@/assets/images/swtp.jpg"/>
      </div>
    </div>

    <n-modal :show="demandShow" preset="dialog" :title="t('report.detail.subscribe')" 
        @close="demandShow = false" 
        @esc="demandShow = false"
        @mask-click="demandShow = false"
        :style="'min-width: 40%'">
        <demand @closeDialog="handleCloseDiag"/>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
  import { NCarousel, NCarouselItem,NCard, NIcon, NInput, NModal, NButton, NInputGroup} from 'naive-ui';
  import { MdEye,MdReorder, MdSearch } from '@vicons/ionicons4';
  import { useI18n } from 'vue-i18n';
  import { onMounted, ref } from 'vue';
  import { DictData, carouselListData, reportAndMarketListData } from '@/api/basedata/home';
  import { BaseUrl } from '@/api/model/common';
  import { useLocaleStoreWithOut } from '@/store';
  import { ResearchReport } from '@/api/report/report';
  import { MarketInfo } from '@/api/report/market';
  import Demand from './../report/demand.vue';
  import { getLocalSessionReport } from '@/store/cache';
  import { useRouter } from 'vue-router';
  import { langOnBrowser } from '@/utils';

  const { t } = useI18n();
  const carouselList = ref();   // 轮播图数据
  const reports = ref<ResearchReport[]>();  //研究报告
  const markets = ref<MarketInfo[]>();  //市场资讯
  const demandShow = ref(false);  // 需求页面
  const reportDict = ref<DictData[]>();
  const keyword = ref<string>('');  //关键字
  const lang = langOnBrowser();

  onMounted( async ()=>{
    // 轮播图
    const data = await carouselListData({lang: lang});
    carouselList.value = data?.data;

    // 研究报告分类
    reportDict.value = await getLocalSessionReport();

    // 研究报告列表
    const map = await reportAndMarketListData({lang: lang});
    reports.value = map.data.report;
    markets.value = map.data.market;
  });

  // 联系我们
  function handleContact(){
    demandShow.value = true;
  }

  // 关闭diag
  function handleCloseDiag(){
    demandShow.value = false;
  }

  //查询
  const router = useRouter();
  function handleSearch(){
    const language = lang === 'zh-CN'?'': 'en';
    router.push({ name: 'reports',params: {lang: language, keyword: keyword.value}});
  }

  // 资讯详情
  function viewNewsDetail(item: MarketInfo){
      const language = lang === 'zh-CN'?'':'en'
      router.push({ name: 'newsDetail', params: { webTitle: item.webTitle+'-'+item.id, lang: language} });
  }

  // 报告详情
  function viewReportDetail(item: ResearchReport){
    const language = lang === 'zh-CN'?'': 'en';
    router.push({ name: 'reportDetail', params: { webTitle: item.webTitle+'-'+item.id, lang: language } });
  }

  // 报告列表
  function reportDetail(){
    const language = lang === 'zh-CN'?'': 'en';
    router.push({ name: 'reports',params: {lang: language}});
  }

  function handleReport(value: string){
    const language = lang === 'zh-CN'?'':'en'
    router.push({ name: 'reports', params: { category: value, lang: language }});
  }

</script>


<style scoped lang="scss">
  .home{
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    .home-page{
      height: 100vh;
      scroll-snap-align: start;
      overflow: hidden;
      .carousel{
        width: 100%;
        height: 100%;
        overflow: hidden;
        .desc{
          width: 1200px;
          padding-top: 100px;
          margin: 0 auto;
          line-height: 1;
          position: relative;
          height: 100%;
          overflow: hidden;
          z-index: 100;
          .slogan{
            display: inline-block;
            height: 300px;
            h3{
              color: #fff;
              font-size: 48px;
              line-height: 1.5;
              margin-bottom: 48px;
            }
            p{
              opacity: .8;
              font-size: 18px;
              color: #fff;
              line-height: 1.7;
            }
          }
          .search{
            padding-top: 60px;
            width: 75%;
            .search-btn{
              .n-icon{
                vertical-align: middle;
              }
            }
          }
        }
        .img{
          position: absolute;
          top: -50px;
          bottom: -50px;
          left: -50px;
          right: -50px;
          .carousel-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }

  // 报告分类 
  .reports-category-box{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-end;
    .rcb-box{
      width: 15.66%;
      margin-right: 12px;
      margin-bottom: 12px;
      .rcb-item{
        text-align: center;
        &::after{
          position: absolute;
          left: 0;
          bottom: 0;
          content: "";
          width: 100%;
          background: #18a058;
          display: block;
        }
        &:hover{
          position: relative;
          height: 3px;
          .rcb-text{
            color: #18a058;
          }
        }
        .rcb-text{
          display: flex;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          &:hover{
            color: #18a058;
          }
          &:after{
            bottom: 0;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            -webkit-transition: .55s;
            transition: .55s;
            content: "";
            background: #18a058;
            position: absolute;
            display: block;
            height: 5rem;
            width: 0;
          }
        }
      }
    }
    
    
  }
  
  .report{
    //background-color: #edf0f5;
    
    .report-content{
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .report-box{
        width: 33.33%;
        padding: 0px 10px 10px 0;
        //box-shadow: 2.5px 4.33px 15px 0px rgb(0 0 0 / 15%);
        :hover{
          background-color: #18a058;
          color: #fff;
          .text{
            span{
              color: #fff;
            }
          }
        }
        .img{
          width: 40%;
          height: 13em;
          img{
            width: 100%;
            height: 100%;
            box-shadow: 7px 0 15px rgba(0,87,149,.33);
          }
        }
        .text{
          padding-left: 20px;
          width: 60%;
          h4{  
            //color: #333333;
            line-height: 30px;
            margin: 0.25rem 0 1rem 0;
            transition: all .4s ease;
            min-height: 90px;
            max-height: 90px;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 18px;
            word-break: break-all;
          }
          span{
            color: #9caac6;
            font-size: 14px;
            transition: all .4s ease;
          }
        }
        
      }
    }
  }
  
  // .container{
  //   //width: 75%;
  //   //margin: 0 auto;
  //   //padding: 80px 0 50px 0;
  //   // .title{
  //   //   display: flex;
  //   //   flex-flow: row nowrap;
  //   //   align-items: center;
  //   //   justify-content: center;
  //   //   line-height: 1em;
  //   //   padding-bottom: 20px;
  //   //   >span{
  //   //     padding-right: 5px;
  //   //   }
  //   // }
  // }

  .show{
    padding-top: 10px;
    .n-icon{
      vertical-align: sub;
    }
    .more{
      padding-left: 30px;
    }
  }

  // 热门资讯
  .news-content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .news-box{
      width: 20%;
      //padding: 25px 30px 22px;
      visibility: visible;
      >.image{
        width: 100%;
        height: 240px;
        overflow: hidden;
        img{
          height: 100%;
          transition: transform .7s ease;
          object-fit: cover;
          &:hover{
            transform: scale(1.3);
          }
        }
      }
      .box-content{
        margin: 20px 30px 5px 0;
        a{
          &:hover{
            color: #096ed7;
          }
        }
      }
    }
  }

  .news-content{
    :nth-child(5n+2).news-box{padding-top: 50px;}
    :nth-child(5n+3).news-box{padding-top: 100px;}
    :nth-child(5n+4).news-box{padding-top: 150px;}
    :nth-child(5n+5).news-box{padding-top: 200px;}
  } 

  .category{background-color: #edf0f5;}

  .category-box{
    display: flex;
    padding: 20px 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: #fff;
    margin-right: 10px;
    .img{
      width: 140px;
    }
    .text{
      padding-left: 20px;
      width: calc(100% - 140px);
      h3{
        padding-bottom: 0;
        line-height: 30px;
        font-size: 20px;
        font-weight: 600;
        a{
          overflow: hidden;
          text-overflow: ellipsis;
        }
        a:hover{
          color: #096ed7;
        }
      }
      .time{
        >.icon{
          vertical-align: sub;
        }
        >span{
          padding-left: 4px;
          vertical-align: text-bottom;
        }
      }
      >p{
        min-height: 60px;
        max-height: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px;
      }
    }
  }

  img{
    width: 100%;
  }

  //定制报告
  .home-profile-box{
    display: flex;
    .box-text{
      width: 50%;
      padding: 40px;
      >h3{
        font-size: 20px;
        font-weight: 600;
      }
      >p{
        font-size: 18px;
      }
      .btn{
        padding-top: 50px;
      }
    }
    .box-img{
      width: 50%;
    }
  }

  .home-contact{
    position: relative;
    .contact-row{
      position: absolute;
      left:12.5%;
      top: 160px;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      .contact-txt{
        width: 40%;
        span{
          font-size: 26px;
          color: #fff;
          font-weight: 600;
        }
      }
      .contact-btn{
        width: 30%;
        >a{
          color: #fff;
          font-size: 26px;
          background: #18a058;
          padding: 15px 25px;
        }
      }
      
    }
    .contact-img{
      height: 360px;
      overflow: hidden;
      >img{
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>