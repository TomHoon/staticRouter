import VueRouter from "vue-router";
import pageRouter from "./modules/pageRouter"

const router = new VueRouter({
    mode:"history",
    routes: [
        pageRouter
    ]
});

export default router;