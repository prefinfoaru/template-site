import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Card, Table} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import * as actionTypes from "../../store/actions";
import CommonContent from "./CommonContent";

class DarkLayout extends Component {

    componentWillMount() {
        this.props.onChangeLayoutType('dark');
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as='h5'>Dark Layout</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p>In Dark Layout - Your entire layout will be set to Dark colors. You can also change different colors using live customizer.</p>
                                <h5 className="m-15">You can edit this file at [ ../src/config.js ] </h5>
                                <Table bordered striped responsive>
                                    <thead className="header-table">
                                    <tr>
                                        <th>Configuration</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <ul>
                                                <li>layout: <code>vertical/horizontal</code></li>
                                                <li>layoutType: <code>dark</code></li>
                                                <li>headerBackColor: <code>header-blue</code></li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <CommonContent/>
            </Aux>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayoutType: (layoutType) => dispatch({type: actionTypes.LAYOUT_TYPE, layoutType: layoutType})
    }
};

export default connect(null, mapDispatchToProps) (DarkLayout);