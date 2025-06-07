FROM nginx:alpine

# 기본 index.html 삭제
RUN rm -rf /usr/share/nginx/html/*

# 현재 폴더 전체 복사
COPY . /usr/share/nginx/html

EXPOSE 80
