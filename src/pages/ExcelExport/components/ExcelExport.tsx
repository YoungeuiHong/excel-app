import React, {useState} from 'react';
import {Tree, TreeProps} from "antd";
import type {DataNode} from 'antd/es/tree';
import {Button} from "@mui/material";

const treeData: DataNode[] = [
    {
        title: 'parent 1',
        key: '0-0',
        children: [
            {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                    {
                        title: 'leaf',
                        key: '0-0-0-0',
                        disableCheckbox: true,
                    },
                    {
                        title: 'leaf',
                        key: '0-0-0-1',
                    },
                ],
            },
            {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{title: <span style={{color: '#1890ff'}}>sss</span>, key: '0-0-1-0'}],
            },
        ],
    },
];


export const ExcelExport = () => {
    const [ tree, setTree ] = useState<DataNode[]>(treeData);

    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);

    };

    const addDataNode = (parentKey: string) => {
        const newData = treeData.slice();
        const newnewData: DataNode[]  = newData.map((dataNode: DataNode) => {
            if (dataNode.key == parentKey) {
                const children = dataNode.children ? dataNode.children.slice() : [];
                children.push({
                    title: 'new leaf',
                    key: '0-0-2',
                })

                const newDataNode: DataNode = {
                    ...dataNode,
                    children: children.slice()
                }
                console.log('newDataNode', newDataNode);
                return newDataNode;
            } else {
                return dataNode;
            }
        });

        console.log(newnewData)

        setTree(
            newnewData
        );
    }

    const onClick = () => {
        addDataNode('0-0')
    }

    return (
        <div>
            <h1>Export Excel</h1>
            <Button
                onClick={onClick}
            >
                Click!
            </Button>
            <Tree
                checkable
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}
                onSelect={onSelect}
                onCheck={onCheck}
                treeData={tree}
            />
        </div>
    );
}