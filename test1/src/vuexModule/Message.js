const MessageModule = {
  state:{
    //已登录的城市标识
    flag:localStorage.getItem("flag")||"",
    //用户名
    message:localStorage.getItem("name")||"",
    //新用户名
    newName:localStorage.getItem("newName"),
  },
  mutations:{
    getFlag(state,msg){
      state.flag = msg;
      localStorage.setItem("flag",msg)
    },
    getMsg(state,msg){
      state.message = msg;
      localStorage.setItem("name",msg);
    },
    getNewName(state,msg){
      state.newName = msg;
      localStorage.setItem("newName",msg)
    }
  }
}
export default MessageModule;
