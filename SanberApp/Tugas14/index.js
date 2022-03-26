import React from "react";

import store from "./app/store";
import { Provider } from "react-redux";

import CounterScreen from "./screens/CounterScreen";

export default function Tugas19() {
    return (
        <Provider store={store}>
            <CounterScreen />
        </Provider>
    );
}