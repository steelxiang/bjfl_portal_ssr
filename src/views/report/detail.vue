<template>
    <div class="page" id="page">
        <div class="top-title wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
            <div class="top-container">
                <n-icon :component="IosFiling" size="40" style="vertical-align: middle;"/>
                <span>{{ t('common.navigate.report')}}</span>
            </div>
        </div>

        <div class="page-nav-container">
            <div class="nav-txt wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                <n-breadcrumb separator=">">
                    <n-breadcrumb-item>
                        <n-icon :component="MdHome"/><router-link to="/home">{{ t('common.navigate.home')}}</router-link>
                    </n-breadcrumb-item>
                    <n-breadcrumb-item>
                        <n-icon :component="IosFiling"/>{{ t('common.navigate.report')}}
                    </n-breadcrumb-item>
                </n-breadcrumb>
            </div>
        </div>

        <div class="report-detail" id="report-detail">
            <div class="container detail-container">
                <div class="detail-info">
                    <div class="detail-box wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <div class="img">
                            <img :src="BaseUrl+'/report/'+record?.fileName"/>
                        </div>
                        <div class="desc">
                            <p>{{ record?.title }}</p>
                            
                            <div class="desc-dt-box">
                                <div class="desc-dt-cnt">
                                    <span><b>{{ t('report.category.trdtitle')}}：</b>{{ record?.publishDate }}</span>
                                    <span class="pt-20"><b>{{t('report.detail.pageNum')}}：</b>{{ pageNum }}</span>
                                    <span class="pt-20"><b>{{t('report.detail.chart')}}：</b>{{ chartNum }}</span>
                                </div>
                                <div v-if="pcBtnShow" class="desc-btns pc-btns">
                                    <n-space>
                                        <n-button type="warning" @click="handleOrder('1')">{{ t('report.detail.sample') }}</n-button>
                                    </n-space>  
                                </div>
                            </div>

                            <div class="desc-dt-box">
                                <div class="desc-dt-cnt">
                                    <span><b>{{ t('report.detail.code') }}</b>{{ record?.reportCode }}</span>
                                    <span class="pt-20"><b>{{ t('report.detail.formTitle') }}</b>{{ t('report.detail.formDesc')}}</span>
                                    <span class="pt-20"><b>{{ t('report.detail.deliveyTitle') }}</b>{{ t('report.detail.deliveyDesc')}}</span>
                                </div>

                                <div v-if="pcBtnShow" class="desc-btns pc-btns">
                                    <n-space>
                                        <n-button type="info" @click="handleOrder('2')">{{t('report.detail.custom')}}</n-button>
                                    </n-space>
                                </div>
                            </div>
                        </div>

                        <div v-if="!pcBtnShow" class="mobile-btns">
                            <n-space>
                                <n-button type="warning" @click="handleOrder('1')">{{ t('report.detail.sample') }}</n-button>
                            </n-space>
                            <n-space>
                                <n-button type="info" @click="handleOrder('2')">{{t('report.detail.custom')}}</n-button>
                            </n-space>
                        </div>

                        <div class="horizontal-line"><hr/></div>

                        <div class="btns">
                            <a @click="handleIntegrity">{{t('report.detail.integrity')}}</a>
                            <a @click="handleBusiness">{{t('report.detail.btnEnterprise')}}</a>
                        </div>
                    </div>
                    
                    <div class="detail-price full-version wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <n-table size="large">
                            <thead>
                                <tr><th class="version-title" @click="showPrice">{{t('report.detail.version')}}</th></tr>
                            </thead>
                            <transition>
                            <tbody v-if="tbodyShow">
                                <tr v-for="vo in priceFullList">
                                    <td class="price-one">
                                        <n-radio size="large" :checked="vo?.configValue === price" @change="handlePrice($event,vo?.configValue)">
                                            {{ vo.configName?.split('-')[3] == "单用户版单价"? t('report.detail.singlePrice'): vo.configName?.split('-')[3] == "多用户版单价"?
                                                t('report.detail.multiPrice'): t('report.detail.enterprisePrice02')}}
                                        </n-radio>
                                        <div class="price-desc">{{ (lang == 'zh-CN'?'￥ ':'') + (vo?.configValue + '.00') + (lang == 'en-US'?' USD':'') }}</div>
                                    </td>
                                </tr>
                                <!-- <tr>
                                    <td class="price-one">
                                        <n-radio size="large" :checked="record?.multiPrice === price" @change="handlePrice($event,record?.multiPrice)">{{t('report.detail.multi')}}</n-radio>
                                        <div>￥{{ record?.multiPrice?.toFixed(2) }}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="price-one">
                                        <n-radio size="large" :checked="record?.enterprisePrice === price" @change="handlePrice($event,record?.enterprisePrice)">{{ t('report.detail.enterpriseV') }}</n-radio>
                                        <div>￥{{ record?.enterprisePrice?.toFixed(2) }}</div>
                                    </td>
                                </tr> -->
                                <tr>
                                    <td class="price-one">
                                        <a class="price-btn price-buy" @click="handleDemand">{{t('report.detail.buy')}}</a>
                                        <a class="price-btn" @click="handleDemand">{{t('report.detail.link')}}</a>
                                    </td>
                                </tr>
                            </tbody>
                            </transition>
                        </n-table>
                    </div>

                    <div class="detail-price enterprise-price wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                        <n-table size="large">
                            <thead>
                                <tr><th class="version-title" @click="showPrice">{{ t('report.detail.enterprisePrice') }}</th></tr>
                            </thead>
                            <transition>
                            <tbody v-if="tbodyShow">
                                <tr v-for="vo in priceList">
                                    <td class="price-one">
                                        <n-radio size="large" :checked="vo?.configValue === price" @change="handlePrice($event,vo?.configValue)">
                                            {{ vo.configName?.split('-')[3] == "单用户版单价"? t('report.detail.singlePrice'): vo.configName?.split('-')[3] == "多用户版单价"?
                                                t('report.detail.multiPrice'): t('report.detail.enterprisePrice02')}}
                                        </n-radio> 
                                        <div class="price-desc">{{ (lang == 'zh-CN'?'￥ ':'') +  (vo?.configValue + '.00') +  (lang == 'en-US'?' USD':'') }}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="price-one">
                                        <a class="price-btn price-buy" @click="handleDemand">{{t('report.detail.buy')}}</a>
                                        <a class="price-btn" @click="handleDemand">{{t('report.detail.link')}}</a>
                                    </td>
                                </tr>
                            </tbody>
                            </transition>
                        </n-table>
                    </div>
                </div>

                <div class="detail-statement wow fadeInUp" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <div class="detail-statement-title">{{ t('report.detail.statement') }}:  </div>
                    <div class="detail-statement-content">{{t('report.detail.statementCnt') }}</div>
                    <div class="detail-statement-attent">{{t('report.detail.statementAtn')}} </div>
                </div>

                <div class="detail-content wow fadeInDown" data-wow-duration="2s" data-wow-delay="0s" data-wow-offset="0">
                    <div class="detail-content-mr">
                        <div class="detail-integrity" ref="detailIntegrityRef">
                            <n-tabs justify-content="space-evenly" size="large" pane-style="border-top: 1px solid #e1e1e1;padding: 20px" :animated="true"
                                tab-style="padding:20px;">
                                <n-tab-pane :name="t('report.detail.scope')">
                                    <div v-html="record?.reportScopeHtml"></div>
                                </n-tab-pane>
                                <n-tab-pane :name="t('report.detail.direct')">
                                    <!--@click="handleDir" -->
                                    <div class="detail-directory" v-html="record?.directoryHtml"></div>
                                </n-tab-pane>
                                <n-tab-pane :name="t('report.detail.chartsDir')">
                                    <div v-html="record?.chartsHtml"></div>
                                </n-tab-pane>
                            </n-tabs>
                        </div>
                        <div class="detail-business">
                            <n-tabs justify-content="space-evenly" size="large" pane-style="border-top: 1px solid #e1e1e1;padding: 20px" :animated="true"
                                tab-style="padding:20px;">
                                <n-tab-pane :name="t('report.detail.btnEnterprise')">
                                    <div v-html="record?.contextHtml"></div>
                                </n-tab-pane>
                            </n-tabs>
                        </div>
                    </div>

                    <div class="detail-content-ml">
                        <div class="detail-search">
                            <n-input-group>
                                <n-button size="large" type="primary" @click="handleSearch" style="padding: 0 10px;"><n-icon :component="MdSearch" size="30" color="#fff"/></n-button>
                                <n-input type="text" size="large" :placeholder="t('report.content.keyword')" v-model:value="keyword" clearable/>
                            </n-input-group>
                        </div>
                        <div class="detail-title"><h2>{{ t('common.navAboutUs.order') }}</h2></div>
                        <div class="detail-process">
                            <div class="process-box">
                                <!-- <div class="process-icon"><div class="process-icon-title pt1">{{ t('aboutUs.order.pFstTile') }}</div></div> -->
                                <div class="process-title">{{ t('aboutUs.order.pFstTile') }}</div>
                                <div class="process-content">
                                    <p>{{ t('aboutUs.order.pFstDesc01') }}</p>
                                    <p>{{ t('aboutUs.order.pFstDesc02') }}</p>
                                </div>
                            </div>
                            <!-- <div class="process-arrow"><span class="icon iconfont icon-iconset0435 f50 color01"></span></div> -->
                            <div class="process-box">
                                <!-- <div class="process-icon"><div class="process-icon-title pt2">{{ t('aboutUs.order.pSndTitle') }}</div></div> -->
                                <div class="process-title">{{ t('aboutUs.order.pSndTitle') }}</div>
                                <div class="process-content">
                                    <p>{{ t('aboutUs.order.pSndDesc01') }}</p>
                                    <p>{{ t('aboutUs.order.pSndDesc02') }}</p>
                                </div>
                            </div>
                            <!-- <div class="process-arrow"><span class="icon iconfont icon-iconset0435 f50 color02"></span></div> -->
                            <div class="process-box">
                                <!-- <div class="process-icon"><div class="process-icon-title pt3">{{ t('aboutUs.order.pThrTitle') }}</div></div> -->
                                <div class="process-title">{{ t('aboutUs.order.pThrTitle') }}</div>
                                <div class="process-content">
                                    <p>{{ t('aboutUs.order.pThrDesc01') }}</p>
                                    <p>{{ t('aboutUs.order.pThrDesc02') }}</p>
                                    <!-- <p>{{ t('aboutUs.order.pThrDesc03') }}</p> -->
                                </div>
                            </div>
                            <!-- <div class="process-arrow"><span class="icon iconfont icon-iconset0435 f50 color03"></span></div> -->
                            <div class="process-box">
                                <!-- <div class="process-icon"><div class="process-icon-title pt4">{{ t('aboutUs.order.pForTitle') }}</div></div> -->
                                <div class="process-title">{{ t('aboutUs.order.pForTitle') }}</div>
                                <div class="process-content">
                                    <p>{{ t('aboutUs.order.pForDesc01') }}</p>
                                    <p>{{ t('aboutUs.order.pForDesc02') }}</p>
                                    <p>{{ t('aboutUs.order.pForDesc03') }}</p>
                                </div>
                            </div>
                            <!-- <div class="process-arrow"><span class="icon iconfont icon-iconset0435 f50 color04"></span></div> -->
                            <div class="process-box">
                                <!-- <div class="process-icon"><div class="process-icon-title pt5">{{ t('aboutUs.order.pFivTitle') }}</div></div> -->
                                <div class="process-title">{{ t('aboutUs.order.pFivTitle') }}</div>
                                <div class="process-content">
                                    <p>{{ t('aboutUs.order.pFivDesc') }}</p>
                                </div>
                            </div>
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
                    <a @click="handleContact">{{ t('home.custom.contact') }}</a>
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
            <demand :rowId="rowId" :rowPrice="rowPrice" :rowType="rowType" @closeDialog="handleCloseDiag"/>
        </n-modal>
    </div>
