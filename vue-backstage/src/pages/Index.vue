<template>
  <div class="layout">
    <div class="siderbar-wrapper" :style="{width: this.isCollapsed?'75px':'260px'}">
      <div class="logo-wrapper">
        <a class="username">WeiMiaoMiao</a>
        <div class="user" :style="{display: this.isCollapsed?'none':'block'}">
          <a href="#" class="avatar">
            <img src="../assets/img/small.gif" alt=""><span class="status online"></span>
          </a>
          <div class="na">
            <h5 class="name">Emily Stanle</h5>
            <h5 class="position">Administrator</h5>
          </div>
          <el-dropdown>
            <div class="dropdown-content el-dropdown-link">
              <i class="fa fa-caret-down js__drop_down_button"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a"><a href="#"><i class="fa fa-user"></i> Profile</a></el-dropdown-item>
              <el-dropdown-item command="b"><a href="#"><i class="fa fa-gear"></i> Settings</a></el-dropdown-item>
              <el-dropdown-item command="b"><a href="#"><i class="fa fa-sign-out"></i> Log out</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <el-menu
        background-color="$siderbarBackColor"
        text-color="$topbarBackgroundColor"
        class="menu-wrapper"
        :style="{top: this.isCollapsed?'75px':'180px'}"
        router
        unique-opened
        :collapse="isCollapsed"
        :default-active="$route.path">
        <template v-for="(item, index) in sider_menu_data">
          <el-menu-item class="menu-item" v-if="!item.children" :index="item.path" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </template>
            <el-menu-item class="menu-item" v-for="(sub_item, sub_index) in item.children" :index="sub_item.path"
                          :key="sub_index">
              <span slot="title" style="margin-left:12px;">{{sub_item.title}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="topbar-wrapper" :style="{left: this.isCollapsed?'75px':'260px'}">
      <!--左侧菜单隐藏显示-->
      <div class="menu-collapse-wrapper"  @click="toggleMenu">
        <i class="FontAwesome fa-bars" :style="{transform: 'rotateZ(' + (this.isCollapsed ? '90' : '0') + 'deg)'}"></i>
      </div>
      <div class="title">Home</div>
      <ul class="menu-list">
        <!--搜索-->
        <li class="menu-item">
          <el-input
            suffix-icon="fa fa-search"
            v-model="inputSearch">
          </el-input>
        </li>
        <!--全屏-->
        <li class="menu-item" @click="handleFullScreen">
          <i class="fa fa-arrows-alt "></i>
        </li>
        <li class="menu-item">
          <el-dropdown
            :show-timeout="10"
            :hide-timeout="10"
            trigger="click"
            style="padding: 0 15px;">
            <div class="dropdown-content el-dropdown-link">
              <i class="fa fa-th"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a"></el-dropdown-item>
              <el-dropdown-item command="b"></el-dropdown-item>
              <el-dropdown-item command="b"></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li class="menu-item">
          <i class="fa fa-envelope"></i>
        </li>
        <li class="menu-item plause">
          <i class="fa fa-bell"></i>
        </li>
        <li class="menu-item" @click="exit">
          <i class="fa fa-power-off "></i>
        </li>
      </ul>
    </div>
    <div class="content-wrapper" ref="content-wrapper" :style="{left: this.isCollapsed?'75px':'260px'}">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

    data() {
      return {
        inputSearch:'',
        sider_menu_data: [
          {
            path: '/Dash/home',
            title: 'Dashboard',
            icon: 'fa fa-home',
          },
          {
            path: '/Icons',
            title: 'Icons',
            icon: 'fa fa-flag',
            children: [
              {path: '/Icons/IconsOne', title: 'Font Awesome'},
              {path: '/Icons/IconsTwo', title: 'Fontello'},
              {path: '/Icons/IconsThree', title: 'Material Design Icons'},
              {path: '/Icons/IconsFour', title: 'Material Design Iconic Font'},
              {path: '/Icons/IconsFive', title: 'Themify Icons'}
            ]
          },
          {
            path: '/Users',
            title: 'User Interface',
            icon: 'fa fa-adjust',
            children: [
              {path: '/Inter/Buttons', title: 'Buttons'},
              {path: '/Inter/Cards', title: 'Cards'},
              {path: '/Inter/Check', title: 'Checkboxs-Radios'},
              {path: '/Inter/Compon', title: 'Components'},
              {path: '/Inter/Drag', title: 'Draggabale Cards'},
              {path: '/Inter/Modals', title: 'Modals'},
              {path: '/Inter/Notification', title: 'Notification'},
              {path: '/Inter/Rando', title: 'RandoSlider'},
              {path: '/Inter/Check', title: 'Checkboxs-Radios'}
            ]
          },
          {
            path: '/widgets/Wigent',
            title: 'Widgets',
            icon: 'fa fa-code',
          },
          {
            path: '/charts',
            title: 'Charts',
            icon: 'fa fa-bar-chart',
            children: [
              {path:'/charts/ThreeCharts', title: '3D Chart'},
              {path:'/charts/ChartistCharts', title: 'Chartist Chart'},
              {path: '/charts/ChartjsCharts', title: 'Chartjs Chart'},
              {path: '/charts/DynamicCharts', title: 'Dynamic Chart'},
              {path:'/charts/FloatCharts',title:'Float Charts',},
              { path:'/charts/KnobChart', title:'Knob Chart',},
              { path:'/charts/MorrisCharts', title:'Morris Charts',}
            ]
          },
          {
            path: '/calendar/Calendar',
            title: 'Calendar',
            icon: 'fa fa-calendar'
          },
          {
            path: '/Forms',
            title: 'Forms',
            icon: 'fa fa-envelope',
            children:[
              {path:'/Forms/GeneralForm',title:'General Form',},
              {path:'/Forms/AdvancedForms', title:'Advanced Forms',}
            ]
          },
          {
            path: '/Tables',
            title: 'Tables',
            icon: 'fa fa-envelope',
            children:[
              {
                path:'/Tables/BasicTables',
                title:'Basic Tables'
              },
              {
                path:'/Tables/DataTables',
                title:'Data Tables'
              },
              {
                path:'/Tables/ResponsiveTables',
                title:'Responsive Tables'
              },
              {
                path:'/Tables/EditableTables',
                title:'Editable Tables'
              }
            ]
          },
          {
            path: '/Profile',
            title: 'Profile',
            icon: 'fa fa-file-text'
          },
          {
            path: '/Mail',
            title: 'Mail',
            icon: 'fa fa-envelope'
          },
          {
            path: '/Page',
            title: 'Page',
            icon: 'fa fa-file-text',
            children: [
              {path: '/', title: 'Starter Page'},
              {path: '/', title: 'Login'},
              {path: '/', title: 'Register'},
              {path: '/', title: 'Recover Password'},
              {path: '/', title: 'Error 404'},
              {path: '/', title: 'Error 500'},
              {path: '/', title: 'Register'},
              {path: '/', title: 'Recover Password'}
            ]
          },
          {
            path: '/Extra',
            title: 'Extra Page',
            icon: 'fa fa-folder-open',
            children:[
              {path:'/',title:'Contact list'},
              {path:'/',title:'Email template'},
              {path:'/',title:'FAQ'},
              {path:'/',title:'Gallery'},
              {path:'/',title:'Invoice'},
              {path:'/',title:'Maps'},
              {path:'/',title:'Pricing'},
              {path:'/',title:'Project'},
              {path:'/',title:'Taskboard'},
              {path:'/',title:'Timeline'}

            ]
          }
        ],
        isCollapsed: false,
        adminMenuShow: false
      }
    },
    methods:{
      // 左侧菜单隐藏显示
      toggleMenu() {
        this.isCollapsed = !this.isCollapsed;
      },
      //退出
      exit() {
        this.$confirm('Are you sure you want to logout?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$store.commit('SET_TOKEN', '');
            this.$store.commit('SET_USER', null);
            this.$router.replace({path: '/login'});
          })
          .catch(() => {
            return false;
          })
      },
      //全屏
      handleFullScreen(){
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      },
    }
  }
