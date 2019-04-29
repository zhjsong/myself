<template>
 <el-container class="container">
  <el-header class="header">
    <el-row class="header-row">
        <el-col :span="4">
            <div class="grid-content bg-purple">
                <img src="../../assets/logo.png" alt="该图片无法显示">
            </div>
            </el-col>
        <el-col :span="19" class="middle">
             <div class="grid-content bg-purple-light">
                <h2>电商后台管理系统</h2>
            </div>
        </el-col>
        <el-col :span="1">
            <div class="grid-content bg-purple">
               <a href="#" class="loginout">退出</a>     
            </div>
        </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px" class="aside">Aside</el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {

}
</script>

<style>
.container {
   height: 100%;
}
.header {
   background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.main {
  background-color: #e9eef3;
  height: 100%; 
}
.middle {
   text-align: center;
   line-height: 20px;
}
.loginout {
   text-decoration: none;
   line-height: 60px;
}
</style>
