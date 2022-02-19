import { Collapse, Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import {useState} from 'react'
import { useHistory, withRouter } from "react-router-dom";
import './index.less';

const { SubMenu } = Menu;
function Nav() {
    let history = useHistory();
    let [visible, setVisible] = useState(false);

    const HandleClick = (e) => {
        history.push(`/my-inter/${e.key}`);
    };

    return (
        <div className="contain">
            {!visible && 
            <button onClick={()=>setVisible(true)}>点击展开</button>
            }
                        {visible && 
            <button onClick={()=>setVisible(false)}>点击关闭</button>
            }
            {visible&&<Menu
                onClick={HandleClick}
                style={{ width: 256, height: '100%' }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <SubMenu key="sub1" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="HTML">
                    <Menu.Item key="html">常见考点</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="CSS">
                    <Menu.Item key="css1">常见考点</Menu.Item>
                    <Menu.Item key="css2">思考题</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="JavaScript">
                    <Menu.Item key="js1">常见考点</Menu.Item>
                    <Menu.Item key="js2">思考题</Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="Http">
                    <Menu.Item key="http">常见考点</Menu.Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="Vue">
                    <Menu.Item key="vue">常见考点</Menu.Item>
                </SubMenu>
                <SubMenu key="sub6" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="Webpack">
                    <Menu.Item key="webpack">常见考点</Menu.Item>
                </SubMenu>
                <SubMenu key="sub7" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="浏览器">
                    <Menu.Item key="browser">常见考点</Menu.Item>
                </SubMenu>
                <SubMenu key="sub8" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="性能优化">
                    <Menu.Item key="optimization">常见考点</Menu.Item>
                </SubMenu>
            </Menu>
            }
        </div>
    )
}
export default withRouter(Nav);