import * as VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        name: "Inicio",
        component: () => import("./pages/Home.vue"),
    },
    
    {
        path: "/acerca-de",
        name: "AboutPage",
        component: () => import("./pages/About.vue"),    
    },

    {
        path: "/post/:id",
        name: "Post",
        component: () => import("./pages/PostPage.vue"),   
        props: true,     
    },

    
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;