import { connect } from 'react-redux';

import Home from 'components/Pages/Home';
import { getAllStock } from 'actions/stock';

const mapStateToProps = (state) => ({
	allStock: state.stock.allStock,
});

const mapDispatchToProps = (dispatch) => ({
	getAllStock: () => {
		dispatch(getAllStock());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
