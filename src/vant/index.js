import Vue from 'vue'
import 'vant/lib/index.css';
import {
    Swipe,
    SwipeItem,
    Lazyload,
    Tab,
    Tabs
} from "vant";

Vue.use(Swipe).use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Tab)
Vue.use(Tabs)