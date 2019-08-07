const MessageModule = {
  state:{
    //已登录的城市标识
    flag:localStorage.getItem("flag")||"",
    //用户名
    message:localStorage.getItem("name")||"",
    //新增地址的所有信息
    addaddress:localStorage.getItem("address")||"",
    //编辑删除地址时的地址信息的更新
    newaddress1:JSON.parse(localStorage.getItem("newaddress")),
  },
  mutations:{
    clearUser(state){
      //清除登录
      state.flag = null;
      state.message = null;

      localStorage.removeItem("flag");
      localStorage.removeItem("name");

    },
    getFlag(state,msg){
      state.flag = msg;
      localStorage.setItem("flag",msg)
    },
    getMsg(state,msg){
      state.message = msg;
      localStorage.setItem("name",msg);
    },
    updateMsg(state,msg){
      state.message = msg;
      localStorage.setItem("name",msg);
    },
    getAddress(state,msg){
      state.addaddress = msg;
      localStorage.setItem("address",msg);
    },
    getNewAddress(state,msg){
      state.newaddress1 = msg;
      localStorage.setItem("newaddress",JSON.stringify(msg));
    }
  }
}
export default MessageModule;
