import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import ArticleContent from '@/pages/ArticleContent'
import Project from '@/pages/Project'
import ProjectList from '@/pages/ProjectList'
import Hexagram from '@/pages/Hexagram'
import Gallery from '@/pages/Gallery'
import GalleryList from '@/pages/GalleryList'
import Design from '@/pages/Design'
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
                { path: 'hexagram', name: 'Hexagram', component: Hexagram }
            ]
        },
        { 
            path: '/gallery', 
            component: Gallery,
            children: [
                { path: '',name: 'Gallery',  component: GalleryList },
                { path: 'design', name: 'Design', component: Design }
            ]
        },
        { path: '/about', name: 'About', component: About }
    ]
})