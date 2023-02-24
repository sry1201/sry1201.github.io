git init
::  提交所有被删除、被替换、被修改和新增的文件到数据暂存区
git add -A

if [ $# == 1 ];                        #判断参数个数
then                                #若参数正确执行代码
    message=$1
    git commit -m "${message}"
else                                #参数错误则输出Usage
    git commit -m 'deploy'
fi
 
:: 如果你想要部署到 https://USERNAME.github.io
git push -f https://github.com/sry1201/sry1201.github.io.git vuepress-blog
 
:: 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
:: git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages