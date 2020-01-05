import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import ArticleContent from '@/pages/Article-Content'
import Project from '@/pages/Project'
import ProjectList from '@/pages/Project-List'
import ProjectContent from '@/pages/ProjectContent'
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