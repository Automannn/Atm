const AtmConfig =()=>{
  return {
    context:'atm',
    basePath:'http://localhost:8081/atm',
    devServer:'http://localhost:8080/atm',
    projects:[
      'projects/one',
      'projects/two'
    ],
    //项目首页配置
    indexPageConfig:{
      // menuType 菜单样式（leftTop, left, top）
      menuType:'leftTop',
      // 左侧菜单显示方式(sliding：侧滑, dropdown：手风琴)
      menuLeftStyle: 'dropdown',
      // 菜单是手风琴时默认是否展开2级菜单,默认不展开
      dropdownOpenMenu: false,
      // 顶部头的高度
      headerHeight: '64px',
      // 左侧菜单的宽度
      leftWidth: '230px',
      // logo框的宽度（菜单为top时有效，其余logo框宽度等于左侧菜单宽度）
      logoWidth: '230px',
      // 首页左侧菜单收起的时候的宽度（建议不小于30px）
      leftCloseWidth: '50px',
      // 顶部菜单下方条状样式（breadcrumb：面包屑, tab：显示所有tab）
      barType: 'tab',
      // logo 文字
      logoTitle: 'automannn开发平台',
      // logo 图片名称，如logo.png （注意：请将图片放在 src/assets 路径下）
      logoImage: 'logo.png',
      // 返回参数配置
      resDataConfig: {
        serviceSuccess: 'serviceSuccess', // 服务是否成功回调
        serviceSuccessRule: true, // 服务调用成功规则，设置serviceSuccess为成功时的标志，默认为boolean类型true，也可以设置数字或者字符串类型
        errors: 'errors', // 错误信息 包含错误消息
        message: 'message', // 简单错误信息,如果也有error,那么也会执行error的处理
        redirectUrl: 'redirectUrl'
      },
      defaultTheme: 'ybblue'
    }
  }
}

module.exports = AtmConfig()
