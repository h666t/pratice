export const testLanguage = (word: string): 'zh' | 'en' | 'other' => {
    const chinesePattern = new RegExp("[\u4E00-\u9FA5]+")
    const englishPattern = new RegExp("[A-Za-z]+")
    if(chinesePattern.test(word)){
        return 'zh';
    }else if(englishPattern.test(word)){
        return 'en';
    }else{
        return 'other'
    }   
}