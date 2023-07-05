import React , { useState , useEffect , useCallback } from 'react';
import { RefreshControl , ActivityIndicator } from 'react-native';
import {Button, ScrollView , FlatList } from 'native-base';
import { useFocusEffect } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import OrderItems from './../components/OrderItems';
import { ordersListing } from './../redux';
import { useSelector  , useDispatch } from 'react-redux';
// import { formatCurrency , formatPrice } from './../Common';
import NavigationBar from './../components/NavigationBar';

function OrdersScreen(parms) {
    const { 
        oListingWaiting,
        oListingMessage,
        oListingData,
        oListingFailed,
        oListingPage,
        oListingcurrency,
        oListingEnds
    } =  useSelector( state => state.listOrders );
    
    const { 
        loginData
    } =  useSelector( state => state.useLoginSetter );

    const dispatch = useDispatch();

    const currency_position  =  oListingcurrency?.currency_position; 
    const currency_name      =  oListingcurrency?.currency_name; 
    const currency_icon      =  oListingcurrency?.currency_icon;
    const last_page          =  oListingPage?.last_page || 2;
    const [currentPage, setCurrentPage] = useState(1);
    

    const renderData = (currentPage , refresh = false) =>  {
        ordersListing(loginData?.data?.token , currentPage , refresh)(dispatch)
    }; 

    useEffect(() => {
        renderData(1);
    }, []);


    const ActionRefresh = () => { 
        setCurrentPage(1);
        renderData(1 , true);
    }

    const ActionLoadMore = () => {
        if(last_page >= currentPage && !oListingEnds){
            var newCurrent = currentPage + 1;
            setCurrentPage(newCurrent);
            renderData(newCurrent);
        }else{
            // console.log("can't send more request ");
        }
    };

    return <>
        <NavigationBar title={'Orders'}/>
        <FlatList
                refreshControl={<RefreshControl
                    colors={["#9Bd35A", "#689F38"]}
                    refreshing={oListingWaiting}
                    onRefresh={ActionRefresh} />
                }
                data={(oListingData || [])}
                renderItem={({ item, index }) =>{
                    return <OrderItems  
                            iid={item?.id || '' }
                            orderId = {item?.order_no || ''}
                            noItems = {item?.order_items_count || ''}
                            price={formatCurrency(formatPrice(item?.total  || 0) , currency_position , currency_name , currency_icon) || 0}
                            time = {new Date(item?.created_at).toLocaleString()}
                            pricePaidStatus = {item?.payment_status ||''}
                            activityStatus = {item?.status ||''}
                            photo ={''}
                        />
                }}
                keyExtractor={item => item?.id+'_'+Math.random().toString(36).substr(2, 5)}
                onEndThreshold={0.01}
                initialNumToRender={5}
                onEndReached={ActionLoadMore}
                contentContainerStyle={{ paddingBottom: 90 }}
                ListFooterComponent={()=>{
                    return !oListingEnds && <ActivityIndicator size="large" color="#0000ff" />
                }}
            />
     </>
}

  

export default OrdersScreen;