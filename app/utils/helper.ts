export const host = '10.127.101.147'
export const baseURL = `http://${host}:1000/api`
export const socket = `http://${host}:1000`


const debug = true;

export const log =(tag: string, arg: any)=> {
console.log(tag, arg)
}

 export const slug =(name: string )=>{
  const arr = name.split(" ").map((item) => item.toLowerCase()).join("-"); 
    return arr
}