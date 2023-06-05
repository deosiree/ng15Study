// 自定义的类型限制
export type Template = { //export表示导出
  id: number,// id用时间戳来表示
  value:string,
  edit:boolean,// 编辑状态
  from?:string,
  to?:string
}

// 返回一个自定义的模板数据,根据参数value自动生成一个对象数据，包括其独有的id和edit
export const renderTemplateData = (value: string): Template => {
  return {
    id:Date.now(),
    value,
    edit:false,
  }
}
