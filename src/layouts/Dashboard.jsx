import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'
import { Grid } from 'semantic-ui-react'
import {Route} from "react-router"
import ProductDetail from '../pages/ProductDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Columns width ={4}>
                        <Categories />
                    </Grid.Columns>
                    <Grid.Columns width ={12}>
                       <Route exact path="/" component={ProductList} />
                       <Route exact path="/products" component={ProductList} />
                       <Route path="/products/:name" component={ProductDetail} />
                       <Route exact path="/cart" component={CartDetail} />
                    </Grid.Columns>
                </Grid.Row>
            </Grid>


        </div>
    )

}