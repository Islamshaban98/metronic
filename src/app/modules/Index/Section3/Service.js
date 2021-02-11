const KEYS={
    section_3_data:'section_3_data',
    dataId:'dataId'
}
export const Insert = (data) => {
     let getData = getAllData();
     data['id']=generateDataId()
    getData.push(data)
   localStorage.setItem(KEYS.section_3_data,JSON.stringify(getData))
}

export const Update = (data) => {
    let getData = getAllData();
    let recordIndex = getData.findIndex(x =>x.id === data.id)
    getData[recordIndex] = {...data}
    localStorage.setItem(KEYS.section_3_data,JSON.stringify(getData))
}

export const Delete = (id) => {
    let getData = getAllData();
   getData = getData.filter(x =>x.id !== id)
  localStorage.setItem(KEYS.section_3_data,JSON.stringify(getData))
}
export const generateDataId=()=>{
    if(localStorage.getItem(KEYS.dataId)==null)
    localStorage.setItem(KEYS.dataId,'0')
    var id = parseInt(localStorage.getItem(KEYS.dataId))
    localStorage.setItem(KEYS.dataId,(++id).toString())
    return id;
}
export const getAllData=()=>{
    if(localStorage.getItem(KEYS.section_3_data)==null)
    localStorage.setItem(KEYS.section_3_data,JSON.stringify([]))
return JSON.parse(localStorage.getItem(KEYS.section_3_data))
}



