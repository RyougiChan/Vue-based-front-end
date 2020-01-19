// import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
const Home = () => import('@/pages/Home')
const Article = () => import('@/pages/Article')
const ArticleContent = () => import('@/pages/ArticleContent')
const Project = () => import('@/pages/Project')
const ProjectList = () => import('@/pages/ProjectList')
const ProjectContent = () => import('@/pages/ProjectContent')
const Gallery = () => import('@/pages/Gallery')
const GalleryList = () => import('@/pages/GalleryList')
const Design = () => import('@/pages/Design')
const Album = () => import('@/pages/Album')
const About = () => import('@/pages/About')

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