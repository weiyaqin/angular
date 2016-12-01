//拷贝
var gulp = require("gulp");
//合并插件
var concat = require("gulp-concat");
//压缩
var uglify = require("gulp-uglify");
//启动服务
var webserver = require("gulp-webserver");
//sass编译
var sass = require("gulp-sass");
//minify css压缩
var minify = require("gulp-minify-css");
//gulp本没有require能力,通过gulp-webpack来添加能力
var webpack = require("gulp-webpack");

var named = require("vinyl-named")

//md5加密
var rev =require("gulp-rev")
//自动替换文件名 版本控制
var collector = require("gulp-rev-collector")

//node
var url = require("url")

//fs
var fs = require("fs")

//拷贝构建任务
gulp.task("copy-index",function(){
	gulp.src("./index.html")
		.pipe(gulp.dest("./app"))
})

//合并构建任务
gulp.task("concat",function(){
	gulp.src(["./app/src/scripts/script1.js","./app/src/scripts/script2.js"])
		.pipe(concat("script.js"))
		.pipe(gulp.dest("./app"))
})

//压缩构建任务
gulp.task("uglify",function(){
	gulp.src("./jquery-2.1.1.js")
		.pipe(uglify())
		.pipe(gulp.dest("./app/src/scripts"))
})

//启动服务构建任务
gulp.task("webserver",function(){
	gulp.src("./")
		.pipe(webserver({
			port:3000,
			livereload:true, //页面保存 浏览器自动更新
			directoryListing:{ //显示目录结构
				enable:true,   //显示目录
				path:"./app",     //显示具体路径下的目录
			},
			//mork数据
			middleware:function(req,res,next){
                var urlObj = url.parse(req.url,true);
                switch(urlObj.pathname){
                	case '/api/getLivelist.php':
                	res.setHeader("Content-type","application/json");
                	fs.readFile('./mock/livelist.json','utf-8',function(err,data){
                        res.end(data);
                	});
                	return;
                	case '/api/getLivelistmore.php':
                	res.setHeader("Content-type","application/json");
                	fs.readFile('./mock/livelist-more.json','utf-8',function(err,data){
                        res.end(data);
                	});
                    return;
                }
                next();
			}
		}))
})

//sass编译构建任务
var sassFiles = ["./app/src/styles/**/*.scss"];
var cssFiles = ["./app/src/styles/*.css"];
var jsFiles = ["./app/src/scripts/app.js"];
gulp.task("sass",function(){	
	gulp.src(sassFiles)
		.pipe(sass())
		.pipe(minify())
		.pipe(gulp.dest("./app/prd/styles"))
})

//css编译构建任务


gulp.task("css",function(){
	gulp.src(cssFiles)
		.pipe(minify())
		.pipe(gulp.dest("./app/prd/styles"))
})

//实现js模块化
gulp.task("packjs",function(){
	gulp.src(jsFiles)
		.pipe(named())
		.pipe(webpack({
			output:{
				filename:"[name].js"
			},
			modules:{ //匹配所有已.js结尾的文件
				loaders:[
                  {
                  	test:/\.js$/,
                  	loader:'imports?define=>false'
                  }
        		]
        	
			}
		}))
		.pipe(uglify().on("error",function(e){
			console.log("\x07",e.lineNumber,e.message)
			return this.end()
		}))
		.pipe(gulp.dest("./app/prd/scripts"))
})

//版本控制
var cssappFiles = ["./app/prd/styles/app.css"];
var jsappFiles = ["./app/prd/scripts/app.js"];
gulp.task("rev",function(){
	gulp.src(cssappFiles)
		.pipe(rev())
		.pipe(gulp.dest("./app/prd/styles"))
		.pipe(rev.manifest())
		.pipe(gulp.dest("./app/ver/styles"))
	gulp.src(jsappFiles)
		.pipe(rev())
		.pipe(gulp.dest("./app/prd/scripts"))
		.pipe(rev.manifest())
		.pipe(gulp.dest("./app/ver/scripts"))
})

gulp.task("html",function(){
	gulp.src(["./app/ver/**/*.json","./app/*.html"])
		.pipe(collector())
		.pipe(gulp.dest("./app"))
})

 gulp.task("min",["rev","html"])

//构建检测任务
gulp.task("watch",function(){
	gulp.watch("./index.html",["copy-index"]);
	// gulp.watch(["./app/src/scripts/script1.js","./app/src/scripts/script2.js"],["concat"]);
	gulp.watch(sassFiles,["sass"]);
	gulp.watch(cssFiles,["css"]);
	gulp.watch("./app/src/scripts/**/*.js",['packjs']);
})

//设置默认操作

// gulp.task("default",["copy-index","concat","uglify","webserver"]);
gulp.task("default",["watch","webserver"]);