# 漫游宇宙 / ORBIT

- 原项目：<https://github.com/ryh842487118-bot/orbit>
- 原项目演示：<https://dididaiqu.com/orbit/>
- 引入版本：1.9.0
- 固定提交：`fb2316a8e679244b594e4679d9448937964967ad`
- 引入日期：2026-10-14
- 本地入口：`/orbit/`

本目录是独立的第三方静态应用，不使用博客的页面模板、主题样式、评论、访问统计、AI 或 PJAX。原始引擎与十五张纹理仍保留在上游的单文件源码中；Hexo 生成时自动拆分资源，不依赖博客的 Three.js 版本，也不需要额外后端。

## 本地调整

仅通过 `tools/localize-orbit.cjs` 移除上游作者的匿名访问上报，以及上游广告账户的 meta 声明，并在 HTML 中显著记录修改。宇宙渲染、纹理、交互控件、素材署名及原项目入口均保留原样。

“感知地球”的天气、台风等数据仍由原应用按需访问公开数据接口，接口的网络可用性与缓存由原应用处理。普通宇宙漫游不需要请求这些接口；GDACS 等接口没有改动。博客不会预加载宇宙页面或贴图。

## 静态资源生成与 CDN（2026-10-16）

- `source/orbit/index.html` 是保留的单文件原始输入，不要手动修改其中的图片字符串。执行 `hexo generate` 时，`scripts/orbit-assets.js` 调用 `lib/orbit-assets.cjs` 自动提取资源。
- 生成入口为 `public/orbit/index.html`。独立脚本、样式及 15 张原字节贴图输出到 `public/orbit/assets/`，资源清单为 `public/orbit/asset-manifest.json`。运行 `hexo clean` 后仍可从源码完整重建。
- 图片、JS、CSS 和资源加载器的文件名包含内容指纹；资源未改则文件名不变，切换主题 `statics` 地址也不会改变这些资源的字节或文件名。此页面使用独立清单，不注入 Shoka 的资源表与运行时。
- 文本资源在计算指纹和完整性校验值之前统一使用 LF 换行，避免 Windows 的 Git 部署把 CRLF 转成 LF 后出现校验失败；图片始终保留原字节。无需关闭完整性校验，也不用修改全局 Git 设置。修复前已发布的入口仍引用旧指纹，需要重新生成、上传 CDN 资源并发布新入口后才能生效。
- 生成时附带独立的行星 SVG 站点图标，并明确引用本站带指纹的图标文件，避免浏览器默认请求不存在的根目录 `favicon.ico`。不依赖博客主题的图标或脚本。
- 资源跟随 `themes/shoka/_config.yml` 的 `statics`：`/` 使用本站，`//cdn.example.com/` 或 HTTPS 地址优先使用 CDN；生成的本地文件总是保留。把同一批 `public` 完整上传到 CDN，并保留 `orbit/assets/` 层级，再发布入口页面。
- CDN 加载失败或等待超时后回退到本站同名文件，并在当前页面会话中优先使用本站，避免每张贴图反复等待失效的 CDN。图片最多同时传输四张，不使用跨域 Cookie；JS/CSS 使用完整性校验，贴图也校验字节数并在支持的环境核对哈希。
- 普通贴图先生成可用场景，8K 地球日夜贴图沿用上游的后台加载方式；高清图失败不阻止普通宇宙显示。保留手机降采样、GPU 上限与画面表现。
- CDN 的公开静态资源需允许匿名跨域读取，例如 `Access-Control-Allow-Origin: *`，否则 WebGL 贴图和脚本完整性校验会触发回退。带指纹资源可设置 `Cache-Control: public, max-age=31536000, immutable`；入口 HTML 和清单应及时更新，不要设置不可变长缓存。优先上传文件后发布引用它们的 HTML，保留旧指纹文件可兼容尚未更新的入口。
- 对 `orbit/assets/` 关闭会改变文件内容的 CDN 图片转码、图片压缩与 JS/CSS 自动改写，否则完整性校验会拒绝改变后的资源并回退本站。Gzip/Brotli 传输压缩不改变解压后的文件，可以正常启用。
- 这不等于给入口 HTML 本身增加国内加速。若 `blog` 域名直连连接不上，仍需对入口做国内加速或托管；仅迁移其子资源不能修复域名连接失败。

## 许可证与署名

- 原项目原创代码：Apache-2.0，许可证副本见 `LICENSE`，来源声明见 `NOTICE`。
- Three.js：MIT，副本见 `assets/THREE-LICENSE.txt`。
- 纹理：Solar System Scope，CC BY 4.0，来源与完整署名见 `assets/CREDITS.md`；图像字节未修改。
- 数据源说明：见 `docs/data-sources.md`。数据与三维比例、艺术纹理均按原应用的说明使用。

升级时先下载对应固定提交的构建及许可文件，再运行本地化工具和隔离测试，不要把独立页面拼进博客的模板或 JavaScript 包。
