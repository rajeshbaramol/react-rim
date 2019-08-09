import React from 'react'
import { Menu, Breadcrumb, } from 'semantic-ui-react';

const BreadCrumb = () => {
    return (
        <Menu className="headerclass">
            <Breadcrumb icon='right angle'>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section active>Dashboard</Breadcrumb.Section>

            </Breadcrumb>
        </Menu>
    )
}
export default BreadCrumb