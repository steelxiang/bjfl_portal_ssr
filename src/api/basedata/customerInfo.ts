import { BasicModel } from "../model/basicModel";
import http from "@/utils/request";

export interface CustomerInfo extends BasicModel<CustomerInfo>{
    name?:string;    // 姓名
    contact?:string;    // 联系方式
    email?:string;    // 邮箱
    companyName?:string;    // 名称
    demand?:string;    // 需求
    reportId?:string;    // 报告id
    reportPrice?:number;    // 报告单价    
}

export const customerInfoSave = (params: CustomerInfo | any) => {
    return http.post<CustomerInfo>("/basedata/customerInfo/save",params);
}