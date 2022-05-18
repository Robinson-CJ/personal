//创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import MyPersonal from '../pages/MyPersonal.vue'
import Information from '../pages/Information.vue'
import Purchase from '../pages/Purchase.vue'
import Cash from '../pages/Cash.vue'
import Gift from '../pages/Gift.vue'
import Coupon from '../pages/Coupon.vue'
import Favorite from '../pages/Favorite.vue'
import Discounts from '../pages/Discounts.vue'
import Address from '../pages/Address.vue'
import RedPacket from '../pages/RedPacket.vue'
import AllTheNews from '../pages/ChildPages/AllTheNews.vue'
import Logistics from '../pages/ChildPages/Logistics.vue'
import Activity from '../pages/ChildPages/Activity.vue'
import Unused from '../pages/ChildPages/Unused.vue'
import Use from '../pages/ChildPages/Use.vue'
import Binding from '../pages/ChildPages/Binding.vue'
import MyGift from '../pages/ChildPages/MyGift.vue'
import Issue from '../pages/ChildPages/Issue.vue'
import MyCoupon from '../pages/ChildPages/MyCoupon.vue'
import CoupoIssue from '../pages/ChildPages/CoupoIssue.vue'
import UnuseQ from '../pages/ChildPages/UnseQ.vue'
import UseQ from '../pages/ChildPages/UseQ.vue'
import GuseQ from '../pages/ChildPages/GuseQ.vue'


export default new VueRouter({
  routes: [
    {
      path: '/MyPersonal',
      component: MyPersonal
    },
    {
      path: '/Information',
      component: Information,
      children: [
        {
          path: 'AllTheNews',
          component: AllTheNews,
        },
        {
          path: 'Logistics',
          component: Logistics,
        },
        {
          path: 'Activity',
          component: Activity,
        },
      ]
    },
    {
      path: '/Purchase',
      component: Purchase,
      children: [
        {
          path: 'Unused',
          component: Unused
        },
        {
          path: 'Use',
          component: Use
        },
      ]
    },
    {
      path: '/Cash',
      component: Cash
    },
    {
      path: '/Gift',
      component: Gift,
      children: [
        {
          path: 'Binding',
          component: Binding
        },
        {
          path: 'MyGift',
          component: MyGift
        },
        {
          path: 'Issue',
          component: Issue
        },
      ]
    },
    {
      path: '/Coupon',
      component: Coupon,
      children: [
        {
          path: 'MyCoupon',
          component: MyCoupon
        },
        {
          path: 'CoupoIssue',
          component: CoupoIssue
        },
      ]
    },
    {
      path: '/Favorite',
      component: Favorite
    },
    {
      path: '/Discounts',
      component: Discounts,
      children: [
        {
          path: 'UnuseQ',
          component: UnuseQ
        },
        {
          path: 'UseQ',
          component: UseQ
        },
        {
          path: 'GuseQ',
          component: GuseQ
        },
      ]
    },
    {
      path: '/Address',
      component: Address
    },
    {
      path: '/RedPacket',
      component: RedPacket,
      children: [
        {
          path: 'Unused',
          component: Unused
        },
        {
          path: 'Use',
          component: Use
        },
      ]
    }
  ]
})