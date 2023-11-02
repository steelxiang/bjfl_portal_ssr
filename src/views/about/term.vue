<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="MdPaper" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navAboutUs.term') }}</span>
            </div>
        </div>

        <div class="page-nav-container wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="nav-txt">
                <n-breadcrumb separator=">">
                    <n-breadcrumb-item>
                        <n-icon :component="MdHome"/><router-link to="/home">{{ t('common.navigate.home') }}</router-link>
                    </n-breadcrumb-item>
                    <n-breadcrumb-item>
                        <n-icon :component="MdPaper"/>{{ t('common.navAboutUs.term') }}
                    </n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>

        <!--条款-->
        <div class="term-condition">
            <div class="container">
                <div class="title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <h2>{{ t('common.navAboutUs.term') }}</h2>
                </div>
                <div class="content">
                    <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.fstTitle') }}</h3>
                    <p class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.fstDesc') }}</p>
                    <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.sndTitle') }}</h3>
                    <p class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.sndDesc') }}</p>
                    <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.thrTitle') }}</h3>
                    <p class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.thrDesc') }}</p>
                    <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.forTitle') }}</h3>
                    <p class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.forDesc') }}</p>
                    <h3 class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.fivTitle') }}</h3>
                    <p class="wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">{{ t('aboutUs.term.fivDesc') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { useI18n } from 'vue-i18n';
    import { NIcon, NBreadcrumb,NBreadcrumbItem } from 'naive-ui';
    import { MdHome, MdPaper } from '@vicons/ionicons4';

    const { t } = useI18n();
</script>
<style lang="scss" scoped>
    .term-condition{
        background-color: #fff;
        margin-top: 10px;
        padding-bottom: 100px;
        border-bottom: 1px solid #dedede;
        .content{
            h3{  font-size: 18px; }
            p{padding-left: 2em; font-size: 16px;}
        }
    }
</style>