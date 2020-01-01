<template>
  <div id="r-header">
    <header>
      <div class="container-fluid">
        <div class="row-header">
          <div class="header-logo">
            <a href="/">
              <img
                src="../images/logo.png"
                id="desktop-logo"
                title="Home"
                alt="Home"
                class="img-responsive"
              />
            </a>
            <a class="loke-menu-icon" id="menu-toggle" href="javascript:void(0)">
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div class="header-menu">
            <div class="menu-top-menu-container">
              <ul id="menu-top-menu" class="menu" @click="menuClickHandler">
                <li
                  :class="['menu-item', { 'current': item.name.toLowerCase() === activedMenuItem }]"
                  v-for="(item, index) in menuItems"
                  :key="index"
                >
                  <router-link :name="item.name" :to="{ name: item.name }">
                    {{item.name}}
                    <ul v-if="item.hasSubMenu" class="sub-menu">
                      <li
                        v-for="(subitem, subIndex) in item.subMenu"
                        :key="subIndex"
                        :class="['menu-item', { 'current': subitem.name.toLowerCase() === activedMenuItem }]"
                      >
                        <router-link :name="subitem.name" :to="{ name: subitem.name }">{{subitem.name}}</router-link>
                      </li>
                    </ul>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          hasSubMenu: false
        },
        {
          name: "Article",
          hasSubMenu: false
        },
        {
          name: "Project",
          hasSubMenu: true,
          subMenu: [
            {
              name: "Hexagram",
              hasSubMenu: false
            },
            {
              name: "Md-Components",
              hasSubMenu: false
            },
            {
              name: "Snow-Effect",
              hasSubMenu: false
            },
            {
              name: "Nav-Drawer",
              hasSubMenu: false
            },
          ]
        },
        {
          name: "Gallery",
          hasSubMenu: true,
          subMenu: [
            {
              name: "Design",
              hasSubMenu: false
            },
            {
              name: "Album",
              hasSubMenu: false
            }
          ]
        },
        {
          name: "About",
          hasSubMenu: false
        }
      ],
      activedMenuItem: "home"
    };
  },
  methods: {
    menuClickHandler(event) {
      let tar = event.target;
      if(tar && tar.nodeName.toLowerCase() === 'a' && !(tar.parentNode.classList.contains('current'))) {
        this.activedMenuItem = tar.name.toLowerCase();
      }
    },
    setActiveMenuItem() {
      let routerPath = this.$router.history.current.path;
      let routerName;
      if(routerPath === '/') routerName = 'home';
      if(/(\w+)\/?(\d*)/.test(routerPath)) {
        routerName = /(\w+)\/?(\d*)/.exec(routerPath)[1];
      }
      if(/(\w+)\/(\w+)/.test(routerPath)) {
        routerName = /(\w+)\/(\w+)/.exec(routerPath)[2];
      }
      // window.console.log(routerPath);
      this.activedMenuItem = routerName;
    }
  },
  watch:{
    $route(){
      this.setActiveMenuItem()
    }
  },
  created () {
    this.setActiveMenuItem()
  },
};

</script>

<style lang="scss" scoped>
@import "../styles/header.scss";
</style>
