import React from 'react';
import {  withRouter } from 'react-router-dom';
import { Spinner, Container, Row, Col } from 'reactstrap';

import { useDispatch, useSelector } from "react-redux";

import styles from './SearchResults.module.scss';
import SearchResult from '../../components/SeachResult/SearchResult';
import LocationMap from '../../components/UI/LocationMap/LocationMap';
import SearchShopInput from '../LandingPage/SearchShopInput/SearchShopInput';

export default function SearchResults(props) {
    const count = useSelector(state => state.storeReducer.stores);
    const dispatch = useDispatch();
    
    return (
        <Container fluid id={styles.content}>
            <Row>
                <Col></Col>
                <Col xs="6" className="">
                    <Row className="pb-5">
                        <SearchShopInput
                            // address={address}
                            // addressValid={addressValid}
                            // setAddress={setAddress}

                            // query={query}
                            // setQuery={setQuery}

                            addressDisabled
                        />
                    </Row>
                    <SearchResult />
                    <SearchResult />
                
                </Col>
                <Col></Col>
                <Col xs="3" className="border p-0"> 

                    <LocationMap   
                        mapHeight={document.documentElement.clientHeight * 0.7}
        
                        startingLat={2323}
                        startingLng={3232}
                        selectedLat={232}
                        selectedLng={3232}
                        hasLocation={true}

                        // handleMapClick={this.handleMapClick}
                    />
                
                </Col >
                <Col></Col>
            </Row>
            
        </Container>
    )


}