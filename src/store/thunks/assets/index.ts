import {createAsyncThunk} from "@reduxjs/toolkit";
import {coinGeckoApi} from "../../../utils/axios";

export const getFavoriteAssets = createAsyncThunk(
    'coins/markets',
    async (data: string, {rejectWithValue}) => {
        try {
            const assets = await coinGeckoApi.get(`coins/${data}/market_chart?vs_currency=usd&days=90`)

            const singleAsset = await coinGeckoApi.get(`coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
            return {
                name: data,
                data: assets.data.prices.slice(
                   assets.data.prices.length-30,
                    assets.data.prices.length-1,
                ),
                //делаем срез массива, стартовая идёт -30 с конца, конечная это самый последний элемент
                //массив из апи приходит от старых к новым, стартовая точка идёт -30 с конца,
                //конечная точка идёт конец массив -1, поскольку отчёт массива начинается с нуля
                singleAsset:singleAsset.data
            }
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)