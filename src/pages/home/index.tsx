import React, {FC, useCallback, useEffect, useMemo, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./styles";
import {current} from "@reduxjs/toolkit";
import AreaChart from "../../components/charts/area-chart";
import TrendUp from '../../assets/images/chart/trend-up.svg'
import TrendDown from '../../assets/images/chart/trend-down.svg'
import LineChart from "../../components/charts/line-chart";
import {IChartData} from '../../common/types/assets'


const Home: FC = (): JSX.Element => {
    const classes = useStyles()
    const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets)
    const dispatch = useAppDispatch()
    const fetchDataRef = useRef(false)

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])
    const filteredArray = favoriteAssets.filter(
        (value, index, self) => index === self.findIndex((t) => t.name === value.name)
    )

    const fetchData = useCallback((data: string[]) => {
        data.forEach((item: string) => {
            dispatch(getFavoriteAssets(item))
        })
    }, [dispatch])

    // console.log(favoriteAssets,'Assets<<< ' )
    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
    }, [favoriteAssetName, fetchData])

    const renderFavoriteBlock = filteredArray.map((item: any) => {

        // console.log(item,'item<<<')
        const currentPrice = item.singleAsset.map(
            (item: any) => item.current_price,
        )
        // const currentCap=item.singleAsset.map(
        //     (item:any)=>item.market_cap,
        // )
        const changePrice = item.singleAsset.map(
            (item: any) => item.price_change_percentage_24h,
        )
        return (
            <Grid item lg={6} sm={6} xs={12} key={item.name}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h3 className={classes.assetName}>{item.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}> ${currentPrice}</h3>
                            <Box
                                className={
                                    changePrice > 0
                                        ? `${classes.priceTrend} ${classes.trendUp}`
                                        : `${classes.priceTrend} ${classes.trendDown}`
                                }
                            >
                                {changePrice > 0 ? (
                                        <img src={TrendUp} alt="TrendUp"/>
                                    )
                                    : (
                                        <img src={TrendDown} alt="TrendDown"/>
                                    )}
                                <span>{Number(changePrice).toFixed(2)}%</span>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={item.price_chart_data}/>
                    </Grid>

                </Grid>
            </Grid>
        )
    })

    return (
        <Box className={classes.root}>

            <Grid container spacing={2} className={classes.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredArray.length && <LineChart data={filteredArray}></LineChart>}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
