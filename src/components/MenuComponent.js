import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap"
import { useState } from 'react'
import { render } from '@testing-library/react'


function MenuComponent({dishes}) {
    const [selectedDish, setSelectedDish] = useState(null)
    function onDishSelect(dish) {
        setSelectedDish(dish)
    }
    function renderDish(dish) {
        if (dish != null) {
            return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    const menu = dishes.map((dish) => {
        return(
            <div key = {dish.id} className="col-12 col-md-5 m-1">
                <Card onClick = {() => onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
    )})

    return (
        <div className="container">
            <div className="row">
                    {menu}
            </div>
            <div className="row">
                {renderDish(selectedDish)}
            </div>
        </div>
    )
}

export default MenuComponent
