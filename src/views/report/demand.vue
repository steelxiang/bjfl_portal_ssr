<template>
    <div class="customer-info">
        <n-form require-mark-placement="left" label-width="auto" ref="formRef" :model="formData" :rules="rules">
            <n-form-item :label="t('report.demand.companyName')" label-placement="left" path="companyName">
                <n-input :placeholder="t('report.demand.companyNameTip')" v-model:value="formData.companyName"/>
            </n-form-item>
            <n-form-item :label="t('report.demand.address')" label-placement="left" path="addr">
                <n-input :placeholder="t('report.demand.addressTip')" v-model:value="formData.addr"/>
            </n-form-item>
            <n-form-item :label="t('report.demand.email')" label-placement="left" path="email">
                <n-input :placeholder="t('report.demand.emailTip')" v-model:value="formData.email"/>
            </n-form-item>
            <n-form-item :label="t('report.demand.phone')" label-placement="left" path="contact">
                <n-input :placeholder="t('report.demand.phoneTip')" v-model:value="formData.contact"/>
            </n-form-item>
            <n-form-item :label="t('report.demand.person')" label-placement="left" path="name">
                <n-input :placeholder="t('report.demand.personTip')" v-model:value="formData.name"/>
            </n-form-item>
            <n-form-item :label="t('report.demand.desc')" label-placement="left" path="demand">
                <n-input type="textarea" :placeholder="t('report.demand.descTip')" v-model:value="formData.demand"/>
            </n-form-item>
            <div class="form-item-btn">
                <n-button @click="handleClose">{{t('report.demand.cancel')}}</n-button>
                <n-button type="primary" @click="handleSubmit">{{t('report.demand.submit')}}</n-button>
            </div>
        </n-form>
    </div>
</template>

<script lang="ts" setup>
    import { customerInfoSave } from '@/api/basedata/customerInfo';
    import { useLocaleStoreWithOut } from '@/store';
    import { langOnBrowser } from '@/utils';
    import { isPhoneNumber, isEmail } from '@/utils/validate';
    import { NForm, NFormItem, NInput, NButton, FormRules, FormItemRule, createDiscreteApi } from 'naive-ui';
    import { ref, reactive } from 'vue';
    import { useI18n } from 'vue-i18n';

    const { t } = useI18n();
    const emit = defineEmits(['closeDialog'])
    const prop = defineProps({
        rowId: {
            type: String,
            default: '',
        },
        rowPrice: {
            type: String,
            default: null
        },
        rowType: {
            type: String,
            default: null
        }
    })

    const message = createDiscreteApi(['message'])
    const formRef = ref();
    const formData = reactive({
        name:'',    // 姓名
        contact:'',    // 联系方式
        email:'',    // 邮箱
        companyName:'',    // 名称
        demand:'',    // 需求
        reportId:'',    // 报告id
        reportPrice: '',    // 报告单价 
        addr:'',    // 联系地址
        lang: langOnBrowser(),    // 语言
        type: '',   //类型,1.样本，2.定制
    });
    const rules: FormRules = {
        companyName: [{
            required: true,
            trigger: ['input','blur'],
            validator(rule: FormItemRule, value: string){
                if(!value){
                    return new Error(t('report.demand.companyNameTip'));
                }
                return true;
            }
        }],
        addr: [{
            required: true,
            trigger: ['input','blur'],
            validator(rule: FormItemRule, value: string){
                if(!value){
                    return new Error(t('report.demand.addressTip'));
                }
                return true;
            }
        }],
        email: [{
            required: true,
            trigger: ['blur'],
            validator(rule: FormItemRule, value: string){
                if(!value){
                    return new Error(t('report.demand.emailTip'));
                }else if(!isEmail(value)){
                    return new Error(t('report.demand.emailFormat'));
                }
                return true;
            }
        }],
        contact: [{
            required: true,
            trigger: ['blur'],
            validator(rule: FormItemRule, value: string){
                if(!value){
                    return new Error(t('report.demand.phoneTip'));
                }else if(!isPhoneNumber(value)){
                    return new Error(t('report.demand.phoneFormat'))
                }
                return true;
            }
        }],
        name: [{
            required: true,
            trigger: ['blur','input'],
            validator(rule: FormItemRule, value: string){
                if(!value){
                    return new Error(t('report.demand.personTip'));
                }
                return true;
            }
        }],
        demand: [{
            required: true,
            trigger: ['input','blur'],
            validator(rule: FormItemRule, value: string){
                if(!value){
                    return new Error(t('report.demand.descTip'));
                }
                return true;
            }
        }],
    }

    // const rules = {
    //     companyName: {
    //         required: true,
    //         message: '请输入公司名称',
    //         trigger: ['input','blur']
    //     }
    // }
    
    // 提交
    function handleSubmit(){
        formRef.value?.validate(async (errors: any) => {
            if(!errors){
                formData.reportId = prop.rowId;
                formData.reportPrice = prop.rowPrice;
                formData.lang = langOnBrowser();
                formData.type = prop.rowType;
                await customerInfoSave(formData);
                emit('closeDialog');
                message.message.success(t('report.demand.success'))
            }
        })
        
    }

    // 关闭
    function handleClose(){
        emit('closeDialog');
    }

</script>

<style lang="scss" scoped>
    .customer-info{
        padding-top: 20px;
    }
    .form-item-btn{
        display: flex;
        justify-content: center;
        button:nth-child(1){
            margin-right: 60px;
        }
    }
</style>