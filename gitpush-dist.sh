#!/bin/sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
pnpm run docs:build
 
# 进入生成的文件夹
cd docs/.vuepress/dist
 
# 如果是发布到自定义域名
# echo 'www.sry1201.cn' > CNAME

git init
#   提交所有被删除、被替换、被修改和新增的文件到数据暂存区
git add -A

if [ $# == 1 ];                        #判断参数个数
then                                #若参数正确执行代码
    message=$1
    git commit -m "${message}"
else                                #参数错误则输出Usage
    git commit -m 'deploy'
fi
 
# 如果你想要部署到 https://USERNAME.github.io, 由于执行初始化后dist目录本地的分支是master，远程的分支是main，git branch -m master main修改分支名，或者如下操作才能正常提交
git push -f https://github.com/sry1201/sry1201.github.io.git master:main

# 退回原有目录，需要之前执行过cd，否则报错
cd -