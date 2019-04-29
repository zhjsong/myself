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
               <a href="#" class="loginout" @click.prevent="handleloginout()">退出</a>     
            </div>
        </el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px" class="aside">
         <el-menu 
         :unique-opened="true"
         class="el-menu-vertical-demo">
      <!-- 1 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="1-1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>用户列表</span>
        </template>
          </el-menu-item>
      
      </el-submenu>
      <!-- 2 -->

          <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>角色列表</span>
        </template>
          </el-menu-item>
          <el-menu-item index="1-2">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>权限列表</span>
        </template>
          </el-menu-item>
      
      </el-submenu>

      <!-- 3 -->
          <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品列表</span>
        </template>
          </el-menu-item>
          <el-menu-item index="1-2">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>分类参数</span>
        </template>
          </el-menu-item>
              <el-menu-item index="1-2">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品分类</span>
        </template>
          </el-menu-item>
      
      </el-submenu>
      <!-- 4 -->
            <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>订单列表</span>
        </template>
          </el-menu-item>
      
      </el-submenu>
        <!-- 5 -->
   <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>数据报表</span>
        </template>
          </el-menu-item>
      
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
//   验证token存在
beforeCreate(){
    const token=localStorage.getItem('token')
    if(!token) {
        this.$router.push({name:'login'})
    }
},
methods:{
    handleloginout(){
        this.$message.success('退出成功')
        localStorage.clear()
        this.$router.push({name:'login'})
    }
}
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
   color: white;
}
.loginout {
   text-decoration: none;
   line-height: 60px;
   color: black;
}
</style>
