<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="IosFiling" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navigate.news') }}</span>
            </div>
        </div>

        <div class="page-nav-container wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="nav-txt">
                <n-breadcrumb separator=">">
                    <n-breadcrumb-item>
                        <n-icon :component="MdHome"/><router-link to="/home">{{ t('common.navigate.home') }}</router-link>
                    </n-breadcrumb-item>
                    <n-breadcrumb-item>
                        <n-icon :component="IosFiling"/>{{ t('common.navigate.news') }}
                    </n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>

        <div class="news-content">
            <div class="container content">
                <div class="search wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <div class="search-keyword">
                        <n-input type="text" size="large" round :placeholder="t('report.content.keyword')" clearable v-model:value="params.keyword">
                            <template #suffix>
                                <a class="search-btn" @click="handleSearch"><n-icon :component="MdSearch" size="30" color="#0e7a0d"/></a>
                            </template>
                        </n-input>
                    </div>
                    <div class="search-type">
                        <a :class="!params?.marketType && !params.marketCategory?'selected':''" @click="handleAll()">{{ t('news.category.title') }}</a>
                        <!--资讯分类-->
                        <template v-for="item in newsCategory">
                            <a :class="item.dictValue === params?.marketType?'selected':''" @click="handleType(item.dictValue)">{{ item.dictLabel }}</a>
                        </template>
                        <!--报告分类-->
                        <template v-for="item in reportTypes">
                            <a :class="item.dictValue === params?.marketCategory?'selected':''" @click="handleCategroy(item.dictValue)">{{ item.dictLabel }}</a>
                        </template>
                    </div>
                </div>

                <div class="content-list">
                    <template v-for="item in pageList?.list">
                    <n-list :show-divider="false">
                        <n-list-item class="content-list-item wow fadeInRight" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                            <template #prefix>
                                <div class="img">
                                    <a @click="viewDetail(item)">
                                        <img :src="BaseUrl+'/fileupload/'+item.filePath+item.fileName"/>
                                    </a>
                                </div>
                            </template>
                            
                            <a class="list-title" @click="viewDetail(item)">{{ item.title }}</a>
                            <div v-if="pcShow" class="list-pc">
                                <p class="list-content">{{ item.outline }}</p>
                                <span class="list-date">{{ item.publishDate }}</span>
                            </div>
                        </n-list-item>
                        <template #footer>
                            <div v-if="!pcShow" class="list-mobile">
                                <p class="list-content">{{ item.outline }}</p>
                                <span class="list-date">{{ item.publishDate }}</span>
                            </div>
                        </template>
                    </n-list>
                </template>

                    <div class="pagination">
                        <n-pagination :page="pageList?.pageNo" :page-count="pageList?.count" :page-size="pageList?.pageSize"
                            size="large" :on-update-page="changePage" :page-slot="7"/>
                    </div>
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
    import { IosFiling,MdHome,MdSearch } from '@vicons/ionicons4';
    import { NIcon, NBreadcrumb, NBreadcrumbItem, NInput,NList,NListItem,NThing, NPagination,NSpin} from 'naive-ui';
    import { useRouter, useRoute} from 'vue-router';
    import { onMounted, onServerPrefetch, ref, watch } from 'vue';
    import { getLocalSessionNews, getLocalSessionReport } from '@/store/cache';
    import { MarketInfo, marketInfoPageList } from '@/api/report/market';
    import { DictData } from '@/api/basedata/home';
    import { Page } from '@/api/model/basicModel';
    import { BaseUrl, pageSize } from '@/api/model/common';
    import { useLocaleStoreWithOut } from '@/store';
    import { useI18n } from 'vue-i18n';
    import { isMobile } from '@/utils/validate';
    import { langOnBrowser } from '@/utils';

    const router = useRouter();
    const route = useRoute();       // 接收参数
    const reportTypes= ref<DictData[]>();  // 报告分类
    const newsCategory = ref<DictData[]>();  //资讯分类

    const params = ref({pageSize: pageSize, pageNo: 1}) as any;   // 参数
    const pageList = ref<Page<MarketInfo>>();   //data
    const spinShow = ref('none');   // loading
    const { t } = useI18n();
    const pcShow = ref<boolean>(true);
    const lang = langOnBrowser();

    function viewDetail(item: MarketInfo){
        const language = lang === 'zh-CN'?'':'en'
        router.push({ name: 'newsDetail', params: { webTitle: item.webTitle+'-'+item.id, lang: language} });
    }

    onMounted(async () => { 
        if(isMobile()){
            pcShow.value = false;
        }
        const dicts = await getLocalSessionReport();
        reportTypes.value = dicts;

        const dicts02 = await getLocalSessionNews();
        newsCategory.value = dicts02;

        params.value.marketType = route.params.marketType;
        getData();
    });

    watch(() => [route.params.marketType, route.params.marketCategory],(newValue, oldValue) => {
        params.value.marketType = newValue[0];
        params.value.marketCategory = newValue[1];
        getData();
    })

    async function getData(){
        spinShow.value = 'block';
	    params.value.lang = lang;
        const ret = await marketInfoPageList(params.value);
        setTimeout(() => {
            pageList.value = ret.data;
            spinShow.value = 'none';
        }, 500);
    }

    //报告分类
    function handleCategroy(type:string|undefined){
        params.value.marketType = '';
        params.value.marketCategory = type;
        const language = lang === 'zh-CN'?'':'en'
        router.push({ name: 'news', params: { marketCategory: type, lang: language} });
    }

    //资讯分类
    function handleType(type:string|undefined){
        params.value.marketCategory = '';
        params.value.marketType = type;
        const language = lang === 'zh-CN'?'':'en'
        router.push({ name: 'news', params: { marketType: type, lang: language } });
    }

    // 全部
    function handleAll(){
        params.value.marketCategory = '';
        params.value.marketType = '';
        const language = lang === 'zh-CN'?'':'en'
        router.push({ name: 'news', params: { lang: language} });
    }

    // 改变页数
    function changePage(page: number){
        document.documentElement.scrollTop = 0;
        params.value.pageNo = page;
        getData();
    }

    // 关键字查询
    function handleSearch(){
        getData();
    }

    onServerPrefetch(async () => {
        try {
            await getData()
        } catch (error) {
            
        }
    })

