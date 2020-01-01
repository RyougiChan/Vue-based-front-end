import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import ArticleContent from '@/pages/Article-Content'
import Project from '@/pages/Project'
import ProjectList from '@/pages/Project-List'
import Hexagram from '@/pages/Project-Hexagram'
import MdComponents from '@/pages/Project-Md-Components'
import SnowEffect from '@/pages/Project-Snow-Effect'
import NavigationDrawer from '@/pages/Project-Navigation-Drawer'
import Gallery from '@/pages/Gallery'
import GalleryList from '@/pages/Gallery-List'
import Design from '@/pages/Design'
import Album from '@/pages/Album'
import About from '@/pages/About'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/article', name: 'Article', component: Article },
        {
            path: '/article/:id',
            name: 'ArticleContent',
            component: ArticleContent
        },
        { 
            path: '/project', 
            component: Project,
            children: [
                { path: '',name: 'Project',  component: ProjectList },
                { path: 'hexagram', name: 'Hexagram', component: Hexagram },
                { path: 'md-components', name: 'Md-Components', component: MdComponents },
                { path: 'snow-effect', name: 'Snow-Effect', component: SnowEffect },
                { path: 'navigation-drawer', name: 'Nav-Drawer', component: NavigationDrawer },
            ]
        },
        { 
            path: '/gallery', 
            component: Gallery,
            children: [
                { path: '',name: 'Gallery',  component: GalleryList },
                { path: 'design', name: 'Design', component: Design },
                { path: 'album', name: 'Album', component: Album }
            ]
        },
        { path: '/about', name: 'About', component: About }
    ]
})