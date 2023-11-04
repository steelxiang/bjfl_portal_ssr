<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="IosFiling" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navigate.report') }}</span>
            </div>
        </div>
        <div class="page-nav">
            <div class="page-nav-container">
                <div class="nav-txt wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <n-breadcrumb separator=">">
                        <n-breadcrumb-item>
                            <n-icon :component="MdHome"/><router-link to="/home">{{t('common.navigate.home')}}</router-link>
                        </n-breadcrumb-item>
                        <n-breadcrumb-item>
                            <n-icon :component="IosFiling"/>{{ t('common.navigate.report') }}
                        </n-breadcrumb-item>
                    </n-breadcrumb>
                </div>
                <div class="content">
                    <div class="content-search">
                        <div class="report-category wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0s" data-wow-offset="0">
                            <div class="report-category-title">{{t('report.category.fsttitle')}}</div>
                            <ul>
                                <li v-for="item in categories">
                                    <a>
                                        <span class="category-name">{{item.marketTypeName}}({{ item.marketCount }})</span>
                                        <span class="category-check">
                                            <n-checkbox size="large"
                                                :checked="item.marketType === record.marketType"
                                                @update:checked="handleCategory($event,item.marketType,item.marketTypeName)"/>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="report-search wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0s" data-wow-offset="0">
                            <div class="report-search-name">{{ t('report.category.sndtitle') }}</div>
                            <div class="report-search-content">
                                <n-input-number :show-button="false" clearable v-model:value="record.priceStr" :min="0"/>
                                <span class="report-search-line">-</span>
                                <n-input-number :show-button="false" clearable v-model:value="record.priceEnd" :min="0"/>
                                <n-button type="primary" @click="queryPrice">{{ t('report.category.ok') }}</n-button>
                            </div>
                            <div class="report-search-range">
                                <div class="price-range range" v-for="item in prices">
                                    <!--({{ item.marketCount }})-->
                                    <span>{{ item.marketTypeName }}</span>
                                    <n-checkbox size="large"
                                        :checked="item.price === record.queryPrice"
                                        @update:checked="handlePrice($event,item.price)"/>
                                </div>
                                <!-- <div class="price-range range">
                                    <span>&lt;￥3000(1000)</span>
                                    <n-checkbox size="large"
                                        :checked="3000 === record.queryPrice"
                                        @update:checked="handlePrice($event,3000)"/>
                                </div>-->
                            </div>
                        </div>

                        <div class="report-search wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0s" data-wow-offset="0">
                            <div class="report-search-name">{{t('report.category.trdtitle')}}</div>
                            <div class="report-search-content">
                                <n-date-picker type="date" clearable v-model:value="publishDateStr"/>
                                <span class="report-search-line">-</span>
                                <n-date-picker type="date" clearable v-model:value="publishDateEnd"/>
                                <n-button type="primary"  @click="queryPublishDate">{{ t('report.category.ok') }}</n-button>
                            </div>
                            <div class="report-search-range">
                                <div class="date-range range" v-for="item in publishDates">
                                    <span>{{ item.marketTypeName}}({{ item.marketCount }})</span>
                                    <n-checkbox size="large"
                                        :checked="item.publishDateValue === record.queryPublishDate"
                                        @update:checked="handlePublishDate($event,item.publishDateValue,item.marketTypeName)"/>
                                </div>
                            </div>
                        </div>

                        <div class="report-search wow fadeInLeft" data-wow-duration="3s" data-wow-delay="0s" data-wow-offset="0">
                            <div class="report-search-name">{{ t('report.content.area') }}</div>
                            <div class="report-search-range">
                                <div class="range">
                                    <span>{{ t('report.content.global') }}</span>
                                    <n-checkbox size="large" :checked="record.reportRegion === '1'"
                                        @update:checked="handleRegion($event,'1')"/>
                                </div>
                            </div>
                            <div class="report-search-range">
                                <div class="range">
                                    <span>{{ t('report.content.china') }}</span>
                                    <n-checkbox size="large" :checked="record.reportRegion === '0'"
                                    @update:checked="handleRegion($event,'0')"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="report-content wow fadeInRight" data-wow-duration="3s" data-wow-delay="0s" data-wow-offset="0">
                        <div class="search">
                            <div class="search-text">
                                <n-tag v-if="categoryTag" type="success" closable @close="handleCloseTag($event,'marketType')">{{ categoryTag }}</n-tag>
                                <n-tag v-if="priceTag" type="success" closable @close="handleCloseTag($event,'price')">{{ priceTag }}</n-tag>
                                <n-tag v-if="publishDateTag" type="success" closable @close="handleCloseTag($event,'publishDate')">{{ publishDateTag }}</n-tag>
                                <n-tag v-if="regionTag" type="success" closable @close="handleCloseTag($event,'region')">{{ regionTag }}</n-tag>
                            </div>
                            <div class="search-keyword">
                                <!-- <n-input type="text" size="large" round :placeholder="t('report.content.keyword')" v-model:value="record.queryKeyword" clearable>
                                    <template #suffix>
                                        <a class="search-btn" @click="handleSearch"><n-icon :component="MdSearch" size="30" color="#0e7a0d"/></a>
                                    </template>
                                </n-input> -->

                                <n-input-group>
                                    <n-button size="large" type="primary" @click="handleSearch" style="padding: 0 10px;"><n-icon :component="MdSearch" size="30" color="#fff"/></n-button>
                                    <n-input type="text" size="large" :placeholder="t('report.content.keyword')" v-model:value="record.queryKeyword" clearable/>
                                </n-input-group>
                            </div>
                        </div>
                        <div class="box">
                            <ul v-if="pageList?.count > 0">
                                <li v-for="item in pageList?.list">
                                    <div class="img">
                                        <img :src="BaseUrl+'/report/'+item.fileName"/>
                                    </div>
                                    <div class="text">
                                        <a @click="viewDetail(item)"><h3>{{ item.title }}</h3></a>
                                        <p>{{ item.outline }}</p>
                                        <div v-if="pcShow" class="time pc-time">
                                            <n-icon :component="MdTime" color="#0e7a0d" depth="1" size="18"/>
                                            <span>{{ item.publishDate }}</span>
                                            <span class="text-price">
                                                {{t('report.content.version')}}：<b>{{ (item.lang == 'zh-CN'? '￥ ':'')+item.price?.toFixed(2) + (item.lang == 'en-US'?' USD':'')}}</b>
                                            </span>
                                        </div>
                                    </div>

                                    <div v-if="!pcShow" class="time mobile-time">
                                        <n-icon :component="MdTime" color="#0e7a0d" depth="1" size="18"/>
                                        <span>{{ item.publishDate }}</span>
                                        <span class="text-price">
                                            {{t('report.content.version')}}：<b>{{ (item.lang == 'zh-CN'? '￥ ':'')+item.price?.toFixed(2) + (item.lang == 'en-US'?' USD':'')}}</b>
                                        </span>
                                    </div>
                                    
                                    <div class="operate">
                                        <n-button @click="handleDemand(item)" type="primary" round>{{t('report.content.submit')}}</n-button>
                                    </div>
                                </li>

                                <div class="pagination">
                                    <n-pagination :page="pageList?.pageNo" :page-count="pageList?.count" :page-size="pageList?.pageSize"
                                        size="large" :on-update-page="changePage" :page-slot="7"/>
                                </div>
                            </ul>

                            <div class="box-empty" v-if="pageList?.count === 0">
                                <n-empty :description="t('report.detail.empty')">
                                    <template #extra>
                                        <n-button @click="handleDemand({ id: '', price: 0 })" round type="primary">{{ t('report.detail.custom') }}</n-button>
                                    </template>
                                </n-empty>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="load">
            <n-spin size="large">
                <template #description>{{t('report.content.loading')}}</template>
            </n-spin>
        </div>

        <n-modal :show="demandShow" preset="dialog" :title="t('report.detail.subscribe')"
            @close="demandShow = false"
            @esc="demandShow = false"
            @mask-click="demandShow = false"
            :style="'min-width: 40%'">
            <demand :rowId="rowId" :rowPrice="rowPrice" @closeDialog="handleCloseDiag"/>
        </n-modal>
    </div>
