import { useState } from 'react';
import { Collapse, Popover, Modal } from 'antd';
import { GithubOutlined, CarryOutOutlined } from '@ant-design/icons';
import './index.less'

const { Panel } = Collapse;

export default () => {
    const [visible, setVisible] = useState(false);
    return (
        <div className="header">
            <Collapse>
                <Panel key="1" header="美妙的答题之旅" style={{padding:0,margin:0}}>
                    <div className="contain">
                        <a href="https://github.com/" target="_blank">
                            <Popover content="前往Github">
                              <GithubOutlined className="icons" />  
                            </Popover>
                        </a>
                        <div onClick={()=>setVisible(true)}>
                            <Popover content="查看计划表">
                              <CarryOutOutlined className="icons" />  
                            </Popover>
                        </div>
                    </div>   
                </Panel>       
            </Collapse>
            <Modal
                title="计划表"
                visible={visible}
                footer={false}
                onCancel={() => { setVisible(false) }}
            >
                <p>面经模板*2</p>
                <p>leetcode50道速记</p>
                <a
                    target="_blank"
                    href="https://github.com/nlpjoe/Coding4Interviews/tree/master/%E5%89%91%E6%8C%87offer"
                >
                    <p>剑指Offer</p>
                </a>
                <a
                    target="_blank"
                    href="https://www.nowcoder.com/discuss/526897"
                >
                    <p>智力题</p>
                </a>
                <a
                    target="_blank"
                    href="https://github.com/haizlin/fe-interview/issues?page=1&q=is%3Aissue+is%3Aopen"
                >
                    <p>每日三合一</p>
                </a>
                <p>
                    vue项目编写
                </p>
                <p>计算机网络</p>
            </Modal>
        </div>
    )
}
