import React, { useCallback, useEffect } from "react";
import {func, array} from 'prop-types';
import {connect} from 'react-redux';
import { getAlertsData } from "../../../store/actions/alerts";

import SectionTitle from '../../atoms/alerts/sectionTitle/SectionTitle'
import AlertItem from '../alertItem/AlertsItem'
;import Loading from '../../atoms/alerts/loading/Loading';
import {PageWrapper} from './AlertsListStyles';

const AlertsList = ({
    alerts, 
    onGetAlertsData
}) =>{
   
    const loadAlertsData = useCallback(async () => {
        try {
            await onGetAlertsData();
        } catch (err) {
            console.log(err)
        }
    }, [onGetAlertsData]);

    useEffect(() => {
        loadAlertsData()
    }, [loadAlertsData]);

    if(alerts.length <= 0 ){
        return <Loading display="inline-block" />
    }

    return (
        <PageWrapper>
            {alerts.map((obj, alertIndex)=>{
                return (
                    <div key={alertIndex} className="SectionWrapper">
                        <SectionTitle title={obj.sectionTitle} iconName={obj.sectionIconName} />
                        {obj.items.map( (item, itemIndex) => {
                            return (
                                <AlertItem 
                                    key={itemIndex}
                                    item={item}
                                    alertIndex={alertIndex}
                                    itemIndex={itemIndex}
                                />
                            )
                        })}
                    </div>
                );
            })}
        </PageWrapper>
    )
}

const mapStateToProps = state => {
    return {
        alerts: state.alertsData.alerts
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        onGetAlertsData: () => dispatch(getAlertsData())
    }
}

AlertsList.propTypes = {
    alerts: array , 
    onGetAlertsData: func, 
    onUpdateInputValue: func, 
    onSetErrorMessage: func, 
    onSetCommunicationMethod: func, 
    onSetCommunicationError: func,
    onUnSetCommunicationMethod: func, 
    onUnSetCommunicationError: func,
    onTurnNotificationOn: func, 
    onTurnNotificationOff: func
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertsList);