</template>

<script lang="ts" setup>
    import { ref, onMounted, watch, onServerPrefetch } from 'vue';
    import { MdSearch, MdHome,IosFiling,MdTime } from '@vicons/ionicons4';
    import { NBreadcrumb, NBreadcrumbItem, NInput, NPagination,NIcon, NModal,NCheckbox,NTag,NInputNumber,NButton,NDatePicker,NSpin, PaginationInfo, NInputGroup, NEmpty } from 'naive-ui';
    import { useRouter,useRoute } from 'vue-router';
    import Demand from './demand.vue';
    import { ResearchReport, researchReportListData } from '@/api/report/report';
    import { Page } from '@/api/model/basicModel';
    import { BaseUrl, pageSize } from '@/api/model/common';
    import { formatDate, langOnBrowser } from '@/utils';
    import { useLocaleStore, useLocaleStoreWithOut } from '@/store';
    import { useI18n } from 'vue-i18n';
    import { containsType, isMobile } from '@/utils/validate';

    const record = ref({pageSize: pageSize, pageNo: 1} as any);  // 参数
    const router = useRouter();     // 传递参数
    const route = useRoute();       // 接收参数
    const demandShow = ref(false);  // 需求页面
    const categoryTag = ref<string>();     // 类型tag
    const priceTag = ref<string>();     // 价格tag
    const publishDateTag = ref<string>();   // 发布日期tag
    const regionTag = ref<string>();    // 地区
    const pageList = ref<Page<ResearchReport>>(); // 列表数据
    const publishDateStr = ref<number>();     // 发布日期
    const publishDateEnd = ref<number>();
    const rowId = ref<string>();  // id
    const rowPrice = ref<string>();     // 单价
    const { t } = useI18n();
    //const mobileTime = ref<string>('none'); //默认不显示
    const pcShow = ref<boolean>(true);
    const lang = langOnBrowser();
    
    function viewDetail(item: ResearchReport){
        const language = lang === 'zh-CN'?'': 'en';
        router.push({ name: 'reportDetail', params: { webTitle: item.webTitle+'-'+item.id, lang: language } });
    };

    const spinShow = ref('none');
    const categories = ref<ResearchReport[]>();
    const prices = ref<ResearchReport[]>();
    const publishDates = ref<ResearchReport[]>();
    onMounted(async () => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 1);
        }
        // 接收参数，导航栏进入
        const marketType = route.params.category;
        record.value.marketType = marketType;
        
        const keyword = route.params.keyword;
        if(keyword){
            record.value.queryKeyword = keyword;
        }

        // 列表
        await getData();

        // 此段代码解决无法监听home页面跳转显示tag问题
        const item = containsType(categories.value, marketType);
        categoryTag.value = item?.marketTypeName;

        if(isMobile()){
            pcShow.value = false;
        }
    });

    watch(() => route.params.category, (newValue, oldValue) => {
        record.value.marketType = newValue;
        getData();
        const item = containsType(categories.value, newValue);
        categoryTag.value = item?.marketTypeName;
    });

    async function getData(){
        spinShow.value = 'block';
        record.value.lang = lang;
        const ret = await researchReportListData(record.value);
        categories.value = ret.data.categories;
        prices.value = ret.data.prices;
        publishDates.value = ret.data.publishDates;
        pageList.value = ret.data.pageList;
        setTimeout(() => {
            spinShow.value = 'none';
        }, 100);
    }

    // 选择/取消类别
    function handleCategory(checked:boolean,value:string|undefined,label:string|undefined){
        //const lang = useLocaleStore().getLocale;
        const language = lang === 'zh-CN'?'': 'en';
        if(checked){
            record.value.marketType = value;
            // categoryTag.value = label;
            router.push({ name: 'reports', params: { category: value, lang: language }});
        }else{
            record.value.marketType = "";
            // categoryTag.value = "";
            router.push({ name: 'reports', params: {lang: language} });
        }
        //getData();
    }

    // 关闭tag
    function handleCloseTag(_e: MouseEvent,type:string){
        if('marketType' === type){
            record.value.marketType = "";
            categoryTag.value = "";

            //const lang = useLocaleStore().getLocale;
            const language = lang === 'zh-CN'?'': 'en';
            router.push({ name: 'reports', params: {lang: language} });
        }else{
            if('price'=== type){
                record.value.queryPrice = "";
                priceTag.value = "";
            }
            if('publishDate' === type){
                record.value.queryPublishDate = "";
                publishDateTag.value = "";
            }
            if('region' === type){
                record.value.reportRegion = "";
                regionTag.value = "";
            }
            getData();
        }
    }

    // 价格
    function handlePrice(checked:boolean,price:number|undefined){
        if(checked){
            if(price === 5001){
                priceTag.value = ">￥5000";
            }else{
                priceTag.value = "<￥"+price;
            }
            record.value.queryPrice = price;

            record.value.priceEnd = '';
            record.value.priceStr = '';
        }else{
            record.value.queryPrice = "";
            priceTag.value = "";
        }
        getData();
    }

    // 发布日期
    function handlePublishDate(checked:boolean,day:number|undefined,dayStr:string|undefined){
        if(checked){
            record.value.queryPublishDate = day;
            publishDateTag.value = dayStr;
        }else{
            record.value.queryPublishDate = '';
            publishDateTag.value = "";
        }
        record.value.publishDateStr = "";
        record.value.publishDateEnd = "";
        getData();
    }

    // 地区
    function handleRegion(checked:boolean, region: string){
        if(checked){
            record.value.reportRegion = region;
            if('1' === region){
                regionTag.value = lang == 'zh-CN'?"全球与中国":"Global";
            }else{
                regionTag.value = lang == 'zh-CN'? "中国":"China";
            }
        }else{
            record.value.reportRegion = "";
            regionTag.value = "";
        }
        getData();
    }

    // 价格区间查询
    function queryPrice(){
        const price01 = record.value.priceStr,price02 = record.value.priceEnd;
        if(price01){
            // 价格end不存在或者小于价格str，则只计算大于价格str
            let priceDesc = '';
            if(price02){
                if(price02 > price01){
                    priceDesc = "￥"+price01+"~"+price02;
                }else{
                    priceDesc = ">￥"+price01;
                }
            }else{
                priceDesc = ">￥"+price01;
            }
            priceTag.value = priceDesc;
        }else{
            if(price02 && price02 > 0){
                priceTag.value = "<￥"+price02;

            }else{
                priceTag.value = '';
            }
        }
        record.value.queryPrice = '';   //去掉价格
        getData();
    }

    // 发布日期区间查询
    function queryPublishDate(){
        const dateStr = publishDateStr.value,dateEnd = publishDateEnd.value;
        if(dateStr){
            const date01 = formatDate(dateStr,'yyyy-MM-dd');
            let dateTag = '', date02;
            if(dateEnd){
                date02 = formatDate(dateEnd,'yyyy-MM-dd');
                if(dateEnd > dateStr){
                    dateTag = date01 +"~"+date02;
                }else{
                    dateTag = ">"+date01;
                }
            }else{
                dateTag = ">"+date01;
            }
            publishDateTag.value = dateTag;
            record.value.publishDateStr = date01;
            record.value.publishDateEnd = date02;
        }else{
            if(dateEnd){
                const date02 = formatDate(dateEnd,'yyyy-MM-dd');
                publishDateTag.value = "<"+date02;
                record.value.publishDateEnd = date02;
            }
        }
        record.value.queryPublishDate = "";
        getData();
    }

    // 关键字查询
    function handleSearch(){
        getData();
    }

    // 提交需求
    function handleDemand(item: ResearchReport) {
        rowId.value = item.id;
        rowPrice.value = item.price?.toString();
        demandShow.value = true;
    }

    // 关闭diag
    function handleCloseDiag(){
        demandShow.value = false;
    }

    // 改变页数
    function changePage(page: number){
        document.documentElement.scrollTop = 0;
        record.value.pageNo = page;
        getData();
    }

    onServerPrefetch(async () => {
        try {
            const marketType = route.params.category;
            record.value.marketType = marketType;
            
            const keyword = route.params.keyword;
            if(keyword){
                record.value.queryKeyword = keyword;
            }

            // 列表
            await getData();

            // 此段代码解决无法监听home页面跳转显示tag问题
            const item = containsType(categories.value, marketType);
            categoryTag.value = item?.marketTypeName;
        } catch (error) {
            console.log(error)
        }
    })
