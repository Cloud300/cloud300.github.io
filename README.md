# 项目注意事项及出现的问题🧐

- 主题下载完成后，我要部署到github，在清除缓存时出现错误：cheerio软件包未安装。
- 解决方法：npm install cheerio
- 其实这个问题在狗哥上找了挺长时间，不过没有准确答案，自己尝试着安装，虽然也是有warn，但还好不是error😁

- 接着又遇到一个问题：在最后一步"hexo d"中报错：ERROR Deployer not found: git
  解决方法：要在站点目录下执行以上安装hexo-deployer-git插件的命令，
- 所谓站点目录就是执行hexo init的目录，如果已经在其他目录安装了hexo-deployer-git插件的小伙伴，
  可以使用以下命令卸载该插件：
  npm uninstall hexo-deployer-git --save
- 卸载完成后重新在站点目录下安装hexo-deployer-git插件就行啦。
  npm install hexo-deployer-git --save
- 完成hexo的初始化工作,初始化完成后安装两个插件
  npm install hexo-deployer-git --save 
  npm install hexo-server
  然后就可以在本机上查看hexo为你创建好的模版博客了
  

## 本地安装预览步骤🧐

1. 安装node.js，安装Git。安装完成后到cmd里测试一下
2. 关联Github：桌面打开Git Bash，设置用户名跟密码
   git config --global user.name "你的GitHub用户名"
   git config --global user.email "你的GitHub注册邮箱"

3. 然后生成ssh密钥文件：
   ssh-keygen -t rsa -C "你的GitHub注册邮箱"
   直接三个回车，默认不需要密码

4. 用户目录下找到.ssh文件下的 id_rsa.pub 内容全部复制

5. 打开设置密钥页面，新建一个密钥。然后粘贴保存

   https://github.com/settings/keys

6. 回到Git Bash检测公钥是否设置成功：
   ssh git@github.com

7. 以上是安装Hexo的环境，已经搭建好了

## 安装Hexo（个人博客网站框架）🦏


1. 在某个位置新建一个自己的文件夹（自己命名），进入文件夹后，按住Shift键打开命令窗口
   使用npm官方的镜像，以免报错
   npm config set registry https://registry.npmjs.org

2. 设置完镜像后开始安装框架：
   npm install -g hexo-cli 

3. 安装完成后初始化：（时间会有点长，稍等）
   hexo init blog       选择好在哪个文件夹下

4. 完成后，记得cd到我们新创建的文件夹里，因为这个步骤出问题，耽误了很长时间

5. 测试
   hexo new 001 ——————— 新建为001的文章
   hexo g  ———————————— 生成
   hexo s  ———————————— 启动服务预览
   hexo clean ————————— 清除缓存，网页出现问题时使用

6. 更换主题（注意所在文件夹）
   git clone https://github.com/ppoffice/hexo-theme-icarus.git themes/icarus --depth 1

7. 然后打开博客根目录下的站点配置文件：将theme的默认值改为所使用的主题的名字。。

8. 其他配置先不要乱动，容易出事🤨

   hexo g
   hexo d
   查看效果













