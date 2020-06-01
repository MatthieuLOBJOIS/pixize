import { connect } from 'react-redux';

import App from '../App';

import { getAllStock } from '../actions/stock';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getAllStock: () => {
    dispatch(getAllStock());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