</script>

<style lang="scss" scoped>
    .content{
        display: flex;
        justify-content: space-between;
        padding: 10px 0 30px;
        flex-wrap: wrap;
        .content-search{
            width: 22%;
            .report-category{
                background-color: #fff;
                padding: 20px;
                .report-category-title{
                    font-size: 18px;
                    font-weight: 600;
                    padding: 10px 0;
                }
                >ul>li{
                    height: 50px;
                    line-height: 50px;
                    margin: 0;
                    >a{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        >.category-name{
                            font-size: 16px;
                            margin: 0;
                            line-height: 20px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            width: 80%;
                        }
                        >.category-check{
                            font-size: 16px;
                            color: #999999;
                            text-align: center;
                            vertical-align: middle;
                        }
                    }
                }
            }
            .report-search{
                padding: 20px;
                background-color: #fff;
                margin-top: 20px;
                .report-search-name{
                    font-size: 18px;
                    font-weight: 600;
                    padding: 10px 0;
                }
                .report-search-content{
                    display: flex;
                    justify-content: space-around;
                    padding-bottom: 20px;
                    .n-input-number{
                        width: 35%;
                    }
                    .n-date-pick{
                        width: 35%;
                        .n-input .n-input-wrapper{
                            .n-input__suffix{display: none !important;}
                        }
                    }

                    .report-search-line{
                        line-height: 30px;
                    }
                }
                .report-search-range{
                    .range{
                        display: flex;
                        justify-content: space-between;
                        padding-bottom: 15px;
                    }
                }
            }
        }
        .report-content{
            width: 77%;
            background-color: #fff;
            padding: 30px 50px;
            .search{
                display: flex;
                justify-content: space-between;
                padding-bottom: 20px;
                border-bottom: 1px solid #d1d1d1;
                align-items: center;
                .search-text{
                    padding-top: 10px;
                    font-size: 16px;
                    font-weight: 700;
                    width: 30%;
                    .n-tag{
                        margin: 0 5px 5px 0;
                    }
                }
                .search-keyword{
                    width: 60%;
                }
            }
            .box>ul>li{
                padding: 0.3rem 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #d1d1d1;
                flex-wrap: wrap;
                >.img{
                    max-width: 10em;
                    max-height: 12em;
                    overflow: hidden;
                    box-shadow: 7px 0px 15px rgb(0 87 149 / 33%);
                    >img{
                        width:100%;
                        transition: all .4s ease;
                        border: none;
                        vertical-align: middle;
                    }
                    // >img:hover{
                    //     transform: scale(1.1);
                    // }
                }
                .text{
                    width: 60%;
                    >a{
                        >h3{
                            word-break: break-all;
                        }
                    }
                    >.time{
                        vertical-align: sub;
                        padding: 10px 0;
                        >span{
                            padding: 0px 20px 0 2px;
                            vertical-align: text-bottom;
                            >b{
                                color: #f00;
                            }
                        }
                    }
                    //.pc-time{display: v-bind('pcTime');}
                    
                    >p{
                        font-size: 14px;
                        color: #999999;
                        line-height: 26px;
                        margin: 0.15rem 0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                    }
                }
                //.mobile-time{display: v-bind('mobileTime');}
            }
            .box{
                .box-empty{
                    padding: 50px 0;
                    border-bottom: 1px solid #d1d1d1;
                }
            }
        }
    }
    .search-btn>.n-icon{vertical-align: middle;}
    .pagination{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .n-input .n-input__suffix{
        display: none !important;
    }
    .n-input .n-input-wrapper{
        padding: 0 1px;
    }
    .load{display: v-bind('spinShow');}
</style>