</template>

<script lang="ts" setup>
    import { MdHome,IosFiling, MdSearch } from '@vicons/ionicons4';
    import { NBreadcrumb, NBreadcrumbItem, NIcon,NTabs,NTabPane, NTable, NRadio,NModal, NButton, NSpace, NInputGroup, NInput} from 'naive-ui';
    import { useRoute, useRouter } from 'vue-router';
    import { onMounted, ref, onUnmounted, onServerPrefetch } from 'vue';
    import { ResearchReport, researchReportForm } from '@/api/report/report';
    import { BaseUrl } from '@/api/model/common';
    import Demand from './demand.vue';
    import { useI18n } from 'vue-i18n';
    import { configList, Config } from '@/api/basedata/home';
    import { useLocaleStore, useLocaleStoreWithOut } from '@/store';
    import { isMobile } from '@/utils/validate';
    import { langOnBrowser } from '@/utils';
import { getWindow } from 'ssr-window';

    const route = useRoute();
    const router = useRouter();
    const record = ref<ResearchReport>();
    const integrityShow = ref('block');     // 完整性
    const businessSHow = ref('none');       // 企业数据
    const price = ref<string>();    // 选择价格
    const demandShow = ref(false); // 需求
    const rowId = ref<string>();    // id
    const rowPrice = ref<string>();   // 选择版本 
    const rowType = ref<string>();  // 类型，1.样本,2.定制 
    const { t } = useI18n();
    const priceList = ref<Config[]>();  // 企业版价格（价格清单）
    const priceFullList = ref<Config[]>();  // 完整版价格
    const pageNum  = ref<string>(), chartNum = ref<string>(); // 页数图表数
    const tbodyShow = ref(true);    //tbody
    const detailIntegrityRef = ref();   //正文目录
    //const detailDirListShow = ref<string>('none');  // 正文目录清单显示
    const lang = langOnBrowser();
    const keyword = ref<string>('');  //关键字
    const pcBtnShow = ref<boolean>(true);
    //const mobileBtnShow = ref<string>('none');

    async function getData() {
        if(isMobile()){
            pcBtnShow.value = false;
        } 
        
        const webTitle = route.params.webTitle;
        const wts = webTitle.split('-');
        const ret = await researchReportForm({id: wts[wts.length - 1], lang: lang });
        if(ret.data){
            record.value = ret.data;

            let keys = '',fullKeys = '',pageKeys = '';
            if(lang == 'zh-CN'){
                if(ret.data.reportRegion == '1'){
                    // 全球与中国，1.企业数据,2.完整
                    keys = "cn.global.data.single.price,cn.global.data.multi.price,cn.global.data.enterprise.price";
                    fullKeys = "cn.global.full.single.price,cn.global.full.multi.price,cn.global.full.enterprise.price";
                    pageKeys = "cn.global.page.number,cn.global.chart.number";
                }else{
                    // 中国
                    keys = "cn.china.data.single.price,cn.china.data.multi.price,cn.china.data.enterprise.price";
                    fullKeys = "cn.china.full.single.price,cn.china.full.multi.price,cn.china.full.enterprise.price";
                    pageKeys = "cn.china.page.number,cn.china.chart.number";
                }
            }else{
                if(ret.data.reportRegion == '1'){
                    // 全球与中国，1.企业数据,2.完整
                    keys = "en.global.data.single.price,en.global.data.multi.price,en.global.data.enterprise.price";
                    fullKeys = "en.global.full.single.price,en.global.full.multi.price,en.global.full.enterprise.price";
                    pageKeys = "en.global.page.number,en.global.chart.number";
                }else{
                    // 中国
                    keys = "en.china.data.single.price,en.china.data.multi.price,en.china.data.enterprise.price";
                    fullKeys = "en.china.full.single.price,en.china.full.multi.price,en.china.full.enterprise.price";
                    pageKeys = "en.china.page.number,en.china.chart.number";
                }
            }

            const c1 = await configList({keys:keys});
            priceList.value = c1.data;

            const c2 = await configList({keys: fullKeys});
            price.value = c2.data[0].configValue;
            priceFullList.value = c2.data;

            const c3 = await configList({keys: pageKeys});
            pageNum.value = c3.data[0].configValue;
            chartNum.value = c3.data[1].configValue;

            if (window) window.addEventListener('scroll',onScroll);
        }else{
            const language = lang === 'zh-CN'?'': 'en';
            router.push({ name: 'reports',params: {lang: language}});
        }
    }

    onMounted( async() => {
        await getData
    });

    onUnmounted(() => {
        window.removeEventListener('scroll',onScroll);
    });

    // 完整性
    function handleIntegrity(){
        integrityShow.value = 'block';
        businessSHow.value = 'none';
        price.value = priceFullList.value[0]?.configValue;
    }

    // 企业数据
    function handleBusiness(){
        integrityShow.value = 'none';
        businessSHow.value = 'block'; 
        price.value = priceList.value[0].configValue;
    }

    // 切换版本
    function handlePrice(_e:Event, priceValue:string|undefined){
        price.value = priceValue;
    }

    //关闭diag
    function handleCloseDiag(){
        demandShow.value = false;
    } 

    // 提交需求
    function handleDemand(){
        rowId.value = record.value?.id;
        rowPrice.value = price.value;
        demandShow.value = true;
    }

    function handleContact(){
        demandShow.value = true;
    }

    function handleOrder(type: string){
        rowId.value = record.value?.id;
        rowPrice.value = price.value;
        rowType.value = type;
        demandShow.value = true;
    }

    // 鼠标滑动
    function onScroll(){
        // 价格显示隐藏
        const scollTop = document.documentElement.scrollTop;
        if(scollTop > 370 && pcBtnShow.value){
            tbodyShow.value = false;
        }else{
            tbodyShow.value = true;
        }
        
        // 正文目录滑动时，正文菜单显示隐藏
        // const top = detailIntegrityRef.value.getBoundingClientRect().top;   // 顶点距离
        // const height = detailIntegrityRef.value.clientHeight;   // 正文高度 
        // if(top <= 0 && height >= scollTop - 100){
        //     detailDirListShow.value = 'block';
        // }else{
        //     detailDirListShow.value = 'none';
        // }
        // 滑动时自动定位到正文清单
        // console.log("顶部距离："+scollTop);
        // const calcTop = Math.trunc(scollTop - 840);
        // const childrens = document.getElementsByClassName('bjfl-list')[0]?.children;
        // const len = document.getElementsByClassName('bjfl-list')[0]?.children.length;
        // if(len && len > 0){
        //     for(let i = 1; i < len; i++){
        //         let outId = "c"+i, lastTop = 0;
        //         if(i < 10){ outId = "c0" +i;}
        //         const top = document.getElementById(outId)?.offsetTop || 0;
        //         if(top === calcTop){
        //             childrens.forEach(item => { item.className = ''; })
        //             childrens[i].className = 'active';
        //             break;
        //         }else{
        //             if(i > 1){
        //                 // 上一节点到顶部距离
        //                 let lastId = "c"+(i-1);
        //                 if(i < 11){ lastId = "c0"+(i-1); }
        //                 lastTop = document.getElementById(lastId)?.offsetTop || 0;
        //                 //console.log(outId+":"+top);
        //                 // 滑动距离在i和i-1中间，则设置i-1为active，其余为空
        //                 //console.log("outId:"+outId+",top:"+top+",lastTop:"+top);
        //                 if(top > calcTop && lastTop <= calcTop){
        //                     childrens.forEach(item => { item.className = ''; })
        //                     childrens[i-1].className = 'active';
        //                     break;
        //                 }
        //             }else{
        //                 if(top >= calcTop){
        //                     childrens.forEach(item => {  item.className = '';})
        //                     childrens[i].className = 'active';
        //                     break;
        //                 }
        //             }
        //         }
        //     }
        // }
    }

    // 正文目录内容导航点击事件
    // function handleDir(e: Event){
    //     if(e.target.className != 'bjfl-t01'){
    //         document.getElementsByClassName(e.target.offsetParent.className)[0].childNodes.forEach(item => {
    //             if(item.className != 'bjfl-t01'){
    //                 item.className = '';
    //             }
    //         })
    //         e.target.className = 'active';

    //         const outId = e.target.getAttribute('data-id');
    //         const top = document.getElementById(outId)?.offsetTop || 0;
    //         document.documentElement.scrollTop = top + 840;
    //     }
    // }

    // 显示价格
    function showPrice(){
        //window.scrollTo(0,0);
        let scollTop = document.documentElement.scrollTop;
        const timeTop = setInterval(() => {
            document.documentElement.scrollTop =  document.documentElement.scrollTop = scollTop -= 10;
            if(scollTop  <= 0){
                clearInterval(timeTop);
            }
        },10);
    }

    function handleSearch(){
        const language = lang === 'zh-CN'?'': 'en';
        router.push({ name: 'reports', params: { keyword: keyword.value, lang: language } });
    }

    onServerPrefetch(async () => {
        try {
            await getData()
        } catch (error) {
            
        }
    })

