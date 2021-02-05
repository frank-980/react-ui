import Document from '../components/content'
import React from 'react'
import { Icontent, Iprops} from '../interface/document'
import Icon from '../../components/Icon'
import Table from '../../components/Table'
const ButtonPage:React.FC = ()=>{
    const brief=(<>
        <h1>Icon 图标</h1>
        <p>提供了一套常用的图标集合。</p>
        <h2>何时使用</h2>
        <div>
          <p>用图标展示一些信息。</p>
        </div>
        <h2>代码演示</h2>
        </>)
    
    const items:Icontent[]=[
        {
            id:1,
            demo:<div>
                    <Icon icon="icon-search"/>
                    <Icon icon="icon-select-bold"/>
                    <Icon icon="icon-delete-filling"/>
                </div>,
            title:"基本使用",
            description:"基本使用",
            code:
`
import {Icon} from 'sxdui'
<Icon icon="icon-search"/>
<Icon icon="icon-select-bold"/>
<Icon icon="icon-delete-filling"/>
`
        },
    ]

    const data=[
        {
          key:1,
          arguments: 'type',
          brief: "设置按钮类型",
          type: 'string',
          options: 'primary | dashed | link | text | default',
          default:"default"
        },
        {
          key:2,
          arguments: 'size',
          brief: "设置按钮尺寸",
          type: 'large | middle | small',
          default:"middle"
        },
        {
          key:3,
          arguments: 'ghost',
          brief: "是否启用幽灵按钮",
          type: 'boolean',
          default:"false"
        },
        {
          key:4,
          arguments: 'loading',
          brief: "是否加载中状态",
          type: 'boolean',
          default:"false"
        },
        {
          key:5,
          arguments: 'disabled',
          brief: "是否禁用状态",
          type: 'boolean',
          default:"false"
        },
        {
          key:6,
          arguments: 'shape',
          brief: "设置按钮形状",
          type: 'circle | round',
          default:"—"
        },
     ];
     const columns=[
        {
            title: '参数',
            dataIndex: 'arguments'
        },
        {
            title: '说明',
            dataIndex: 'brief'
        },
        {
            title: '类型',
            dataIndex: 'type'
        },
        {
            title: '默认值',
            dataIndex: 'default',
        }
    ];
    const api = 
        <div>
            <h2>图标集合</h2>
            <div className="content font-className">
        <ul className="icon_lists dib-box">
          
          <li className="dib">
            <span className="icon iconfont icon-3column"></span>
            <div className="name">
              column-3
            </div>
            <div className="code-name">.icon-3column
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-column-4"></span>
            <div className="name">
              column-4
            </div>
            <div className="code-name">.icon-column-4
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-add"></span>
            <div className="name">
              add
            </div>
            <div className="code-name">.icon-add
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-add-circle"></span>
            <div className="name">
              add-circle
            </div>
            <div className="code-name">.icon-add-circle
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-adjust"></span>
            <div className="name">
              adjust
            </div>
            <div className="code-name">.icon-adjust
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-up-circle"></span>
            <div className="name">
              arrow-up-circle
            </div>
            <div className="code-name">.icon-arrow-up-circle
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-right-circle"></span>
            <div className="name">
              arrow-right-circle
            </div>
            <div className="code-name">.icon-arrow-right-circle
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-down"></span>
            <div className="name">
              arrow-down
            </div>
            <div className="code-name">.icon-arrow-down
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-ashbin"></span>
            <div className="name">
              ashbin
            </div>
            <div className="code-name">.icon-ashbin
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-right"></span>
            <div className="name">
              arrow-right
            </div>
            <div className="code-name">.icon-arrow-right
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-browse"></span>
            <div className="name">
              browse
            </div>
            <div className="code-name">.icon-browse
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-bottom"></span>
            <div className="name">
              bottom
            </div>
            <div className="code-name">.icon-bottom
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-back"></span>
            <div className="name">
              back
            </div>
            <div className="code-name">.icon-back
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-bad"></span>
            <div className="name">
              bad
            </div>
            <div className="code-name">.icon-bad
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-double-left"></span>
            <div className="name">
              arrow-double-left
            </div>
            <div className="code-name">.icon-arrow-double-left
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-left-circle"></span>
            <div className="name">
              arrow-left-circle
            </div>
            <div className="code-name">.icon-arrow-left-circle
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-double-right"></span>
            <div className="name">
              arrow-double-right
            </div>
            <div className="code-name">.icon-arrow-double-right
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-caps-lock"></span>
            <div className="name">
              caps-lock
            </div>
            <div className="code-name">.icon-caps-lock
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-camera"></span>
            <div className="name">
              camera
            </div>
            <div className="code-name">.icon-camera
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-chart-bar"></span>
            <div className="name">
              chart-bar
            </div>
            <div className="code-name">.icon-chart-bar
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-attachment"></span>
            <div className="name">
              attachment
            </div>
            <div className="code-name">.icon-attachment
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-code"></span>
            <div className="name">
              code
            </div>
            <div className="code-name">.icon-code
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-close"></span>
            <div className="name">
              close
            </div>
            <div className="code-name">.icon-close
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-check-item"></span>
            <div className="name">
              check-item
            </div>
            <div className="code-name">.icon-check-item
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-calendar"></span>
            <div className="name">
              calendar
            </div>
            <div className="code-name">.icon-calendar
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-comment"></span>
            <div className="name">
              comment
            </div>
            <div className="code-name">.icon-comment
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-column-vertical"></span>
            <div className="name">
              column-vertical
            </div>
            <div className="code-name">.icon-column-vertical
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-column-horizontal"></span>
            <div className="name">
              column-horizontal
            </div>
            <div className="code-name">.icon-column-horizontal
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-complete"></span>
            <div className="name">
              complete
            </div>
            <div className="code-name">.icon-complete
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-chart-pie"></span>
            <div className="name">
              chart-pie
            </div>
            <div className="code-name">.icon-chart-pie
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-cry"></span>
            <div className="name">
              cry
            </div>
            <div className="code-name">.icon-cry
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-customer-service"></span>
            <div className="name">
              customer-service
            </div>
            <div className="code-name">.icon-customer-service
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-delete"></span>
            <div className="name">
              delete
            </div>
            <div className="code-name">.icon-delete
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-direction-down"></span>
            <div className="name">
              direction-down
            </div>
            <div className="code-name">.icon-direction-down
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-copy"></span>
            <div className="name">
              copy
            </div>
            <div className="code-name">.icon-copy
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-cut"></span>
            <div className="name">
              cut
            </div>
            <div className="code-name">.icon-cut
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-direction-down-circle"></span>
            <div className="name">
              direction-down-circle
            </div>
            <div className="code-name">.icon-direction-down-circle
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-direction-right"></span>
            <div className="name">
              direction-right
            </div>
            <div className="code-name">.icon-direction-right
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-direction-up"></span>
            <div className="name">
              direction-up
            </div>
            <div className="code-name">.icon-direction-up
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-direction-left"></span>
            <div className="name">
              direction-left
            </div>
            <div className="code-name">.icon-direction-left
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-download"></span>
            <div className="name">
              download
            </div>
            <div className="code-name">.icon-download
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-elipsis"></span>
            <div className="name">
              elipsis
            </div>
            <div className="code-name">.icon-elipsis
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-edit"></span>
            <div className="name">
              edit
            </div>
            <div className="code-name">.icon-edit
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-eye-close"></span>
            <div className="name">
              eye-close
            </div>
            <div className="code-name">.icon-eye-close
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-email"></span>
            <div className="name">
              email
            </div>
            <div className="code-name">.icon-email
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-error"></span>
            <div className="name">
              error
            </div>
            <div className="code-name">.icon-error
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-favorite"></span>
            <div className="name">
              favorite
            </div>
            <div className="code-name">.icon-favorite
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-file-common"></span>
            <div className="name">
              file-common
            </div>
            <div className="code-name">.icon-file-common
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-fabulous"></span>
            <div className="name">
              fabulous
            </div>
            <div className="code-name">.icon-fabulous
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-file"></span>
            <div className="name">
              file
            </div>
            <div className="code-name">.icon-file
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-folder-close"></span>
            <div className="name">
              folder-close
            </div>
            <div className="code-name">.icon-folder-close
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-filter"></span>
            <div className="name">
              filter
            </div>
            <div className="code-name">.icon-filter
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-good"></span>
            <div className="name">
              good
            </div>
            <div className="code-name">.icon-good
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-hide"></span>
            <div className="name">
              hide
            </div>
            <div className="code-name">.icon-hide
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-home"></span>
            <div className="name">
              home
            </div>
            <div className="code-name">.icon-home
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-file-open"></span>
            <div className="name">
              file-open
            </div>
            <div className="code-name">.icon-file-open
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-link"></span>
            <div className="name">
              link
            </div>
            <div className="code-name">.icon-link
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-lock"></span>
            <div className="name">
              lock
            </div>
            <div className="code-name">.icon-lock
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-menu"></span>
            <div className="name">
              menu
            </div>
            <div className="code-name">.icon-menu
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-loading"></span>
            <div className="name">
              loading
            </div>
            <div className="code-name">.icon-loading
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-help"></span>
            <div className="name">
              help
            </div>
            <div className="code-name">.icon-help
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-modular"></span>
            <div className="name">
              modular
            </div>
            <div className="code-name">.icon-modular
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-notification"></span>
            <div className="name">
              notification
            </div>
            <div className="code-name">.icon-notification
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-mic"></span>
            <div className="name">
              mic
            </div>
            <div className="code-name">.icon-mic
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-more"></span>
            <div className="name">
              more
            </div>
            <div className="code-name">.icon-more
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-play"></span>
            <div className="name">
              play
            </div>
            <div className="code-name">.icon-play
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-print"></span>
            <div className="name">
              print
            </div>
            <div className="code-name">.icon-print
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-search"></span>
            <div className="name">
              search
            </div>
            <div className="code-name">.icon-search
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-share"></span>
            <div className="name">
              share
            </div>
            <div className="code-name">.icon-share
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-select"></span>
            <div className="name">
              select
            </div>
            <div className="code-name">.icon-select
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-stop"></span>
            <div className="name">
              stop
            </div>
            <div className="code-name">.icon-stop
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-success"></span>
            <div className="name">
              success
            </div>
            <div className="code-name">.icon-success
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-smile"></span>
            <div className="name">
              smile
            </div>
            <div className="code-name">.icon-smile
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-setting"></span>
            <div className="name">
              setting
            </div>
            <div className="code-name">.icon-setting
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-time"></span>
            <div className="name">
              time
            </div>
            <div className="code-name">.icon-time
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-top"></span>
            <div className="name">
              top
            </div>
            <div className="code-name">.icon-top
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-unlock"></span>
            <div className="name">
              unlock
            </div>
            <div className="code-name">.icon-unlock
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-user"></span>
            <div className="name">
              user
            </div>
            <div className="code-name">.icon-user
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-upload"></span>
            <div className="name">
              upload
            </div>
            <div className="code-name">.icon-upload
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-warning"></span>
            <div className="name">
              warning
            </div>
            <div className="code-name">.icon-warning
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-up-bold"></span>
            <div className="name">
              arrow-up-bold
            </div>
            <div className="code-name">.icon-arrow-up-bold
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-close-bold"></span>
            <div className="name">
              close-bold
            </div>
            <div className="code-name">.icon-close-bold
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-down-bold"></span>
            <div className="name">
              arrow-down-bold
            </div>
            <div className="code-name">.icon-arrow-down-bold
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-minus-bold"></span>
            <div className="name">
              minus-bold
            </div>
            <div className="code-name">.icon-minus-bold
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-right-bold"></span>
            <div className="name">
              arrow-right-bold
            </div>
            <div className="code-name">.icon-arrow-right-bold
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-select-bold"></span>
            <div className="name">
              select-bold
            </div>
            <div className="code-name">.icon-select-bold
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-up-filling"></span>
            <div className="name">
              arrow-up-filling
            </div>
            <div className="code-name">.icon-arrow-up-filling
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-down-filling"></span>
            <div className="name">
              arrow-down-filling
            </div>
            <div className="code-name">.icon-arrow-down-filling
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-left-filling"></span>
            <div className="name">
              arrow-left-filling
            </div>
            <div className="code-name">.icon-arrow-left-filling
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-arrow-right-filling"></span>
            <div className="name">
              arrow-right-filling
            </div>
            <div className="code-name">.icon-arrow-right-filling
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-clock-filling"></span>
            <div className="name">
              clock-filling
            </div>
            <div className="code-name">.icon-clock-filling
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-delete-filling"></span>
            <div className="name">
              delete-filling
            </div>
            <div className="code-name">.icon-delete-filling
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-favorite-filling"></span>
            <div className="name">
              favorite-filling
            </div>
            <div className="code-name">.icon-favorite-filling
            </div>
          </li>
          
        </ul>
      </div>
        </div>
      
      
    const document:Iprops = {
        brief:brief,
        content:items,
        api:api
    }
    return (<Document document={document}/>)
}
export default ButtonPage