import path from 'path'
import fs from 'fs'

const BLOG_FOLDER=path.join(process.cwd(),'blog')

export async function  getPostList() {
    // const fileNameList=fs.readFileSync(BLOG_FOLDER)
    // console.log("fileNameList",fileNameList)
    return []
}