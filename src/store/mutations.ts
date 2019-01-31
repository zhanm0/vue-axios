export default {
    //state 所有公有数据
    changeCity(state:any, city:any) {
        state.city = city;
        try {
            localStorage.city = city;
        } catch (e) {
        }
    }
}