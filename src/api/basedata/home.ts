import http from "@/utils/request";
import { BasicModel } from '../model/basicModel';

export interface Carousel extends BasicModel<Carousel>{
    name?:string;    // 名称
    title?:string;   // 标题
    desc?:string;    // 描述
}

export interface DictData{
  dictCode?: string; // 字典编码
  dictLabelRaw?: string; // 字典标签
  dictValue?: string; // 字典键值
  dictIcon?: string; // 字典图标
  dictType?: string; // 字典类型
  isSys?: string; // 系统内置（1是 0否）
  description?: string; // 字典描述
  cssStyle?: string; // css样式（如：color:red)
  cssClass?: string; // css类名（如：red）
  dictLabel?:string; 
}

export interface Config {
    configValue?:string;    // 值
    configKey?:string;      // 健
    configName?:string;     // 名称
    dictIcon?:string;   // 图标
}

// 列表
export const carouselListData = (params: Carousel | any) =>{
    return http.get<Carousel[]>('/basedata/carousel/listData', params);
}

// 研究报告字典
export const dictListData = (params: DictData | any) => {
    return http.post<DictData[]>('/basedata/dict/listData',params);
}

// 研究报告和咨询
export const reportAndMarketListData = (params: any) => {
    return http.get<Map<string,Object>>('/basedata/home/mapData',params);
}

// 配置参数
export const configForm = (params: Config) => {
    return http.get<Config>('/basedata/config/form',params);
}

export const configList = (params?: any) => {
    return http.get<Config[]>('/basedata/config/findListByKeys',params);
}