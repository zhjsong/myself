<template>
    <div class="login-wrap">
        
        <el-form label-position="top" label-width="80px" :model="formdata" class="login-form">
            <h2>用户登录</h2>
         <el-form-item label="用户名">
         <el-input v-model="formdata. username"></el-input>
         </el-form-item>
         <el-form-item label="密码">
         <el-input v-model="formdata.password"></el-input>
          </el-form-item>
          <el-button type="primary" class="login-btn">主要按钮</el-button>
</el-form>
    </div>
</template>

<script>
export default {
   data(){
       return {
           formdata:{
               username:'',
               password:''
           }
       }
   }
}
</script>

<style>
.login-wrap {
  height: 100%;
  background-color: #324152;
  display: flex;
  justify-content: center;
  align-items: center;
  }
.login-wrap .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
}
.login-wrap .login-form .login-btn {
   width: 100%;
}
</style>


