# =========================================================
# 数字名片（微官网）· Docker 镜像
# 基础镜像：nginx:alpine（约 23MB，适合纯静态站点）
# 构建：docker build -t gjian-card .
# 运行：docker run -d -p 8080:80 --name gjian-card gjian-card
# =========================================================

FROM nginx:1.27-alpine

# 时区（可选，日志时间更直观）
RUN apk add --no-cache tzdata \
    && cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone

# 自定义 Nginx 配置（gzip 压缩 / 缓存策略 / UTF-8 中文文件名支持）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 站点文件（名片墙 + 名片页 + 数据工具 + 二维码库 + 图片资源）
COPY index.html list.html card.html make-cards.html company.js cards.js _qrcode.min.js /usr/share/nginx/html/
COPY 广监云.png /usr/share/nginx/html/
COPY photos/ /usr/share/nginx/html/photos/
COPY s/ /usr/share/nginx/html/s/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
