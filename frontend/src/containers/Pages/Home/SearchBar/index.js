import { connect } from 'react-redux';

import SearchBar from 'components/Pages/Home/SearchBar';

import { searchbarStock } from 'actions/stock';

const mapStateToProps = (state) => ({
	searchValue: state.stock.searchValue,
});

const mapDispatchToProps = (dispatch) => ({
	searchbarStock: (event, data) => {
		dispatch(searchbarStock(data.value));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
