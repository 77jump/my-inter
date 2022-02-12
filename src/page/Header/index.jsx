import { Collapse } from 'antd';
import './index.less'

const { Panel } = Collapse;

export default () => {
    return (
        <div className="header">
            <Collapse>
                <Panel key="1" header="美妙的答题之旅">
                  <div className="contain">
                    <img src="https://cdn.docschina.org/static/media/docschina-logo.4c5554f1.svg" alt="logo"></img>
                </div>   
                </Panel>       
            </Collapse>
        </div>
    )
}
