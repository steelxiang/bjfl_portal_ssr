<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="MdToday" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navAboutUs.method') }}</span>
            </div>
        </div>

        <div class="page-nav-container wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="nav-txt">
                <n-breadcrumb separator=">">
                    <n-breadcrumb-item>
                        <n-icon :component="MdHome"/><router-link to="/home">{{ t('common.navigate.home') }}</router-link>
                    </n-breadcrumb-item>
                    <n-breadcrumb-item>
                        <n-icon :component="MdToday"/>{{ t('common.navAboutUs.method') }}
                    </n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>

        <!--研究方法-->
        <div class="research-show">
            <div class="container research-content">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{ t('common.navAboutUs.method') }}</h2>
                </div>
                <div class="show-box">
                    <div class="show-img box-img01 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <img src="@/assets/images/research-01.jpg">
                    </div>
                    <div class="show-desc wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <p>{{ t('aboutUs.method.desc01') }}</p>
                    </div>
                </div>
                <div class="show-box">
                    <div class="show-desc wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <p>{{ t('aboutUs.method.desc02') }}</p>
                    </div>
                    <div class="show-img box-img02 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <img class="img-02" src="@/assets/images/research-02.jpg">
                    </div>
                </div>
                <div class="show-box">
                    <div class="show-img box-img03 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <img src="@/assets/images/research-03.jpg">
                    </div>
                    <div class="show-desc wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <p>{{ t('aboutUs.method.desc03') }}</p>
                    </div>
                </div>

                <div class="report-img">
                    <div class="img wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <img v-if="lang == 'zh-CN'" src="@/assets/images/report-method.png"/>
                        <img v-else src="@/assets/images/report-method-en.png"/>
                    </div>
                </div>
            </div>
        </div>

        <!--研究细节-->
        <!-- <div class="research-detail">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>研究细节</h2>
                </div>
                <div class="img wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <img src="@/assets/images/report-method.png"/>
                </div>
            </div>
        </div> -->

        <!--数据验证-->
        <div class="report-data">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{ t('aboutUs.data.title') }}</h2>
                </div>
                <div class="img wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <img v-if="lang == 'zh-CN'" src="@/assets/images/data-valid.png"/>
                    <img v-else src="@/assets/images/data-valid-en.png"/>
                </div>
            </div>
        </div>

        <!--数据来源-->
        <div class="report-source">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{ t('aboutUs.source.title') }}</h2>
                </div>
                <div class="desc wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <p>{{ t('aboutUs.source.desc') }}</p>
                </div>
                <div class="img wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <img v-if="lang == 'zh-CN'" src="@/assets/images/report-source.png"/>
                    <img v-else src="@/assets/images/report-source-en.png"/>
                </div>
            </div>
        </div>

        <!--部分数据库展示-->
        <div class="partial-database">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{ t('aboutUs.database.title') }}</h2>
                </div>
                <div class="db-box wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <div class="img"><img src="@/assets/images/d01.png"/></div>
                    <div class="img"><img src="@/assets/images/d02.png"/></div>
                    <div class="img"><img src="@/assets/images/d03.png"/></div>
                    <div class="img"><img src="@/assets/images/d04.png"/></div>
                    <div class="img"><img src="@/assets/images/d05.png"/></div>
                    <div class="img"><img src="@/assets/images/d06.png"/></div>
                    <div class="img"><img src="@/assets/images/d07.png"/></div>
                    <div class="img"><img src="@/assets/images/d08.png"/></div>
                    <div class="img"><img src="@/assets/images/d09.png"/></div>
                    <div class="img"><img src="@/assets/images/d10.png"/></div>
                    <div class="img"><img src="@/assets/images/d11.png"/></div>
                    <div class="img"><img src="@/assets/images/d12.png"/></div>
                    <div class="img"><img src="@/assets/images/d13.png"/></div>
                    <div class="img"><img src="@/assets/images/d14.png"/></div>
                    <div class="img"><img src="@/assets/images/d15.png"/></div>
                    <div class="img"><img src="@/assets/images/d16.png"/></div>
                    <div class="img"><img src="@/assets/images/d17.png"/></div>
                    <div class="img"><img src="@/assets/images/d18.png"/></div>
                    <div class="img"><img src="@/assets/images/d19.png"/></div>
                    <div class="img"><img src="@/assets/images/d20.png"/></div>
                    <div class="img"><img src="@/assets/images/d21.png"/></div>
                    <div class="img"><img src="@/assets/images/d22.png"/></div>
                    <div class="img"><img src="@/assets/images/d23.png"/></div>
                    <div class="img"><img src="@/assets/images/d24.png"/></div>
                    <div class="img"><img src="@/assets/images/d25.png"/></div>
                    <div class="img"><img src="@/assets/images/d26.png"/></div>
                    <div class="img"><img src="@/assets/images/d27.png"/></div>
                    <div class="img"><img src="@/assets/images/d28.png"/></div>
                    <div class="img"><img src="@/assets/images/d29.png"/></div>
                    <div class="img"><img src="@/assets/images/d30.png"/></div>
                    <div class="img"><img src="@/assets/images/d31.png"/></div>
                    <div class="img"><img src="@/assets/images/d32.png"/></div>
                    <div class="img"><img src="@/assets/images/d33.png"/></div>
                    <div class="img"><img src="@/assets/images/d34.png"/></div>
                    <div class="img"><img src="@/assets/images/d35.png"/></div>
                    <div class="img"><img src="@/assets/images/d36.png"/></div>
                    <div class="img"><img src="@/assets/images/d37.png"/></div>
                    <div class="img"><img src="@/assets/images/d38.png"/></div>
                    <div class="img"><img src="@/assets/images/d39.png"/></div>
                    <div class="img"><img src="@/assets/images/d40.png"/></div>
                    <div class="img"><img src="@/assets/images/d41.png"/></div>
                    <div class="img"><img src="@/assets/images/d42.png"/></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useI18n } from 'vue-i18n';
    import { NIcon, NBreadcrumb,NBreadcrumbItem } from 'naive-ui';
    import { MdHome, MdToday } from '@vicons/ionicons4';
    import { useLocaleStoreWithOut } from '@/store';
    import { onMounted, ref } from 'vue';
    import { langOnBrowser } from '@/utils';

    const { t } = useI18n();
    const img01 = ref<string>(), img02 = ref<string>() ,img03 = ref<string>();
    const lang = langOnBrowser();

    onMounted( async() => {
        img01.value = lang == 'zh-CN'?'200px':'290px';
        img02.value = lang == 'zh-CN'?'380px':'520px';
        img03.value = lang == 'zh-CN'?'170px':'230px';
    });
