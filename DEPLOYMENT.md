# 项目部署文档

## 概述

本项目使用 [Surge](https://surge.sh) 进行静态网站部署，域名使用 `ssc.tianw.xyz`。

## 前置条件

1. **安装 Surge**

```bash
npm install -g surge
```

1. **登录 Surge**

```bash
surge login
```

当前登录账号：`tianyong0618@sohu.com`

## 部署步骤

### 1. 配置 DNS（首次部署需操作）

在域名服务商（tianw\.xyz）的 DNS 管理中添加 CNAME 记录：

| 主机名 | 类型    | 指向       |
| --- | ----- | -------- |
| ssc | CNAME | surge.sh |

> DNS 生效时间通常为几分钟到几小时，可用以下命令验证：
>
> ```bash
> dig @8.8.8.8 ssc.tianw.xyz +short
> ```

### 2. 准备部署文件

由于 Surge 对中文路径支持有问题，需将文件复制到简单路径下：

```bash
rm -rf /tmp/ssc
cp -r "/Users/tianyong/Documents/works/workspace/hp/汪总/设计信息化可视化页面/project-dashboard" /tmp/ssc
```

### 3. 创建 CNAME 文件

```bash
echo "ssc.tianw.xyz" > /tmp/ssc/CNAME
```

### 4. 执行部署

```bash
surge /tmp/ssc ssc.tianw.xyz
```

成功输出示例：

```
Success! - Published to ssc.tianw.xyz
```

## 验证部署

**HTTP 验证：**

```bash
curl -s -o /dev/null -w "%{http_code}" http://ssc.tianw.xyz
```

**HTTPS 验证（证书首次生成需几分钟）：**

```bash
curl -sk -o /dev/null -w "%{http_code}" https://ssc.tianw.xyz
```

**直接通过 IP 验证（绕过本地 DNS 缓存）：**

```bash
curl -s -o /dev/null -w "%{http_code}" --resolve ssc.tianw.xyz:443:138.197.235.123 https://ssc.tianw.xyz
```

## 访问地址

- **生产地址：<https://ssc.tianw.xyz>**
- 备用地址（surge.sh 子域名）：<http://ssc-rsz.surge.sh>

## 页面结构

| 页面    | 文件                            | 说明      |
| ----- | ----------------------------- | ------- |


## 常见问题

### 部署失败 "Deployment did not succeed"

- 检查 DNS 是否已正确配置 CNAME 指向 `surge.sh`
- 确保没有中文路径（使用 `/tmp` 作为临时部署目录）
- 确认 Surge 已登录：`surge whoami`

### HTTPS 证书错误

Surge 首次部署自定义域名后，SSL 证书需要几分钟生成。可先用 HTTP 访问，或等待后重试 HTTPS。

### 本地 DNS 缓存导致无法访问

可尝试刷新 DNS 缓存，或直接使用公共 DNS（8.8.8.8）验证。
