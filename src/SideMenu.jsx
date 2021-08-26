import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "./store/Context.js";
import {Button, Menu, Space} from 'antd'
import {PlusOutlined,HomeOutlined,UsergroupAddOutlined,DiffOutlined,
    ImportOutlined,FolderOutlined,LikeOutlined,SoundOutlined,
    IdcardOutlined,ScheduleOutlined,CopyOutlined,ToolOutlined,
    BulbOutlined,BookOutlined,BarsOutlined,LockOutlined,
    BarChartOutlined,FieldTimeOutlined,LeftOutlined} from "@ant-design/icons"

const SideMenu =({collapsed})=>{

    const store = useStore()



    const { SubMenu } = Menu;

    const sideMenu =[
        {id:1, label: 'Quik actions', key:'quik_actions', icon:<PlusOutlined />,style:{
            margin:"0 0 32px 0"
            } ,  sub_menu: [
                {id:111, label: 'Create New User', key:'create_new_user', icon:<PlusOutlined />},
                {id:112, label: 'Create New Course List', key:'create_new_course_list', icon:<PlusOutlined />},
                {id:113, label: 'Add Group', key:'additionProperties', icon:<PlusOutlined />}
            ]},

        {id:21, label: 'Home', key:'Home', icon:<HomeOutlined />, space_start:true, sub_menu: false},
            {id:22, label: 'User List', key:'Home', icon:<IdcardOutlined />, sub_menu: false},
            {id:23, label: 'Assign lists to users', key:'Home', icon:<DiffOutlined />, sub_menu: false},
            {id:24, label: 'Import users', key:'Home', icon:<ImportOutlined rotate={90}/>,style:{
                    margin:"0 0 32px 0"
                }, sub_menu: false},

        {id:31, label: 'Courses', key:'Home', icon:<FolderOutlined />, sub_menu: false},
            {id:32, label: 'Course feedback', key:'Home', icon:<LikeOutlined />, sub_menu: [
                    {id:321, label: 'Feedback statistic', key:'feedback_statistic', icon:false},
                    {id:322, label: 'Questionnaire manager', key:'questionnaire_manager', icon:false}]
            },
            {id:33, label: 'Reminders', key:'Home', icon:<SoundOutlined />, sub_menu: false},
            {id:34, label: 'Class events', key:'Home', icon:<ScheduleOutlined />, sub_menu: false},
        {id:35, label: 'Curriculum', key:'Home', icon:<CopyOutlined />,style:{
                    margin:"0 0 32px 0"
                }, sub_menu: false},

        {id:41, label: 'Group manager', key:'Home', icon:<UsergroupAddOutlined />, sub_menu: false},
            {id:42, label: 'License manager', key:'Home', icon:<BulbOutlined />, sub_menu: false},
            {id:43, label: 'Course list manager', key:'Home', icon:<BookOutlined />, sub_menu: false},
            {id:44, label: 'Category manager', key:'Home', icon:<BarsOutlined />,style:{
                    margin:"0 0 32px 0"
                }, sub_menu: false},

        {id:51, label: 'LMS admins', key:'Home', icon:<ToolOutlined />, sub_menu: false},
            {id:52, label: 'Access requests', key:'Home', icon:<LockOutlined />, sub_menu: false},
            {id:53, label: 'Reports', key:'Home', icon:<BarChartOutlined />, sub_menu: false},
            {id:54, label: 'Activity log', key:'Home', icon:<FieldTimeOutlined />,style:{
                    margin:"0 0 32px 0"
                }, sub_menu: false}

    ]

    return(
        <Menu mode='vertical' inlineCollapsed={collapsed} >

            {sideMenu.map((item) => {

                        if (Array.isArray(item.sub_menu)) {
                            let result =
                                (<SubMenu expandIcon={false} title={store.t(item.key, item.label)} icon={item.icon} key={item.id} style={{margin:item.style? item.style.margin: 0}}>
                                    {item.sub_menu.map(sub_item =>
                                        <Menu.Item key={sub_item.id} icon={sub_item.icon}>
                                            {store.t(sub_item.key, sub_item.label)}
                                        </Menu.Item>
                                    )}
                                </SubMenu>)

                            return result

                        } else {
                            let result =
                            (<Menu.Item key={item.id} icon={item.icon} style={{margin:item.style? item.style.margin: 0}}>
                                {item.label}
                            </Menu.Item>)

                            return result
                        }
                    }
                )}

        </Menu>
)

}
export default observer(SideMenu)