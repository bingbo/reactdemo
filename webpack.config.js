module.exports = {
    entry: './js/index.js',

    output: {
        path: './build',
        filename: 'index.js',
    },
    /*指定可以被 import 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 import Hello from 'Hello' 引用*/
    resolve:{
        extensions:['', '.js', '.jsx']     
    },
    module: {
        /*loaders 指定 babel-loader 编译后缀名为 .js 或者 .jsx 的文件，这样你就可以在这两种类型的文件中自由使用 JSX 和 ES6 了*/
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
}
