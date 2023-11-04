<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="IosFiling" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navigate.aboutUs') }}</span>
            </div>
        </div>

        <div class="page-nav-container wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="nav-txt">
                <n-breadcrumb separator=">">
                    <n-breadcrumb-item>
                        <n-icon :component="MdHome"/><router-link to="/home">{{ t('common.navigate.home') }}</router-link>
                    </n-breadcrumb-item>
                    <n-breadcrumb-item>
                        <n-icon :component="IosFiling"/>{{ t('common.navigate.aboutUs') }}
                    </n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>

        <div class="about-intro">
            <div class="container intro">
                <div class="about-img wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <img src="@/assets/images/swtp.jpg"/>
                </div>
                <div class="about-desc wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{t('aboutUs.intro.title')}}</h2>
                    <p>{{ t('aboutUs.intro.desc') }}</p>
                </div>
            </div> 
        </div>

        <!--核心价值观（行业覆盖）-->
        <div class="about-core">
            <div class="core-img">
                <img src="@/assets/images/core.jpg"/>
                <div class="core-values">
                    <h2 class="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.selector.title') }}</h2>
                    <p class="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        {{ t('aboutUs.selector.desc') }}
                    </p>
                </div>
            </div>
        </div>

        <!--团队介绍---->
        <div class="about-team">
            <div class="container team-cn">
                <div class="team-cnt">
                    <div class="team-desc wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <h2>{{ t('aboutUs.team.title') }}</h2>
                        <p>{{ t('aboutUs.team.desc') }}</p>
                    </div>
                    <div class="team-img wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <img src="@/assets/images/t1.jpg"/>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="about-partner">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{t('aboutUs.partner.title')}}</h2>
                </div>
                <div class="partner-box wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <div class="img"><img src="@/assets/images/p01.png"/></div>
                    <div class="img"><img src="@/assets/images/p02.png"/></div>
                    <div class="img"><img src="@/assets/images/p03.png"/></div>
                    <div class="img"><img src="@/assets/images/p04.png"/></div>
                    <div class="img"><img src="@/assets/images/p05.png"/></div>
                    <div class="img"><img src="@/assets/images/p06.png"/></div>
                    <div class="img"><img src="@/assets/images/p07.png"/></div>
                    <div class="img"><img src="@/assets/images/p08.png"/></div>
                    <div class="img"><img src="@/assets/images/p09.png"/></div>
                    <div class="img"><img src="@/assets/images/p10.png"/></div>
                    <div class="img"><img src="@/assets/images/p11.png"/></div>
                    <div class="img"><img src="@/assets/images/p12.png"/></div>
                    <div class="img"><img src="@/assets/images/p13.png"/></div>
                    <div class="img"><img src="@/assets/images/p14.png"/></div>
                    <div class="img"><img src="@/assets/images/p15.png"/></div>
                    <div class="img"><img src="@/assets/images/p16.png"/></div>
                    <div class="img"><img src="@/assets/images/p17.png"/></div>
                    <div class="img"><img src="@/assets/images/p18.png"/></div>
                    <div class="img"><img src="@/assets/images/p19.png"/></div>
                    <div class="img"><img src="@/assets/images/p20.png"/></div>
                    <div class="img"><img src="@/assets/images/p21.png"/></div>
                    <div class="img"><img src="@/assets/images/p22.png"/></div>
                    <div class="img"><img src="@/assets/images/p23.png"/></div>
                    <div class="img"><img src="@/assets/images/p24.png"/></div>
                    <div class="img"><img src="@/assets/images/p25.png"/></div>
                    <div class="img"><img src="@/assets/images/p26.png"/></div>
                    <div class="img"><img src="@/assets/images/p27.png"/></div>
                    <div class="img"><img src="@/assets/images/p28.png"/></div>
                    <div class="img"><img src="@/assets/images/p29.png"/></div>
                    <div class="img"><img src="@/assets/images/p30.png"/></div>
                </div>
            </div>
        </div>

        <!--企业文化-->
        <div class="about-culture">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{ t('aboutUs.culture.title') }}</h2>
                </div>
                <div class="culture-box">
                    <div class="box wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <n-card>
                            <div class="box-img">
                                <img src="@/assets/images/shiming.jpg"/>
                            </div>
                            <div class="box-content">
                                <h3>{{ t('aboutUs.culture.chapterOne') }}</h3>
                                <p>{{ t('aboutUs.culture.chapterOneDesc') }}</p>
                            </div>
                        </n-card>
                    </div>

                    <div class="box wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <n-card>
                            <div class="box-img">
                                <img src="@/assets/images/yuanjing.png"/>
                            </div>
                            <div class="box-content">
                                <h3>{{ t('aboutUs.culture.chapterTwo') }}</h3>
                                <p>{{ t('aboutUs.culture.chapterTwoDesc') }}</p>
                            </div>
                        </n-card>
                    </div>

                    <div class="box wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <n-card>
                            <div class="box-img">
                                <img src="@/assets/images/chengxin.jpg"/>
                            </div>
                            <div class="box-content">
                                <h3>{{ t('aboutUs.culture.chapterThree') }}</h3>
                                <p>{{ t('aboutUs.culture.chapterThreeDesc') }}</p>
                            </div>
                        </n-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
    import { IosFiling,MdHome } from '@vicons/ionicons4';
    import { NIcon, NBreadcrumb, NBreadcrumbItem, NCard } from 'naive-ui';
    import { onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';
    const { t } = useI18n();
    onMounted(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 1);
      }
    });
</script>

<style lang="scss" scoped>
    .about-partner, .about-intro,.about-contact,.about-culture{
        background-color: #fff;
    }
    .about-intro{
        margin-top:10px;
        .intro{
            display: flex;
            .about-img{
                width: 45%;
                padding: 10px 20px;
                >img{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .about-desc{
                width: 55%;
                padding-left: 20px;
                >h2{
                    font-size: 40px;
                    font-weight: 700;
                    margin: 10px 30px 30px 0;
                }
                >p{
                    margin-bottom: 20px;
                    font-size: 15px;
                }
            }
        }
    }

    .about-partner{
        .container{
            .partner-box{
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
    }

    .about-contact{
        display: flex;
        justify-content: space-around;
        .map{
            width: 60%;
        }
        .info{
            width: 35%;
        }
    }
    .page{
        border-bottom: 1px solid #f2f2f2;
    }

    .core-img{
        position: relative;
        >img{
            width: 100%;
            height: 700px;
            object-fit: cover;
        }
        .core-values{
            position: absolute;
            top: 15%;
            left: 12%;
            color: #fff;
            >h2{
                font-size: 40px;
                font-weight: 700;
            }
            >p{
                font-size: 15px;
                width: 700px;
            }
        }
    }

    .culture-box{
        display: flex;
        justify-content: space-between;
        .box{
            width: 32%;
            .box-img{
                text-align: center;
                >img{
                    width: 100%;
                    height: 200px;
                }
            }
            .box-content{
                height: 160px;
            }
        }
    }

    .team-cnt{
        display: flex;
        .team-desc{
            width: 45%;
            padding: 0 20px;
            >h2{
                font-size: 40px;
                line-height: 40px;
            }
            >p{
                font-size: 15px;
            }
        }
        .team-img{
            width: 55%;
            padding-left: 20px;
            >img{
                width: 100%;
            }
        }
    }
</style>