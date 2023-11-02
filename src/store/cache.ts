import { dictListData } from "@/api/basedata/home";
import { langOnBrowser } from "@/utils";

const REPORTS_CATEGORY = "REPORTS_CATEGORY";
const NEWS_CATEGORY = "NEWS_CATEGORY";
const REPORTS_CATEGORY_EN = "REPORTS_CATEGORY_EN";
const NEWS_CATEGORY_EN = "NEWS_CATEGORY_EN";
//const lang = useLocaleStoreWithOut().getLocale;
const lang = langOnBrowser();

// 报告分类
export const getLocalSessionReport = async () =>{
    // const session = window.sessionStorage;
    if('zh-CN' === lang){
        // const cacheDict = session.getItem(REPORTS_CATEGORY);
        // if(!cacheDict){
            const ret = await dictListData({'dictType':'reports_category'});
            // session.setItem(REPORTS_CATEGORY,JSON.stringify(ret.data));
            return ret.data;
        // }else{
        //     return JSON.parse(cacheDict);
        // }
    }else{
        // const cacheDict = session.getItem(REPORTS_CATEGORY_EN);
        // if(!cacheDict){
            const ret = await dictListData({'dictType':'reports_category_en'});
            // session.setItem(REPORTS_CATEGORY_EN,JSON.stringify(ret.data));
            return ret.data;
        // }else{
            // return JSON.parse(cacheDict);
        // }
    }
}

// 市场资讯
export const getLocalSessionNews = async () => {
    const session = window.sessionStorage;
    if('zh-CN' == lang){
        // const cacheDict = session.getItem(NEWS_CATEGORY);
        // if(!cacheDict){
            const ret = await dictListData({'dictType':'market_type'});
            // session.setItem(NEWS_CATEGORY,JSON.stringify(ret.data));
            return ret.data;
        // }else{
        //     return JSON.parse(cacheDict);
        // }
    }else{
        // const cacheDict = session.getItem(NEWS_CATEGORY_EN);
        // if(!cacheDict){
            const ret = await dictListData({'dictType':'market_type_en'});
            // session.setItem(NEWS_CATEGORY_EN,JSON.stringify(ret.data));
            return ret.data;
        // }else{
        //     return JSON.parse(cacheDict);
        // }
    }
}