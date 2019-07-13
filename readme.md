## 实现一个 Dialog 类，Dialog可以创建 dialog 对话框，对话框支持可拖拽。

[dialog-demo](https://github.com/SimpleCodeCX/dialog-demo)

## 一、运行：
 ```javascript
   cd dialog
   npm install
   npm run server
 ```
## 二、编译：
 ```javascript
   npm run build
 ```
## 三、部署：
本项目基于 docker + nginx 部署

nginx的配置如下: [nginx 配置](https://github.com/SimpleCodeCX/dialog-demo/blob/master/dialog/nginx/default.conf)
> 对 css、js资源等进行 gzip 压缩
>
> 设置 cache-control 进行强长缓存


Dockerfile 配置如下: [Dockerfile 配置](https://github.com/SimpleCodeCX/dialog-demo/blob/master/dialog/Dockerfile)

> 主要实现拉取 nginx 镜像，并且将本项目的 nginx config 拷贝进去

> 部署要求：服务器需要先安装 docker 环境

部署步骤：
 ```javascript
   // 1.编译生成 dist 包
   npm run build 
   // 2.将 dist、nginx 目录以及 Dockerfile、docker-release.sh 文件拷贝至服务器（如centos）
   // 3.编译docker
   ./docker-release.sh
 ```

当修改项目代码后，需要更新部署：
 ```javascript
   // 1.编译生成 dist 包
   npm run build 
   // 2.将 dist 目录至服务器（如centos）
   // 3.重新编译 docker
   sudo docker rm dialog-demo
   sudo docker rmi dialog-demo
   ./docker-release.sh
 ```

