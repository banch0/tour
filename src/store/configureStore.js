import { createStore } from  'redux';
import rootRedeucer from '../reducers';

export default function configureStore(initialState) {
    const store = createStore(rootRedeucer, initialState)
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }
    return store
}
{/*
Page.propTypes = {
year: PropTypes.number.isRequired,
photos: PropTypes.array.isRequired
}Используется ли proptypes

export default class User extends Component делать то 
как тогда отправить компонент в функцию connect

const { year, photos } = this.props.page 
Что означает такая запись?
*/}