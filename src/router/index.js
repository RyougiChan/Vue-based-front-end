import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Project from '@/pages/Project'
import ProjectList from '@/pages/ProjectList'
import Hexagram from '@/pages/Hexagram'
import About from '@/pages/About'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/article', name: "Article", component: Article },
        { 
            path: '/project', 
            name: "Project", 
            component: Project,
            children: [
                { path: '', component: ProjectList },
                { path: 'hexagram', name: "Hexagram", component: Hexagram }
            ]
        },
        { path: '/about', name: "About", component: About }
    ]
})