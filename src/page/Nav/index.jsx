import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useHistory, withRouter } from "react-router-dom";
import './index.less';

const { SubMenu } = Menu;
function Nav() {
    let history = useHistory();

    const HandleClick = (e) => {
        history.push(`/my-inter/${e.key}`);
    };

    return (
        <div className="contain">
            <Menu
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
                    <Menu.Item key="css">常见考点</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<MailOutlined style={{ marginRight: '30px' }} />} title="JavaScript">
                    <Menu.Item key="javascript">常见考点</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
    )
}
export default withRouter(Nav);