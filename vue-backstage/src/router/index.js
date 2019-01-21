import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      title: 'Index',
      name:'Index',
      component:Index,

    },
    {
      path: '/Dash',
      title: 'Dashboard',
      component:Index,
      children:[{
        path:'/Dash/home',
        title:'Dashboard',
        component:()=> import ('../pages/Dash/home')
      }]
    },
    {
      path: '/Icons',
      title: 'Icons',
      component:Index,
      children: [
        {
          path: '/Icons/IconsOne',
          title: 'Font Awesome',
          component:()=>import('../pages/Icons/IconsOne')
        },
        {
          path: '/Icons/IconsTwo',
          title: 'Fontello',
          component:()=>import('../pages/Icons/IconsTwo')
        },
        {
          path: '/Icons/IconsThree',
          title: 'Material Design Icons',
          component:()=>import('../pages/Icons/IconsThree')
        },
        {
          path: '/Icons/IconsFour',
          title: 'Material Design Iconic Font',
          component:()=>import('../pages/Icons/IconsFour')
        },
        {
          path: '/Icons/IconsFive',
          title: 'Themify Icons',
          component:()=>import('../pages/Icons/IconsFive')
        }
      ]

    },
    {
      path: '/Inter',
      title: 'User Interface',
      component:Index,
      children: [
        {path: '/Inter/Buttons', title: 'Buttons',component:()=>import('../pages/Inter/Buttons')},
        {path: '/Inter/Cards', title: 'Cards'},
        {path: '/Inter/Check', title: 'Checkboxs-Radios'},
        {path: '/Inter/Compon', title: 'Components'},
        {path: '/Inter/Drag', title: 'Draggabale Cards'},
        {path: '/Inter/Modals', title: 'Modals'},
        {path: '/Inter/Notification', title: 'Notification'},
        {path: '/Inter/Rando', title: 'RandoSlider'},
        {path: '/Inter/Check', title: 'Checkboxs-Radios'}
      ]

    },
    {
      path:'/widgets',
      title:'widgets',
      component:Index,
      children:[{
        path:'/widgets/Wigent',
        title:'Wigent',
        component:()=>import('../pages/widgets/Wigent')
      }]
    },
    {
      path:'/charts',
      title:'charts',
      component:Index,
      children:[
        {
          path:'ThreeCharts',
          title:'3DCharts',
          component:()=>import('../pages/charts/ThreeCharts'),
        },
        {
          path:'ChartistCharts',
          title:'ChartistCharts',
          component:()=>import('../pages/charts/ChartistCharts'),
        },
        {
          path:'ChartjsCharts',
          title:'ChartjsCharts',
          component:()=>import('../pages/charts/ChartjsCharts'),
        },
        {
          path:'DynamicCharts',
          title:'DynamicCharts',
          component:()=>import('../pages/charts/DynamicCharts'),
        },
        {
          path:'FloatCharts',
          title:'FloatCharts',
          component:()=>import('../pages/charts/FloatCharts'),
        },
        {
          path:'KnobChart',
          title:'KnobChart',
          component:()=>import('../pages/charts/KnobChart'),
        },
        {
          path:'MorrisCharts',
          title:'MorrisCharts',
          component:()=>import('../pages/charts/MorrisCharts'),
        }
      ]
    },
    {
      path:'/calendar',
      title:'calendar',
      component:Index,
      children:[{
        path:'Calendar',
        title:'Calendar',
        component:()=>import('../pages/calendar/Calendar')
      }]
    },
    {
      path:'/forms',
      title:'forms',
      component:Index,
      children:[
        {
          path:'GeneralForm',
          title:'GeneralForm',
          component:()=>import('../pages/forms/GeneralForm')
        },
        {
          path:'AdvancedForms',
          title:'AdvancedForms',
          component:()=>import('../pages/forms/AdvancedForms')
        }
      ]
    },
    {
      path:'/tables',
      title:'tables',
      component:Index,
      children:[
        {
          path:'BasicTables',
          title:'BasicTables',
          component:()=>import('../pages/tables/BasicTables')
        },
        {
          path:'DataTables',
          title:'DataTables',
          component:()=>import('../pages/tables/DataTables')
        },
        {
          path:'ResponsiveTables',
          title:'ResponsiveTables',
          component:()=>import('../pages/tables/ResponsiveTables')
        },
        {
          path:'EditableTables',
          title:'EditableTables',
          component:()=>import('../pages/tables/EditableTables')
        }
      ]
    },
  ]
})


