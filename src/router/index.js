import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import ArticleContent from '@/pages/ArticleContent'
import Project from '@/pages/Project'
import ProjectList from '@/pages/ProjectList'
import ProjectContent from '@/pages/ProjectContent'
import Gallery from '@/pages/Gallery'
import GalleryList from '@/pages/GalleryList'
import Design from '@/pages/Design'
import Album from '@/pages/Album'
import About from '@/pages/About'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/article', name: 'Article', component: Article },
        {
            path: '/article/:id',
            name: 'ArticleContent',
            component: ArticleContent, props: true 
        },
        { 
            path: '/project', 
            component: Project,
            children: [
                { path: '',name: 'Project',  component: ProjectList },
                { path: ':id', name: 'ProjectContent', component: ProjectContent, props: true }
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

router.beforeEach((to, from, next) => {
    if (Object.keys(to.params).length === 0) {
        window.console.log({key: to.params, value: store.state.query[to.name]})
        Object.assign(to.params, store.state.query[to.name] || {})
    }
    Object.assign(to.params, {scroll: {x: window.scrollX, y: window.scrollY}})
    window.console.log({key: to.name, value: from.params})
    store.commit('saveQuery', {key: from.name, value: from.params})
    next()
  })

export default router