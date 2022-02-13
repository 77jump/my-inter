// @ts-nocheck
import { useEffect, useState } from 'react';
// @ts-ignore
import { Tree, Drawer, Button } from 'antd';
import { DatabaseTwoTone } from '@ant-design/icons';
import Markdown from 'react-markdown';
import gfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './index.less';
import {nanoid} from 'nanoid'

let list = [];

export default (props) => {
    const { md } = props;
    const [markdown, setMarkdown] = useState('');
    const [visible, setVisible] = useState(false); // 导航栏抽屉

    useEffect(() => {
        fetch(md)
            .then(res => res.text())
            .then(text => setMarkdown(text))
        return () => {
            // setList([]);
            list = [];
        }
    }, [])

    const showDrawer = () => {
        setVisible(true);
      };
      const onClose = () => {
          setVisible(false);
        //   setList([]);
          list = [];
      };
    const components = {
        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter style={ dark } language={ match[1] } PreTag="div" children={ String(children).replace(/\n$/, '') } { ...props } />
            ) : (
                <code className={ className } { ...props } />
            )
        },
        h3(props) {
            list[list.length - 1].children.push({ title: props.children[0], key: nanoid() });
            return <h3 style={ { color: 'red' } } { ...props } /> 
        },
        h2(props) {
            list.push({ title: props.children[0], key: nanoid(), children: [] });
            return <h2 { ...props } />
        }
    }

    return (
        <div className="html-contain">
            <Button type="primary" onClick={showDrawer} className="openbutton">
            <DatabaseTwoTone/>
            </Button>
            <Drawer title="导航目录" placement="left" onClose={onClose} visible={visible}>
              {list.length>1 && <Tree treeData={list} className="html-tree" />}
            </Drawer>
            <div className="m-mark">
              <Markdown children={markdown} remarkPlugins={[gfm]} components={ components }/>  
            </div>
        </div>
    )
}
