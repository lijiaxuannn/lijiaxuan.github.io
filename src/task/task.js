import webpackConfig from '../../config/webpack.config.js'
// import {a} from '../../config/webpack.config.js'
//作业： 页面输出：
// 将./src/home/index.js中的代码打包到/docs/home/文件夹中，文件名称叫index.js
class Webpack{
    constructor(props){
        this.props=props
    }
    compile(){
        let {entry,output}=this.props
        if(typeof entry=='object'){
            let {filename,path}=output
            for (const key in entry) {
                var rodom=parseInt(Math.random()*8999999+1000000)
                // console.log(`将${entry[key]}中的代码打包到${path}/${key}文件夹中，文件夹名为${key}.${rodom}.js`)
                console.log()
            }
        }
        else{
            let {filename,path}=output
            let [dir,file]=filename.split('/')
            console.log(`将${entry}中的代码打包到${path}/${dir}文件夹中，文件夹名叫${file}`)
        }
    }
}
let webpack = new Webpack(webpackConfig);
// let webpack1 = new Webpack(a);
webpack.compile()
// webpack1.compile()