# 使用官方Node.js作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /usr/src/app

# 将package.json和yarn.lock复制到工作目录
COPY package.json yarn.lock ./

# 安装项目依赖
RUN yarn install

# 将项目源代码复制到工作目录
COPY . .

# 暴露端口，与你的应用程序绑定的端口保持一致
EXPOSE 80

# 运行你的应用程序
CMD [ "node", "server.js" ]
