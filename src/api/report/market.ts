
import { BasicModel, Page } from "../model/basicModel";
import http from "@/utils/request";

export interface MarketInfo extends BasicModel<MarketInfo>{
    title?:string;   // 标题
	publishDate?:string;		// 发布日期
	context?:string;		// 内容
	outline?:string;		// 概要
	marketType?:string;		// 所属分类
	reportCode?:string;		// 报告代码
	pageNum?:number;		// 页数
	directory?:string;		// 目录
	marketCategory?:string;		// 分类

    keyword?:string;    //关键字
    filePath?:string;   //路径
    fileName?:string;   //文件名
	webTitle?:string;	//网站标题
}

export const marketInfoPageList = (params: MarketInfo | any) => {
    return http.post<Page<MarketInfo>>('/report/marketInfo/pageList',params);
}

export const marketInfoDetailList = (params: MarketInfo | any) => {
	return http.get<MarketInfo[]>('/report/marketInfo/detailList',params);
}

export const marketInfoTopSixList = (params:string | any) => {
	return http.get<MarketInfo[]>('/report/marketInfo/marketInfoTopSixList',params);
}