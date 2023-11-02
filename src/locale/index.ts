import type { I18n, I18nOptions } from 'vue-i18n';
import { createI18n } from 'vue-i18n';
import { App } from 'vue';
import { useLocaleStoreWithOut } from '@/store';
import { enLocale } from './lang/en-US';
import { zhLocale } from './lang/zh-CN';

// setup i18n instance with glob
// let i18n: ReturnType<typeof createI18n>;
export async function setupI18n(app: App) {
    const options = await createI18nOptions();
    const i18n = createI18n(options) as I18n;
    app.use(i18n);
}

async function createI18nOptions(): Promise<I18nOptions>{
    //const locale = useLocaleStoreWithOut().getLocale;
    let locale;
    const pathName = window.location.pathname;
    if(pathName.substring(0,3) === '/en'){
        locale = 'en-US'
    }else{
        locale = 'zh-CN';
    }
    useLocaleStoreWithOut().setLocaleInfo(locale);
    //const locale = window.sessionStorage.getItem('LOCALE__')?? '';
    // const defaultLocal = await import(`./${locale}.ts`);
    // const message = defaultLocal.default?.message ?? {};
    return {
        legacy: false,
        locale,
        fallbackLocale: locale,
        messages: {
            'en-US':{
                ...enLocale,
            },
            'zh-CN':{
                ...zhLocale
            }
        },
        availableLocales: ['zh_CN','en_US'],
        sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
        silentTranslationWarn: true, // true - warning off
        missingWarn: false,
        silentFallbackWarn: true,
        globalInjection: true,
    }
}