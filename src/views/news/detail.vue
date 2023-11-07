<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="IosFiling" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navigate.news') }}</span>
            </div>
        </div>

        <div class="newsdt-page">
            <div class="container newsdt-container wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                <div class="newsdt-title">
                    {{ vo?.title }}
                </div>
                <div class="newsdt-time">
                    <n-icon :component="MdTime" color="#0e7a0d" size="20"/>
                    <span>{{ vo?.publishDate }}</span>
                </div>
                <div class="newsdt-text">
                    <div v-html="vo?.context"></div>
                </div>
                <div class="newsdt-other wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <a v-if="last" class="newsdt-other-prev" @click="handleSwt(last)">{{t('news.detail.last')+"："+last?.title }}</a>
                    <a v-if="next" class="newsdt-other-next" @click="handleSwt(next)">{{t('news.detail.next')+"："+next?.title }}</a>
                </div>
            </div>
        </div>

        <div class="load">
            <n-spin size="large">
                <template #description>{{t('report.content.loading')}}</template>
            </n-spin>
        </div>
    </div>
</template>


<script lang="ts" setup>
    import { MarketInfo, marketInfoDetailList } from '@/api/report/market';
    import { IosFiling, MdTime } from '@vicons/ionicons4';
    import { NIcon, NSpin } from 'naive-ui';
    import { ref, watch,onMounted, onServerPrefetch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    import { useLocaleStoreWithOut } from '@/store';
    import { langOnBrowser } from '@/utils';

    const route = useRoute();
    const router = useRouter();
    const vo = ref<MarketInfo>(), last = ref<MarketInfo>(), next = ref<MarketInfo>();
    //const id = ref();
    const spinShow = ref('none');
    const { t } = useI18n();

    // watch(() => route.params.webTitle, (newValue, oldValue) => {
    //     const wts = newValue.split('-');
    //     getDetail(wts[wts.length - 1]);
    // });

    onMounted( () => {
        const webTitle = route.params.webTitle;
        const wts = webTitle.split('-');

        getDetail(wts[wts.length - 1]);
    });

    async function getDetail(id:any){
        spinShow.value = 'block';
        const ret = await marketInfoDetailList({id: id, lang: langOnBrowser() });
        if(Object.keys(ret.data).length != 0){
            setTimeout(() => {
                vo.value = ret.data.vo;
                last.value = ret.data.last;
                next.value = ret.data.next;
                spinShow.value = 'none';
            }, 200);
        }else{
            spinShow.value = 'none';
            //router.push({name: 'news'});
        }
    }

    // 上下页切换
    function handleSwt(item: MarketInfo){
        router.push({ name: 'newsDetail', params: { webTitle: item.webTitle+'-'+item.id} });
    }

    onServerPrefetch(async () => {
        try {
            const webTitle = route.params.webTitle; 
            const wts = webTitle.split('-');

             const ret = await marketInfoDetailList({id: wts[wts.length - 1], lang: langOnBrowser() });
            if(Object.keys(ret.data).length != 0){
                    vo.value = ret.data.vo;
                    last.value = ret.data.last;
                    next.value = ret.data.next;
            } 
        } catch (error) {
            console.log(error)
        }
    })

</script>

<style lang="scss" scoped>
    .newsdt-page{
        padding: 50px 0;
        .newsdt-container{
            background-color: #fff;
            padding: 40px;
            .newsdt-title{
                font-size: 24px;
                font-weight: 700;
                color: #214385;
            }
            .newsdt-time{
                margin: 15px 0;
                .n-icon{
                    vertical-align: sub;
                }
                >span{
                    font-size: 15px;
                    margin-left: 3px;
                }
            }
            .newsdt-text{
                padding: 40px 0;
                border-top: 1px solid #dedede;
                border-bottom: 1px solid #dedede;
            }
            .newsdt-other{
                display: flex;
                width: 100%;
                justify-content: space-between;
                margin-top: 30px;
                >a{
                    display: block;
                    width: 45%;
                    height: 40px;
                    line-height: 40px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 16px;
                }
            }
        }
    }

    .load{display: v-bind('spinShow');}
</style>