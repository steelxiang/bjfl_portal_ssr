<template>
    <div class="market" id="market">
        <div class="market-page">
            <div class="page-top">
                <div class="img">
                    <img src="@/assets/images/core.jpg"/>
                </div>
                <div class="desc">
                    <h3>{{ t('market.img.title') }} {{ t('market.img.title02') }}</h3>
                    <p>{{ t('market.img.desc') }}</p>
                </div>
            </div>
        </div>

        <!--导航-->
        <div class="page-nav-container">
            <div class="nav-container">
                <div class="nav-txt">
                    <n-breadcrumb separator=">">
                        <n-breadcrumb-item>
                            <n-icon :component="MdHome"/><router-link to="/home">{{ t('common.navigate.home') }}</router-link>
                        </n-breadcrumb-item>
                        <n-breadcrumb-item>
                            <n-icon :component="IosFiling"/>{{ t('common.navigate.market')}}
                        </n-breadcrumb-item>
                    </n-breadcrumb>
                </div>

                <div class="search">
                    <n-input type="text" size="large" round :placeholder="t('report.content.keyword')" v-model:value="keyword" clearable>
                        <template #suffix>
                            <a class="search-btn" @click="handleSearch"><n-icon :component="MdSearch" size="30" color="#0e7a0d"/></a>
                        </template>
                    </n-input>
                </div>
            </div>
        </div>


        <!--调研分析-->
        <!-- <div class="market-survey">
            <div class="container">
                <div class="report-title title">
                    <h2>{{t('market.survey.title')}}</h2>
                </div>
                <div class="row">
                    <div class="row-box">
                        <n-card size="medium" content-style="display:flex">
                            <div class="box-content">
                                <span class="iconfont icon-fenxi f30"></span>
                                <div>
                                    <h2>{{t('market.survey.fsttitle')}}</h2>
                                    <div class="desc">
                                        {{t('market.survey.fstdesc')}}
                                    </div>
                                </div>
                            </div>
                        </n-card>
                    </div>

                    <div class="row-box">
                        <n-card size="medium" content-style="display:flex">
                            <div class="box-content">
                                <span class="iconfont icon-chanyelian f30"></span>
                                <div>
                                    <h2>{{t('market.survey.sndtitle')}}</h2>
                                    <div class="desc">
                                        {{t('market.survey.snddesc')}}
                                    </div>
                                </div>
                            </div>
                        </n-card>
                    </div>

                    <div class="row-box">
                        <n-card size="medium" content-style="display:flex">
                            <div class="box-content">
                                <span class="iconfont icon-qudaofenxi f30"></span>
                                <div>
                                    <h2>{{t('market.survey.trdtitle')}}</h2>
                                    <div class="desc">
                                        {{t('market.survey.trddesc')}}
                                    </div>
                                </div>
                            </div>
                        </n-card>
                    </div>
                </div>
            </div>
         </div> -->


        <!--研究方法-->
        <div class="market-method">
            <div class="container">
                <div class="title">
                   <h2>{{t('market.method.title')}}</h2>
                </div>

                <div class="desc">
                    <p>{{t('market.method.desc')}}</p>
                </div>
                <div class="row">
                    <div class="row-line">
                        <div class="line-img"><span class="iconfont icon-shichang f70"></span></div>
                        <h5>{{t('market.method.proBg')}}</h5>
                    </div>
                    <div class="row-arraow">
                        <img v-if="pcShow" src="@/assets/images/arrow.png"/>
                        <n-icon v-else :component="MdArrowRoundDown" :size="70" color="#87da58"/>
                    </div>
                    <div class="row-line">
                        <div class="line-img"><span class="iconfont icon-shejiyukaifa- f70"></span></div>
                        <h5>{{t('market.method.design')}}</h5>
                    </div>
                    <div class="row-arraow">
                        <img v-if="pcShow" src="@/assets/images/arrow.png"/>
                        <n-icon v-else :component="MdArrowRoundDown" :size="70" color="#87da58"/>
                    </div>
                    <div class="row-line">
                        <div class="line-img"><span class="iconfont icon-tuandui f70"></span></div>
                        <h5>{{t('market.method.team')}}</h5>
                    </div>
                    <div class="row-arraow">
                        <img v-if="pcShow" src="@/assets/images/arrow.png"/>
                        <n-icon v-else :component="MdArrowRoundDown" :size="70" color="#87da58"/>
                    </div>
                    <div class="row-line">
                        <div class="line-img"><span class="iconfont icon-qudaofenxi f70"></span></div>
                        <h5>{{t('market.method.channel')}}</h5>
                    </div>
                    <div class="row-arraow">
                        <img v-if="pcShow" src="@/assets/images/arrow.png"/>
                        <n-icon v-else :component="MdArrowRoundDown" :size="70" color="#87da58"/>
                    </div>
                    <div class="row-line">
                        <div class="line-img"><span class="iconfont icon-zhihang f70"></span></div>
                        <h5>{{t('market.method.execute')}}</h5>
                    </div>
                </div>
            </div>
        </div>

        <!--服务范围-->
        <div class="service-scope">
            <div class="container">
                <div class="title">
                    <h2>{{ t('market.service.title') }}</h2>
                </div>
                <div class="service-content">
                    <div class="sv-box">
                        <div class="sv-title" @click="show01 = !show01">
                            <span>{{ t('market.service.fstTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show01?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show01">
                                <p>{{ t('market.service.fstDesc01') }}</p>
                                <p>{{ t('market.service.fstDesc02')}}</p>
                            </div>
                        </transition>
                    </div>

                    <div class="sv-box">
                        <div class="sv-title" @click="show02 = !show02">
                            <span>{{ t('market.service.sndTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show02?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show02">
                                <p>{{ t('market.service.sndDesc01') }}</p>
                                <p>{{ t('market.service.sndDesc02') }}</p>
                            </div>
                        </transition>
                    </div>

                    <div class="sv-box">
                        <div class="sv-title" @click="show03 = !show03">
                            <span>{{ t('market.service.thrTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show03?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show03">
                                <p>{{ t('market.service.thrDesc') }}</p>
                            </div>
                        </transition>
                    </div>

                    <div class="sv-box">
                        <div class="sv-title" @click="show04 = !show04">
                            <span>{{ t('market.service.forTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show04?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show04">
                                <p>{{ t('market.service.forDesc01') }}</p>
                                <p>{{ t('market.service.forDesc02') }}</p>
                                <p>{{ t('market.service.forDesc03') }}</p>
                                <p>{{ t('market.service.forDesc04') }}</p>
                            </div>
                        </transition>
                    </div>

                    <div class="sv-box">
                        <div class="sv-title" @click="show05 = !show05">
                            <span>{{ t('market.service.fivTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show05?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show05">
                                <p>{{ t('market.service.fivDesc01') }}</p>
                                <p>{{ t('market.service.fivDesc02') }}</p>
                            </div>
                        </transition>
                    </div>

                    <div class="sv-box">
                        <div class="sv-title" @click="show06 = !show06">
                            <span>{{ t('market.service.sixTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show06?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show06">
                                <p>{{ t('market.service.sixDesc01') }}</p>
                                <p>{{ t('market.service.sixDesc02') }}</p>
                            </div>
                        </transition>
                    </div>

                    <div class="sv-box">
                        <div class="sv-title" @click="show07 = !show07">
                            <span>{{ t('market.service.sevTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show07?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show07">
                                <p>{{ t('market.service.sevDesc') }}</p>
                            </div>
                        </transition>
                    </div>

                    <div class="sv-box">
                        <div class="sv-title" @click="show08 = !show08">
                            <span>{{ t('market.service.egtTitle') }}</span>
                            <div class="sv-icon"><n-icon :component="show08?IosRemove:IosAdd" size="30" color="#000"/></div>
                        </div>
                        <transition name="sv">
                            <div class="sv-desc" v-if="show08">
                                <p>{{ t('market.service.egtDesc') }}</p>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>


        <!--定制化报告研究范围-->
        <div class="reports-scope">
            <div class="container">
                <div class="title">
                    <h2>{{ t('market.scope.title') }}</h2>
                </div>
                <div class="reports-content">
                    <div>
                        <n-table>
                            <thead>
                                <th></th>
                                <th>{{ t('market.scope.th01') }}</th>
                                <th>{{ t('market.scope.th02') }}</th>
                            </thead>
                            <tbody>
                                <tr><td rowspan="7" align="center">{{ t('market.scope.col01') }}</td><td>{{ t('market.scope.row01') }}</td><td>{{ t('market.scope.row02') }}</td></tr>
                                <tr><td>{{ t('market.scope.row03') }}</td><td>{{ t('market.scope.row04') }}</td></tr>
                                <tr><td>{{ t('market.scope.row05') }}</td><td>{{ t('market.scope.row06') }}</td></tr>
                                <tr><td>{{ t('market.scope.row07') }}</td><td>{{ t('market.scope.row08') }}</td></tr>
                                <tr><td>{{ t('market.scope.row09') }}</td><td>{{ t('market.scope.row10') }}</td></tr>
                                <tr><td>{{ t('market.scope.row11') }}</td><td>{{ t('market.scope.row12') }}</td></tr>
                                <tr><td>{{ t('market.scope.row13') }}</td><td>{{ t('market.scope.row14') }}</td></tr>
                                
                                <tr><td rowspan="4" align="center">{{ t('market.scope.col02') }}</td><td>{{ t('market.scope.row15') }}</td><td>{{ t('market.scope.row16') }}</td></tr>
                                <tr><td>{{ t('market.scope.row17') }}</td><td>{{ t('market.scope.row18') }}</td></tr>
                                <tr><td>{{ t('market.scope.row19') }}</td><td>{{ t('market.scope.row20') }}</td></tr>
                                <tr><td>{{ t('market.scope.row21') }}</td><td></td></tr>

                                <tr><td rowspan="2" align="center">{{ t('market.scope.col03') }}</td><td>{{ t('market.scope.row23') }}</td><td>{{ t('market.scope.row24') }}</td></tr>
                                <tr><td>{{ t('market.scope.row25') }}</td><td>{{ t('market.scope.row26') }}</td></tr>
                            </tbody>
                        </n-table>
                    </div>
                </div>
            </div>
        </div>
        
        <!--服务覆盖，市场研究-->
        <div class="market-sector">
            <div class="container">
                <div class="title">
                    <h2>{{t('market.sector.title')}}</h2>
                </div>
                <div class="sector-img">
                    <img v-if="langShow == 'zh-CN'" src="@/assets/images/selector.png"/>
                    <img v-else src="@/assets/images/selector-en.png"/>
                </div>
            </div>
        </div>

        <!--地区覆盖-->
        <!-- <div class="market-area">
            <div class="container">
                <div class="title">
                    <h2>{{t('market.area.title')}}</h2>
                </div>
                <div class="sector-img">
                    <img src="@/assets/images/global.jpg"/>
                </div>
            </div>
        </div> -->

        <!--案例-->
        <div class="market-cases">
            <div class="container">
                <div class="title">
                    <h2>{{t('market.hot.title')}}</h2>
                </div>
                <div class="cases-box">
                    <template v-for="item in hots">
                        <div class="box">
                            <n-card size="medium" content-style="display:flex">
                                <div class="img">
                                    <img :src="BaseUrl+'/report/'+item.fileName"/>
                                </div>
                                <div class="text">
                                    <h4><a @click="viewDetail(item)">{{ item.title }}</a></h4>
                                    <span>{{item.publishDate}}</span>
                                </div>
                            </n-card>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div class="home-contact" id="home-contact">
            <div class="contact-row wow fadeInDown" data-wow-duration="3s" data-wow-delay="0.5s" data-wow-offset="0">
                <div class="contact-txt">
                    <span>{{t('market.contact.desc')}}</span>
                </div>
                <div class="contact-btn">
                    <a @click="handleContact">{{t('report.detail.custom')}}</a>
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
    import { useLocaleStoreWithOut } from '@/store';
    import { MdHome,IosFiling, MdSearch, IosAdd, IosRemove,MdArrowRoundDown } from '@vicons/ionicons4';
    import { NBreadcrumb, NBreadcrumbItem,NIcon, NCard,NModal, NInput, NTable } from 'naive-ui';
    import { useI18n } from 'vue-i18n';
    import { onMounted, ref } from 'vue';
    import Demand from './../report/demand.vue';
    import { ResearchReport, hotResearchList } from '@/api/report/report';
    import { BaseUrl } from '@/api/model/common';
    import { useRouter } from 'vue-router';
    import { isMobile } from '@/utils/validate';
    import { langOnBrowser } from '@/utils';

    const { t } = useI18n();
    const height = ref<string>();
    const demandShow = ref(false);  // 需求页面
    const hots = ref<ResearchReport[]>();  //市场资讯
    const router = useRouter();
    const keyword = ref<string>('');    //关键字
    const show01 = ref(false),show02 = ref(false), show03 = ref(false), show04 = ref(false),
        show05 = ref(false),show06 = ref(false), show07 = ref(false), show08 = ref(false);
    const langShow = ref<string>('');
    const pcShow = ref<boolean>(true);
    const lang = langOnBrowser();

    onMounted(async() => {
        height.value = useLocaleStoreWithOut().getLocale == 'zh-CN'?'200px':'350px';

        //const lang = useLocaleStoreWithOut().getLocale;
        const res = await hotResearchList({lang: lang});
        hots.value = res.data;

        langShow.value = lang;

        if(isMobile()){
            pcShow.value = false;
        }
    });

    // 关闭diag
    function handleCloseDiag(){
        demandShow.value = false;
    }

    // 联系我们
    function handleContact(){
        demandShow.value = true;
    }

    function viewDetail(item: ResearchReport){
        const language = lang === 'zh-CN'?'':'en'
        router.push({ name: 'reportDetail', params: { webTitle: item.webTitle+'-'+item.id, lang: language } });
    }

    //查询
    function handleSearch(){
        const language = lang === 'zh-CN'?'':'en'
        router.push({ name: 'reports', params: { keyword: keyword.value, lang: language } });
    }

</script>

<style lang="scss" scoped>
    .nav-txt .n-breadcrumb .n-breadcrumb-item .n-breadcrumb-item__link{padding: 0;}
    /**导航栏 */
    .nav-container{
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        border-bottom: 1px solid #e8e8e8;
        align-items: center;
        .search{
            width: 40%;
            .search-btn{
                .n-icon{vertical-align: middle;}
            }
            .n-input{margin-top: 10px;}
        }
    }
    .page-top{
        position: relative;
        .img{
            width: 100%;
            height: 100vh;
            img{
                width: 100%;
                height: 100vh;
            }
        }
        .desc{
            position: absolute;
            top: 12%;
            width: 55%;
            color: #fff;
            margin: 0 auto;
            left: 11%;
            word-break: break-all;
            >h3{
                color: #fff;
                font-size: 48px;
                line-height: 1.5;
                margin-bottom: 48px;
            }
            >p{
                opacity: 0.8;
                font-size: 18px;
                color: #fff;
                line-height: 1.7;
            }
        }
    }

    .row{
        display: inline-table;
        .row-box{
            width: 33%;
            float: left;
            display: flex;
            padding: 20px 10px 0 10px;
        }
    }

    .box-content{
        text-align: center;
        h2{
            margin-top: 17px;
            font-size: 16px;
            font-weight: 600;
            line-height: 22px;
        }
        .desc{
            font-size: 13px;
            line-height: 1.69;
            text-align: left;
            margin-top: 15px;
            height: v-bind('height');
        }
    }
   
   .market-survey,.market-method,.market-sector,.market-cases{padding: 50px 0;}
   .market-survey{background-color: #f2f2f2;margin-top: 10px;}
    .market-method{
        .desc{
            padding: 20px 0px 30px;
        }
        .row{
            display: flex;
            .row-line{
                width: 13%;
                text-align: center;
                h5{
                    font-size: 15px;
                }
                .line-img{
                    width: 140px;
                    height: 140px;
                    border-radius: 100%;
                    border: 1px solid #cdcdcd;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
            .row-arraow{
                margin: 50px 18px 0 18px;
            }
        }
    }

    .market-sector{
        .sector-img{
            width: 100%;margin: auto;
            >img{
                width: 100%;
            }
        }

    }

    .cases-box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .box{
            display: flex;
            width: 32%;
            margin-bottom: 20px;
            box-shadow: 2.5px 4.33px 15px 0px rgb(0 0 0 / 15%);
            .img{
                width: 100%;
                max-height: 200px;
                >img{
                    width: 100%;
                    box-shadow: 7px 0 15px rgba(0,87,149,.33);
                }
            }
            .text{
                padding-left: 20px;
                min-width: 200px;
                >h4{
                    line-height: 30px;
                    margin: 0.25rem 0 1rem 0;
                    transition: all 0.4s ease;
                    min-height: 90px;
                    max-height: 90px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 18px;
                    word-break: break-all;
                }
                >span{
                    color: #9f9f9f;
                }
            }
            :hover{
                background-color: #18a058;
                color:#fff;
                span{
                    color: #fff;
                }
            }
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

    .reports-content{
        font-weight: 600;
        th{
            font-size: 17px;
            background-color: #9cc2e5;
            &:nth-child(1){width: 26%;}
            &:nth-child(2),&:nth-child(3){width: 37%; font-weight: 700;}
        }
        tr{
            td{ padding: 8px;background: none;}
            &:nth-child(-n+7){
                background-color: #f2f2f2;
            }&:nth-child(n+8):nth-child(-n+11){
                background-color: #f8f0dc;
            }&:nth-child(n+12):nth-child(-n+13){
                background-color: #f2f2f2;
            }
        }
    }

    .service-content{
        .sv-box{
            padding: 20px;
            border-bottom: 1px solid #e1e1e1;
            .sv-title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-weight: 700;
                font-size: 20px;
                cursor: pointer;
            }
            .sv-desc{
                p{ margin-bottom: 0;}
            }
        }
    }

    .sv-enter-active,.sv-leave-active{transition: opacity 0.3s ease;}
    .sv-enter-form,.sv-leave-to{opacity: 0;}
    .sv-enter-to,.sv-leave-form{opacity: 1;}
</style>