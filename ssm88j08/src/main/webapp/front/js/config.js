
var projectName = '厨房管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '厨房信息',
	url: './pages/chufangxinxi/list.html'
}, 

{
	name: '通知公告',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm88j08/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


chatFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"厨房信息","menuJump":"列表","tableName":"chufangxinxi"}],"menu":"厨房信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"厨房设备","menuJump":"列表","tableName":"chufangshebei"}],"menu":"厨房设备管理"},{"child":[{"buttons":["查看","删除","审核","订单信息"],"menu":"厨房预订","menuJump":"列表","tableName":"chufangyuding"}],"menu":"厨房预订管理"},{"child":[{"buttons":["查看","删除"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"客户信息","menuJump":"列表","tableName":"kehuxinxi"}],"menu":"客户信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"维修记录","menuJump":"列表","tableName":"weixiujilu"}],"menu":"维修记录管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"分析客户","menuJump":"列表","tableName":"fenxikehu"}],"menu":"分析客户管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"厨房分析","menuJump":"列表","tableName":"chufangfenxi"}],"menu":"厨房分析管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"buttons":["新增","查看","修改","删除"],"menu":"通知公告","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"在线交流","tableName":"chat"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","厨房预订"],"menu":"厨房信息列表","menuJump":"列表","tableName":"chufangxinxi"}],"menu":"厨房信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","删除","支付"],"menu":"厨房预订","menuJump":"列表","tableName":"chufangyuding"}],"menu":"厨房预订管理"},{"child":[{"buttons":["查看","审核","支付","用户评价"],"menu":"订单信息","menuJump":"列表","tableName":"dingdanxinxi"}],"menu":"订单信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"}],"frontMenu":[{"child":[{"buttons":["查看","厨房预订"],"menu":"厨房信息列表","menuJump":"列表","tableName":"chufangxinxi"}],"menu":"厨房信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
