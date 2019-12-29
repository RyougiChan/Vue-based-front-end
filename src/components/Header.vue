<template>
  <div id="r-header">
    <div id="mobile-header" class="mobile">
      <div id="top-mobile-row">
        <a href="/">
          <img src="../images/logo.png" title="Home" alt="Home" class="img-responsive" />
        </a>
        <a class="loke-menu-icon" id="menu-toggle" href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
      <div id="mobile-menu-wrapper">
        <div class="menu-top-menu-container">
          <ul id="menu-top-menu" class="menu">
            <li
                  :class="['menu-item', { 'current': (index == 0) }]"
                  v-for="(item, index) in menuItems"
                  :key="index"
                >
                  <router-link :to="{ name: item.name }">
                    {{item.name}}
                    <ul v-if="item.hasSubMenu" class="sub-menu">
                      <li
                        v-for="(subitem, subIndex) in item.subMenu"
                        :key="subIndex"
                        class="menu-item"
                      >
                        <router-link :to="{ name: subitem.name }">{{subitem.name}}</router-link>
                      </li>
                    </ul>
                  </router-link>
                </li>
          </ul>
        </div>
      </div>
    </div>
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
          </div>
          <div class="header-menu">
            <div class="menu-top-menu-container">
              <ul id="menu-top-menu" class="menu">
                <li
                  :class="['menu-item', { 'current': (index == 0) }]"
                  v-for="(item, index) in menuItems"
                  :key="index"
                >
                  <router-link :to="{ name: item.name }">
                    {{item.name}}
                    <ul v-if="item.hasSubMenu" class="sub-menu">
                      <li
                        v-for="(subitem, subIndex) in item.subMenu"
                        :key="subIndex"
                        class="menu-item"
                      >
                        <router-link :to="{ name: subitem.name }">{{subitem.name}}</router-link>
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
            }
          ]
        },
        {
          name: "About",
          hasSubMenu: false
        }
      ],
      logo: "./images/logo.png"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/header.scss";
</style>
