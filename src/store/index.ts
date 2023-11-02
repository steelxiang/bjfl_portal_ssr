import { defineStore, createPinia } from 'pinia';

const LOCALE_KEY = 'LOCALE__';
const lsLocaleSetting = window.sessionStorage.getItem(LOCALE_KEY);

export const useLocaleStore = defineStore({
    id: 'app-locale',
    state: () => ({
        localInfo: lsLocaleSetting
    }),
    getters: {
        getLocale(): string {
            return this.localInfo?? 'zh-CN';
        }
    },
    actions: {
        setLocaleInfo(info: string){
            window.sessionStorage.setItem(LOCALE_KEY,info);
        },
        initLocale(){
            const info = this.localInfo === null?'':this.localInfo;
            this.setLocaleInfo(info);
        }
    }
})

// Need to be used outside the setup
export function useLocaleStoreWithOut() {
    return useLocaleStore(createPinia());
}