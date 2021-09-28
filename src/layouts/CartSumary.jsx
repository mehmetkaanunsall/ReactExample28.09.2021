import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


export default function CartSummary(){
    return(
        <div>
            <Dropdown item text='Sepetiniz'>
                            <Dropdown.Menu>
                                <Dropdown.Item>ACER</Dropdown.Item>
                                <Dropdown.Item>ASUS</Dropdown.Item>
                                <Dropdown.Item>LENOVO</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
        </div>
    )
}