import { BasicModel } from "../model/basicModel";
import http from "@/utils/request";

export interface ResearchReport extends BasicModel<ResearchReport>{
    title?:string;   // 标题
    context?:string;    // 内容
    outline?:string;    // 概要
    marketType?:string;   // 所属分类
    reportCode?:string;    // 报告代码
    pageNum?:number;    // 页数
    chart?:number;      // 图表数

    directory?:string;   // 目录
    price?:number;    // 单用户版单价
    reportScope?:string;    // 研究范围
    enterprisePrice?:number;   // 企业版单价
    multiPrice?:number;    // 多用户版单价
    contextHtml?:string;    // 企业数据

    directoryHtml?:string;   // 目录
    reportScopeHtml?:string;    // 研究范围
    publishDate?:string;    // 发表日期

    queryPrice?:number;	// 单用户版
	queryPublishDate?:number;	// 发布日期
	queryKeyword?:string;	// 关键字，（模糊匹配）

    // 类型
    marketTypeName?:string;
    marketCount?:number;
    publishDateValue?:number;

    // 文件
    filePath?:string;   // 路径
    fileName?:string;   // 名称

    priceStr?:number;   //价格
    priceEnd?:number;
    publishDateStr?:string; //发布日期
    publishDateEnd?:string;

    chartsHtml?:string; // 图表数据
    reportRegion?:string;   //报告区域
    webTitle?:string;   //网站标题
}

// 列表
export const researchReportListData = (params: ResearchReport | any) =>{
    return http.post<ResearchReport[]>('/report/researchReport/pageList', params);
}

// 分类
export const marketTypeListData = (params: any) => {
    return http.post<ResearchReport[]>('report/researchReport/marketTypeList',params);
}

// 表单
export const researchReportForm = (params: ResearchReport | any) =>{
    return http.get<ResearchReport>('/report/researchReport/form', params);
}

// 热门报告
export const hotResearchList = (params: ResearchReport | any) =>{
    return http.get<ResearchReport>('/report/researchReport/hotReports', params);
}