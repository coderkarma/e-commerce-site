import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../collection/CollectionPageContainer';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';

class Shop extends Component {

  componentDidMount() {
    const { fetchCollectionStart} = this.props;
    fetchCollectionStart();
  }

  render() {
    const { match} = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={<CollectionsOverviewContainer />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
