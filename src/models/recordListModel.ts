const localStorageKeyName = 'recordList'

const recordListModel = {
    fetch() {
        return JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]

    },
    save(data:RecordItem[]) {
        return window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
    },
    clone(data:RecordItem[] |RecordItem){
        return JSON.parse(JSON.stringify(data))
    }
}

export default recordListModel