</script>

<style lang="scss" scoped>
    .report-detail{
        background-color: #fff;
        margin-top: 10px;
        .detail-container{
            padding: 50px 0;
            background-color: #fff;
            .detail-info{
                display: flex;
                justify-content: space-between; 
                padding-bottom: 20px;
                align-items: flex-end;
                flex-wrap: wrap;
                .detail-box{
                    width: 70%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    .img{
                        width: 20%;
                        overflow: hidden;
                        margin: auto 0;
                        box-shadow: 7px 0px 15px rgb(0 87 149 / 33%);
                        img{
                            width: 100%;
                            border: none;
                            vertical-align: middle;
                            max-height: 200px;
                            transition: all 0.4s ease;
                        }
                        // img:hover{
                        //     transform: scale(1.1);
                        // }
                    }
                    .desc{
                        width: 75%;
                        p{
                            margin-top: 0px;
                            font-size: 29px;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            word-wrap: break-word;
                            font-weight: 700;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            height: 90px;
							word-break: break-all;
                        }
                        .desc-dt-box{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding-bottom: 5px;
                            .desc-dt-cnt{
                                font-size: 15px;
                            }
                        }
                    }
                    .horizontal-line{
                        width: 100%;
                        padding: 10px 0 30px;
                        hr{
                            border: none;
                            height: 1px;
                            background-color: #e1e1e1;
                        }
                    }
                    .btns{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        >a{
                            width: 48%;
                            border: 1px solid #18a058;
                            display: inline-block;
                            padding: 15px;
                            text-align: center;
                            font-size: 16px;
                            color: #18a058;
                            font-weight: 600;
                            &:hover{
                                background-color: #18a058;
                                color: #fff;
                            }
                        }
                    }
                }
                .detail-price{
                    width: 28%;
                    .version-title{
                        text-align: center;
                        background: #18a058;
                        color: #fff;
                        border-bottom: none;
                        padding: 18px 0;
                        font-weight: 700;
                        font-size: 18px;
                        cursor: pointer;
                    }
                }
            }
            .detail-statement{
                border: 1px solid #e1e1e1;
                padding: 25px 15px;
                margin-bottom: 20px;
                line-height: 25px;
                background-color: #f0f0f0;
                .detail-statement-title{
                    font-weight: 600;
                    padding-bottom: 5px;
                }
                .detail-statement-attent{
                    padding-top: 5px;
                    color: #f00;
                }
            }
            .detail-content{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .detail-content-mr{
                    width: 70%;
                }
                .detail-content-ml{
                    .detail-search{
                        padding: 12px 0;
                    }
                    .process-arrow{
                        padding-left: 15px;
                        .color01{
                            color: #e69601 ;
                        }
                        .color02{ color: #93a500;}
                        .color03{ color: #24ab9a;}
                        .color04{ color: #23aef5;}
                    }
                    width: 28%;
                    .process-box{
                        .process-title{
                            padding: 1.5em 0 1em;
                            font-size: 1.2em;
                            font-weight: 700;
                        }
                        .process-icon{
                            width: 80px;
                            .process-icon-title{
                                width: 80px;
                                height: 80px;
                                line-height: 80px;
                                text-align: center;
                                border-radius: 100%;
                                color: #fff;
                            }
                            .pt1{
                                background-color: #e69601;
                            }
                            .pt2{
                                background-color: #93a500;
                            }
                            .pt3{
                                background-color: #24ab9a;
                                padding-top: 20px;
                                line-height: normal;
                            }
                            .pt4{
                                background-color: #23aef5;
                            }
                            .pt5{
                                background-color: #5d98de;
                            }

                        }
                        .process-content{
                            width: 100%;
                            padding: 1em 1.5em;
                            box-shadow: 5px 4px 15px 0 rgba(0,0,0,.15);
                            min-height: 8em;
                            border-radius: .4em;
                            p{margin: 0;}
                            &:hover{
                                background-color: #18a058;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
    .price-one{
        display: flex;
        justify-content: space-between;
        background: #d3d3d3;
        padding: 16px 12px;
        .price-desc{
            font-weight: 700;
        }
    }
    
    .price-btn{
        display: inline-block;
        width: 48%;
        background: #18a058;
        color: #fff;
        padding: 10px;
        text-align: center;
    }
    .price-buy{margin-right: 10px;}
    .detail-integrity, .full-version { display: v-bind('integrityShow');}
    .detail-business, .enterprise-price { display: v-bind('businessSHow');}
    .detail-integrity,.detail-business{
        border: 1px solid #e1e1e1;
    }

    .v-enter-active, .v-leave-active {
        transition: opacity 0.5s ease;
    }

    .v-enter-from,.v-leave-to {
        opacity: 0;
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
    .n-tabs-wrapper{border: 1px solid #e1e1e1;}
    // .pc-btns{ display: v-bind('pcBtnShow');}
    // .mobile-btns{ display: v-bind('mobileBtnShow');}
</style>
<style>
    /*正文目录 */
    /* .bjfl{position: relative; width: 60%;}
    .bjfl-t01{font-size: 15px;font-weight: 700;}
	.bjfl-t03{padding-left: 20px;}
	.bjfl-t04{padding-left: 40px;}
	.bjfl-list{position: fixed;bottom: 10%;left: 47%;background-color: #fff;display: v-bind('detailDirListShow');}
	.bjfl-list>p{margin: 0;border-bottom: 1px solid #e1e1e1;height: 35px;line-height: 35px;cursor: pointer;padding: 0 10px;
		overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 1; -webkit-box-orient: vertical;}
	.bjfl-list .active{background-color: #18a058;color: #fff;}
    .bjfl-list p:nth-child(1){background-color: #e1e1e1;}
    html,body{scroll-behavior: smooth;} */
    /**企业数据样式 */
    .detail-business .n-tab-pane table{ text-align: center; border-collapse: collapse; border: 1px solid #f0f0f0;}
    .detail-business .n-tab-pane table tr:nth-child(1) td{ padding: 10px; border-bottom: 1px solid #f0f0f0; background-color: #9296cf;font-weight: 700;}
    .detail-business .n-tab-pane table tr td{border-right: 1px solid #f0f0f0; padding: 5px 0;}
    .detail-business .n-tab-pane table tr:nth-child(even){ background-color: #deebf5; }
    .detail-business .n-tab-pane img{width: 100%;}
</style>