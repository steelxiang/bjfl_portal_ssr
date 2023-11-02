<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="MdCart" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navAboutUs.order') }}</span>
            </div>
        </div>

        <div class="page-nav-container wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="nav-txt">
                <n-breadcrumb separator=">">
                    <n-breadcrumb-item>
                        <n-icon :component="MdHome"/><router-link to="/home">{{ t('common.navigate.home') }}</router-link>
                    </n-breadcrumb-item>
                    <n-breadcrumb-item>
                        <n-icon :component="MdCart"/>{{ t('common.navAboutUs.order') }}
                    </n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>

        <!--订购流程-->
        <div class="order-process">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{ t('common.navAboutUs.order') }}</h2>
                </div>
                <div class="process-list">
                    <div class="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <div class="row-desc">
                            <h2 v-if="!pcShow">{{ t('aboutUs.order.pFstTile') }}</h2>
                            <p>{{ t('aboutUs.order.pFstDesc01') }}</p>
                            <p>{{ t('aboutUs.order.pFstDesc02') }}</p>
                        </div>
                        <div class="row-index">
                            <span class="row-index-txt">1</span>
                            <span class="icon iconfont icon-iconset0435 f50"></span>
                        </div>
                        <div v-if="pcShow" class="row-text">
                            <h2>{{ t('aboutUs.order.pFstTile') }}</h2>
                        </div>
                    </div>

                    <div class="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <div v-if="pcShow" class="row-text">
                            <h2>{{ t('aboutUs.order.pSndTitle') }}</h2>
                        </div>
                        <div class="row-index">
                            <span class="row-index-txt">2</span>
                            <span class="icon iconfont icon-iconset0435 f50"></span>
                        </div>
                        <div class="row-desc">
                            <h2 v-if="!pcShow">{{ t('aboutUs.order.pSndTitle') }}</h2>
                            <p>{{ t('aboutUs.order.pSndDesc01') }}</p>
                            <p>{{ t('aboutUs.order.pSndDesc02') }}</p>
                        </div>
                    </div>

                    <div class="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <div class="row-desc">
                            <h2 v-if="!pcShow">{{ t('aboutUs.order.pThrTitle') }}</h2>
                            <p>{{ t('aboutUs.order.pThrDesc01') }}</p>
                            <p>{{ t('aboutUs.order.pThrDesc02') }}</p>
                            <!-- <p>{{ t('aboutUs.order.pThrDesc03') }}</p> -->
                        </div>
                        <div class="row-index">
                            <span class="row-index-txt">3</span>
                            <span class="icon iconfont icon-iconset0435 f50"></span>
                        </div>
                        <div v-if="pcShow" class="row-text">
                            <h2>{{ t('aboutUs.order.pThrTitle') }}</h2>
                        </div>
                    </div>

                    <div class="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <div v-if="pcShow" class="row-text">
                            <h2>{{ t('aboutUs.order.pForTitle') }}</h2>
                        </div>
                        <div class="row-index">
                            <span class="row-index-txt">4</span>
                            <span class="icon iconfont icon-iconset0435 f50"></span>
                        </div>
                        <div class="row-desc">
                            <h2 v-if="!pcShow">{{ t('aboutUs.order.pForTitle') }}</h2>
                            <p>{{ t('aboutUs.order.pForDesc01') }}</p>
                            <p>{{ t('aboutUs.order.pForDesc02') }}</p>
                            <p>{{ t('aboutUs.order.pForDesc03') }}</p>
                        </div>
                    </div>

                    <div class="row wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <div class="row-desc">
                            <h2 v-if="!pcShow">{{ t('aboutUs.order.pFivTitle') }}</h2>
                            <p>{{ t('aboutUs.order.pFivDesc') }}</p>
                        </div>
                        <div class="row-index">
                            <span class="row-index-txt">5</span>
                        </div>
                        <div v-if="pcShow" class="row-text">
                            <h2>{{ t('aboutUs.order.pFivTitle') }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="home-contact" id="home-contact">
            <div class="contact-row wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                <div class="contact-txt">
                    <span>{{t('home.custom.sndtitle')}}</span>
                </div>
                <div class="contact-btn">
                    <a @click="handleContact">{{ t('aboutUs.order.custom') }}</a>
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
    import { useI18n } from 'vue-i18n';
    import { ref, onMounted } from 'vue';
    import { NIcon, NBreadcrumb,NBreadcrumbItem,NModal } from 'naive-ui';
    import { MdHome, MdCart } from '@vicons/ionicons4';
    import Demand from '../report/demand.vue';
    import { isMobile } from '@/utils/validate';

    const { t } = useI18n();
    const demandShow = ref(false); // 需求
    const pcShow = ref<boolean>(true);

    function handleContact(){
        demandShow.value = true;
    }

    // 关闭diag
    function handleCloseDiag(){
        demandShow.value = false;
    }

    onMounted(() => {
        if(isMobile()){
            pcShow.value = false;
        }
    });
</script>
<style lang="scss" scoped>
    .order-process{background-color: #fff;margin-top: 10px;padding-bottom: 120px;}
    .process-list{
        .row{
            display: flex;
            align-items: center;
            padding-top: 20px;
            .row-text{
                width: calc(50% - 100px);
            }
            .row-index{
                width: 200px;
                text-align: center;
                position: relative;
                .row-index-txt{
                    width: 80px;
                    height: 80px;
                    display: inline-block;
                    background-color: #18a058;
                    line-height: 80px;
                    border-radius: 100%;
                    color: #fff;
                    font-size: 30px;
                }
                .icon{
                    position: absolute;
                    top: 90px;
                    left: 75px;
                }
            }
            .row-desc{
                width: calc(50% - 100px);
                padding: 30px;
                min-height: 155px;
                background-color: #fff;
                box-shadow: 5px 4px 15px 0 rgba(0,0,0,0.15);
                border-radius: 10px;
                >p{
                    font-size: 16px;
                    color: #000;
                    margin: 0;
                    line-height: 30px;
                }
                &:hover{
                    background-color: #18a058;
                    >p{color: #fff;}
                    >h2{color: #fff;}
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
</style>