</script>

<style scoped lang="scss">
    .news-content{
        padding-bottom:30px;
        margin-top: 10px;
        .content{
            background-color: #fff;
            padding: 3em 4em;
            .search{
                .search-keyword{
                    width: 70%;
                    .n-icon{
                        vertical-align: middle;
                    }
                }
                .search-type{
                    display: flex;
                    margin-top: 20px;
                    flex-wrap: wrap;
                    >a{
                        display: block;
                        padding: 8px 15px;
                        background-color: #eaedf4;
                        border-radius: 30px;
                        font-size: 14px;
                        margin: 0 1rem 1rem 0;
                    }
                    a.selected{
                        background-color: #18a058;
                        color: #fff;
                    }
                }
            }
            .img{
                height: 160px;
                width: 200px;
                overflow: hidden;
                img{
                    width: 100%;
                    transition: all .4s ease;
                    height: 100%;
                    object-fit: cover;
                    &:hover{
                        transform: scale(1.1);
                    }
                }
            }
        }
    }

    .list-title{
        display: block;
        font-size: 19px;    
        color: #333333;
        font-weight: bold;
        transition: all .4s ease;
        padding: 10px 0;
    }
    .list-content{
        font-size: 14px;
        color: #999999;
        line-height: 26px;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        overflow: hidden;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        height: 70px;
        margin: 0;
    }
    .list-date{
        display: block;
        font-size: 14px;
        color: #999999;
        line-height: 26px;
    }


    .pagination{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 40px;
        border-top: 1px solid rgb(239 239 245);
    }
    .content-list-item{
        padding: 40px 20px;
    }

    .load{display: v-bind('spinShow');}
</style>