</script>
<style lang="scss" scoped>
    .research-show{
        background-color: #fff;
        margin-top: 10px;
        .show-box{
            display: flex;
            .show-img{
                width: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    object-fit: cover;
                }
            }
            .box-img01{  max-height: v-bind('img01'); }
            .box-img02{  max-height: v-bind('img02'); >img{ height: v-bind('img02');}}
            .box-img03{  max-height: v-bind('img03'); }
            .show-desc{
                width: 50%;
                padding: 10px;
                >p{
                    font-size: 16px;
                    line-height: 30px;
                    margin: 0;
                }
            }
        }
        .report-img{
            width: 100%;
            padding-top: 80px;
            img{
                width: 100%;
            }
        }
    }
    .report-data,.research-detail,.report-source{
        background-color: #fff;
        .img{
            >img{
                width: 100%;
            }
        }
    }
    .report-source{
        .desc{
            >p{
                font-size: 16px;
                color: #000;
            }
        }
    }
    .partial-database{
        background-color: #fff;
        border-bottom: 1px solid #DEDEDE;
        padding-bottom: 20px;
        .db-box{
            display: flex;
            flex-wrap: wrap;
            border-bottom: 1px solid #DEDEDE;
            border-left: 1px solid #DEDEDE;
            .img{
                width: 16.6666%;
                border-top: 1px solid #DEDEDE;
                border-right: 1px solid #DEDEDE;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.2rem 0;
                >img{
                    width: 100%;
                }
            }
        }
    }
</style>