</script>
<style lang="scss">

  @import '../assets/styles/virable';
  .siderbar-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: $siderbarWidth;
    z-index: 11;
    transition: all 0.3s ease-in-out;

    .logo-wrapper {
      text-align: center;
      font-size: 24px;
      .username{
        display: block;
        height: 75px;
        line-height: 75px;
        color: #ffffff;
        font-size: 20px;
        white-space: nowrap;
        overflow: hidden;
        background-color: $siderbarBackgroundColor;
        font-weight: 500;
      }
      .user{
        position: absolute;
        top: 75px;
        left: 0;
        width: 260px;
        height: 110px;
        line-height: 110px;
        padding: 0 20px;
        box-sizing: border-box;
        background-color: $siderbarBackColor;
        .avatar{
          width: 70px;
          height: 70px;
          position: relative;
          float: left;
          img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
            border: 3px solid #d7ecfb;
          }
          span{
            position: absolute;
            bottom: -2px;
            right: 0px;
            width: 12px;
            height: 12px;
            border: 1px solid #ffffff;
            background: #00bf4f;
            -webkit-border-radius: 100%;
            -moz-border-radius: 100%;
            border-radius: 100%;
          }
        }
        .na{
          float: left;
          .name{
            color: #435966;
            margin: 0px;
            font-size: 16px;
            line-height: 26px;
            font-weight: 500;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .position{
            color: #aab2bd;
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            margin: 0;
          }
        }
        .el-menu{
          float: left;
        }

      }
    }

    .menu-wrapper {
      position: absolute;
      top: 185px;
      bottom: 0;
      width: 100%;
      border-right: none;
      transition: all 0.3s ease-in-out;
      &:not(.el-menu--collapse) {
        overflow-y: auto;
        overflow-x: hidden;
      }
      i {
        color: #FFFFFF;
      }
      .menu-item {
        background-color: $siderbarBackColor !important;
        color: $siderbarBackgroundColor !important;
        i {
          color: $siderbarBackgroundColor !important;
        }
        &.is-active, &:hover {
          background-color:$siderbarBackgroundColor  !important;
          color: $siderbarBackColor !important;
          i {
            color: $siderbarBackColor !important;
          }
        }
      }
      .el-submenu__title{
        background-color: $siderbarBackColor !important;
        color: $siderbarBackgroundColor !important;
        i {
          color: $siderbarBackgroundColor !important;
        }
        &:hover {
          background-color:$siderbarBackgroundColor  !important;
          color: $siderbarBackColor !important;
          i {
            color: $siderbarBackColor !important;
          }
        }
      }

      .el-submenu, .el-menu-item {
        width: 100%;
      }
    }
  }

  .topbar-wrapper {
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: 0;
    height: $topbarHeight;
    line-height: $topbarHeight;
    padding: 0 24px 0 0;
    background-color: $topbarBackgroundColor;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    transition: all 0.3s ease-in-out;
    z-index: 12;
    .menu-collapse-wrapper {
      height: 100%;
      width: 70px;
      text-align: center;
      cursor: pointer;
      float: left;
      background-color: $BreakBgColor;
      i {
        transition: all 0.3s ease-in-out;
      }
    }
    .title {
      height: 100%;
      font-weight: 900;
      float: left;
      color: #ffffff;
      font-size: 18px;
      line-height: 75px;

    }
    .menu-list {
      float: right;
      .menu-item {
        position: relative;
        float: left;
        margin-left: 15px;
        cursor: pointer;
        font-size: 19px;
        line-height: 75px;
        color: #021cac;
        &:hover {
          cursor: pointer;
          color: #ffffff;
        }
      }
      .menu-item.plause:before{
        content: '';
        width: 2px;
        height: 2px;
        border: 3px solid #ffce54;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px;
        background-color: #ffce54;
        z-index: 10;
        position: absolute;
        right: 2px;
        top: 28px;
      }
    }
  }

  .content-wrapper {
    position: fixed;
    left: $siderbarWidth;
    right: 0;
    top: $topbarHeight;
    bottom: 0;
    padding: 16px;
    overflow: auto;
    transition: all 0.3s ease-in-out;
    background-color: $contentBgColor;

    .content {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
</style>
