const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm88j08/",
            name: "ssm88j08",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm88j08/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "厨房管理系统"
        } 
    }
}
export default base
